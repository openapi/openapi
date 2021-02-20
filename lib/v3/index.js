const { pathDefaultParams } = require("../common/path-default-params");
const { pathParametersByIn } = require("../common/path-parameters-by-in");
const { getMode } = require("../common/get-mode");
const { buildObjectByRefs } = require("../common/build-object-by-refs");
const { buildObjectByMode } = require("../common/build-object-by-mode");
const { buildBase } = require("../common/build-base");
const { buildPaths } = require("../common/build-paths");

async function swaggerV3ToJs(apiJson, config = {}) {
  const nextApiJson = await buildObjectByRefs(apiJson, { apiJson, config });
  const buildPathOptions = {
    buildPathCodeParams,
    getPathVariants,
    buildPathVariantTypesParams,
  };
  const state = { apiJson: nextApiJson, config };

  return buildBase((content) => buildPaths(buildPathOptions)(content, state), nextApiJson, config);
}

function buildPathCodeParams(pathParams, state) {
  const { pathConfig } = pathParams;
  const isWarningDeprecated = pathConfig.deprecated && state.config.deprecated !== "ignore";
  const isExistParams =
    Boolean(pathConfig.requestBody && pathConfig.requestBody.content) ||
    (pathConfig.parameters || []).length > 0;

  return {
    name: pathParams.name,
    method: pathParams.method,
    url: pathParams.url,
    isWarningDeprecated,
    isExistParams,
    defaultParams: pathDefaultParams(getPathVariants(pathParams, state)),
  };
}

function buildPathVariantTypesParams({ variant, index, variants, pathParams, state }) {
  const { pathConfig } = pathParams;
  const { config } = state;

  const countVariants = variants.length;
  const isMoreOneVariant = countVariants > 1;
  const isAddDescription = index === 0 && !config.ignoreDescription;

  const summary = isAddDescription ? pathConfig.summary || "" : "";
  const description = isAddDescription ? pathConfig.description || "" : "";

  return {
    name: pathParams.name,
    countVariants,
    index,
    params: buildPathParamsTypes(variant, pathParams, state),
    addedParams: isMoreOneVariant ? buildPathAddedParamsTypes(variant) : null,
    result: buildPathResultTypes(variant, pathParams, state),
    summary,
    description,
  };
}

function buildPathParamsTypes(variant, pathParams, state) {
  if (variant.consume) {
    let body = getPathRequestBody(pathParams, state)[variant.consume];

    if (body) {
      body = { in: "body", name: "body", ...body };

      if (pathParams.pathConfig.parameters === undefined) {
        pathParams.pathConfig.parameters = [];
      }

      pathParams.pathConfig.parameters.push(body);
    }
  }

  const parametersByIn = pathParametersByIn(pathParams, state);

  if (Object.keys(parametersByIn).length) {
    const mode = getMode(variant.consume);

    return buildObjectByMode(parametersByIn, mode);
  }

  return null;
}

function buildPathAddedParamsTypes(variant) {
  const { consume, produce } = variant;
  const header = { type: "object", properties: {}, required: [] };

  if (consume) {
    header.properties.accept = { type: "string", enum: [consume] };
    header.required.push("accept");
  }

  if (produce) {
    header.properties["Content-Type"] = { type: "string", enum: [produce] };
    header.required.push("Content-Type");
  }

  if (Object.keys(header).length) {
    return { type: "object", properties: { header } };
  }

  return null;
}

function buildPathResultTypes(variant, pathParams, state) {
  if (variant.produce) {
    const result = getPathResponses(pathParams, state)[variant.produce];

    if (result) {
      result.type = result.type || "swagger-to-js/path-result";

      const mode = getMode(variant.produce);

      return buildObjectByMode(result, mode);
    }
  }
}

function eachPathVariant(pathParams, state, callback) {
  const requestBody = getPathRequestBody(pathParams, state);
  const responses = getPathResponses(pathParams, state);

  const consumes = requestBody ? Object.keys(requestBody) : [null];
  const produces = responses ? Object.keys(responses) : [null];

  consumes.forEach((consume) => {
    produces.forEach((produce) => {
      callback({ consume, produce });
    });
  });
}

function getPathRequestBody(pathParams) {
  const { pathConfig } = pathParams;

  if (pathConfig.requestBody) {
    const requestBody = pathConfig.requestBody;

    if (requestBody) {
      return requestBody.content;
    }
  }

  return null;
}

function getPathResponses(pathParams) {
  const { pathConfig } = pathParams;

  if (pathConfig.responses && pathConfig.responses["200"]) {
    const result = pathConfig.responses["200"];

    if (result) {
      return result.content;
    }
  }

  return null;
}

function getPathVariants(pathParams, state) {
  const variants = [];

  eachPathVariant(pathParams, state, (variant) => variants.push(variant));

  return variants;
}

module.exports = { swaggerV3ToJs };
