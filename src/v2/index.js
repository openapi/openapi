const objectHash = require("object-hash");
const { camelCase } = require("change-case");

const { isPathException } = require("../common/is-path-exception");
const { templateRequestCode } = require("../common/templates/request-code");
const { pathDefaultParams } = require("../common/path-default-params");
const { pathParametersByIn } = require("../common/path-parameters-by-in");
const { tempateRequestTypes } = require("../common/templates/request-types");
const { getMode } = require("../common/get-mode");
const { buildObjectByRefs } = require("../common/build-object-by-refs");
const { buildObjectByMode } = require("../common/build-object-by-mode");

function swaggerV2ToJs(apiJson, config = {}) {
  const store = new Map();
  const setStore = (value) => {
    const key = objectHash(value);
    store.set(key, value);
    return key;
  };
  const content = { code: "", types: "" };
  const state = { apiJson, config, store, setStore, content };

  buildPaths(state);

  return content;
}

function buildPaths(state) {
  const { apiJson } = state;

  Object.keys(apiJson.paths).forEach((url) => {
    Object.keys(apiJson.paths[url]).forEach((method) => {
      const pathConfig = apiJson.paths[url][method];
      const pathParams = { url, method, pathConfig };

      if (isPathException(pathParams, state)) return;

      printPathCode(pathParams, state);
      printPathTypes(pathParams, state);
    });
  });
}

function printPathCode(pathParams, state) {
  const { pathConfig } = pathParams;

  state.content.code += templateRequestCode({
    name: camelCase(pathConfig.operationId),
    isExistParams: (pathConfig.parameters || []).length > 0,
    method: pathParams.method,
    url: pathParams.url,
    isWarningDeprecated:
      pathConfig.deprecated && state.config.deprecated !== "ignore",
    defaultParams: pathDefaultParams(getPathVariants(pathParams)),
  });
  state.content.code += "\n\n";
}

function printPathTypes(pathParams, state) {
  const name = camelCase(pathParams.pathConfig.operationId);
  const variants = getPathVariants(pathParams);
  const countVariants = variants.length;
  const isMoreOneVariant = countVariants > 1;

  variants.forEach((variant, index) => {
    const params = buildPathParamsTypes(variant, pathParams, state);
    const addedParams = isMoreOneVariant
      ? buildPathAddedParamsTypes(variant)
      : null;
    const result = buildPathResultTypes(variant, pathParams, state);

    state.content.types += tempateRequestTypes({
      name,
      countVariants,
      index,
      params,
      addedParams,
      result,
    });
    state.content.types += "\n\n";
  });
}

function buildPathParamsTypes(variant, pathParams, state) {
  const parametersByIn = pathParametersByIn(pathParams, state);

  if (Object.keys(parametersByIn).length) {
    const mode = getMode(variant.consume);
    const objectByRefs = buildObjectByRefs(parametersByIn, state);
    const objectByMode = buildObjectByMode(objectByRefs, mode);

    return objectByMode;
  }

  return null;
}

function buildPathAddedParamsTypes(variant) {
  const { consume, produce } = variant;
  const header = {};

  if (consume) {
    header.accept = { type: "string", enum: [consume] };
  }

  if (produce) {
    header["Content-Type"] = { type: "string", enum: [produce] };
  }

  if (Object.keys(header).length) {
    return { header };
  }

  return null;
}

function buildPathResultTypes(variant, pathParams, state) {
  const { pathConfig } = pathParams;
  const object = pathConfig.responses
    ? pathConfig.responses["200"] || null
    : null;

  if (object) {
    const mode = getMode(variant.produce);
    const objectByRefs = buildObjectByRefs(object, state);
    const objectByMode = buildObjectByMode(objectByRefs, mode);

    return objectByMode;
  }

  return null;
}

function getPathVariants(pathParams) {
  const { pathConfig } = pathParams;
  const { consumes = [null], produces = [null] } = pathConfig;
  const variants = [];

  consumes.forEach((consume) => {
    produces.forEach((produce) => variants.push({ consume, produce }));
  });

  return variants;
}

module.exports = { swaggerV2ToJs };
