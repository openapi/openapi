const { pathDefaultParams } = require("../common/path-default-params");
const { pathParametersByIn } = require("../common/path-parameters-by-in");
const { getMode } = require("../common/get-mode");
const { buildObjectByRefs } = require("../common/build-object-by-refs");
const { buildObjectByMode } = require("../common/build-object-by-mode");
const { buildBase } = require("../common/build-base");
const { buildPaths } = require("../common/build-paths");

async function swaggerV2ToJs(apiJson, config = {}) {
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

  return {
    name: pathParams.name,
    isExistParams: (pathConfig.parameters || []).length > 0,
    method: pathParams.method,
    url: pathParams.url,
    isWarningDeprecated: pathConfig.deprecated && state.config.deprecated !== "ignore",
    defaultParams: pathDefaultParams(getPathVariants(pathParams)),
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
    params: buildPathParamsTypes(variant, pathParams, state),
    addedParams: isMoreOneVariant ? buildPathAddedParamsTypes(variant) : null,
    result: buildPathResultTypes(variant, pathParams, state),
    countVariants,
    index,
    summary,
    description,
  };
}

function buildPathParamsTypes(variant, pathParams, state) {
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

function buildPathResultTypes(variant, pathParams) {
  const { pathConfig } = pathParams;
  const object = pathConfig.responses ? pathConfig.responses["200"] || null : null;

  if (object) {
    object.type = object.type || "swagger-to-js/path-result";

    const mode = getMode(variant.produce);

    return buildObjectByMode(object, mode);
  }

  return null;
}

function eachPathVariant(pathParams, callback) {
  const { pathConfig } = pathParams;
  const { consumes = [null], produces = [null] } = pathConfig;

  consumes.forEach((consume) => {
    produces.forEach((produce) => callback({ consume, produce }));
  });
}

function getPathVariants(pathParams) {
  const variants = [];

  eachPathVariant(pathParams, (variant) => variants.push(variant));

  return variants;
}

module.exports = { swaggerV2ToJs };
