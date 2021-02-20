const path = require("path");
const getIsUrl = require("is-url");
const fetch = require("node-fetch");
const { readFileSync } = require("fs");

const { contentToJson } = require("../lib/content-to-json");

async function loadApiJson(config) {
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

module.exports = { loadApiJson };
