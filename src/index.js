const path = require("path");
const getIsUrl = require("is-url");
const fetch = require("node-fetch");
const { contentToJson } = require("./lib/content-to-json");
const { readFileSync } = require("fs");

const {
  templateRequestCode: _templateRequestCode,
} = require("./common/templates/request-code");
const {
  templateRequestTypes: _templateRequestTypes,
} = require("./common/templates/request-types");
const {
  templateTypesBefore: _templateTypesBefore,
} = require("./common/templates/types-before");
const { swaggerV2ToJs } = require("./v2");
const { swaggerV3ToJs } = require("./v3");

async function swaggerToJs(_config = {}) {
  const config = buildConfig(_config);

  validConfig(config);

  const apiJson = await getApiJson(config);

  return byVersion(apiJson, config);
}

function buildConfig(config = {}) {
  const {
    file = "",
    apiJson = "",
    mode = "prod",
    deprecated = "warning",
    originalBody = false,
    ignoreDescription = false,

    templateRequestCode = _templateRequestCode,
    templateRequestTypes = _templateRequestTypes,
    templateTypesBefore = _templateTypesBefore,
  } = config;

  return {
    file,
    apiJson,
    deprecated,
    mode,
    originalBody,
    ignoreDescription,

    templateRequestCode,
    templateRequestTypes,
    templateTypesBefore,
  };
}

function validConfig(config) {
  const isExistFile = Boolean(config.file);
  const isExistApiJson = Boolean(config.apiJson);

  if (isExistFile === false && isExistApiJson === false) {
    throw new Error(
      "Setup path to file with swagger api or insert content apiJson.",
    );
  }
}

async function getApiJson(config) {
  if (config.apiJson) {
    return config.apiJson;
  }

  const isUrl = getIsUrl(config.file);

  // By url
  if (isUrl) {
    return fetchApi(config);
  }

  // By local file
  const apiPath = path.resolve(process.cwd(), config.file);

  return contentToJson(apiPath, () => readFileSync(apiPath, "utf8"));
}

function fetchApi(config) {
  return fetch(config.file, {
    headers: { authorization: config.authorization },
  })
    .then((response) => {
      if (response.status === 401) {
        throw new Error("Unable to get file. Specify authorization settings.");
      }

      return response.text();
    })
    .then((content) => contentToJson(config.file, () => content));
}

function byVersion(apiJson, config) {
  if (apiJson.openapi) {
    return swaggerV3ToJs(apiJson, config);
  } else if (apiJson.swagger) {
    return swaggerV2ToJs(apiJson, config);
  }

  throw new Error("Swagger version didn't detect");
}

module.exports = { swaggerToJs };
