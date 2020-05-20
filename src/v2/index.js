const { camelCase } = require("change-case");

const { isPathException } = require("../common/is-path-exception");
const { templateRequestCode } = require("../common/templates/request-code");
const { pathDefaultParams } = require("../common/path-default-params");
const { pathParametersByIn } = require("../common/path-parameters-by-in");
const { templateRequestTypes } = require("../common/templates/request-types");
const { getMode } = require("../common/get-mode");
const { buildObjectByRefs } = require("../common/build-object-by-refs");
const { buildObjectByMode } = require("../common/build-object-by-mode");

function swaggerV2ToJs(apiJson, config = {}) {
  const content = { code: "", types: "" };

  buildPaths(content, { apiJson, config });

  return content;
}

function buildPaths(content, state) {
  const { apiJson } = state;

  Object.keys(apiJson.paths).forEach((url) => {
    Object.keys(apiJson.paths[url]).forEach((method) => {
      const pathConfig = apiJson.paths[url][method];
      const pathParams = { url, method, pathConfig };

      if (isPathException(pathParams, state)) return;

      // Path code
      const pathCodeParams = buildPathCodeParams(pathParams, state);

      content.code += templateRequestCode(pathCodeParams);
      content.code += "\n\n";

      // Path types by variants
      const pathVariants = getPathVariants(pathParams);

      pathVariants.forEach((variant, index, variants) => {
        const pathVariantTypesParams = buildPathVariantTypesParams({
          variant,
          index,
          variants,
          pathParams,
          state,
        });

        content.types += templateRequestTypes(pathVariantTypesParams);
        content.types += "\n\n";
      });
    });
  });
}

function buildPathCodeParams(pathParams, state) {
  const { pathConfig } = pathParams;

  return {
    name: camelCase(pathConfig.operationId),
    isExistParams: (pathConfig.parameters || []).length > 0,
    method: pathParams.method,
    url: pathParams.url,
    isWarningDeprecated:
      pathConfig.deprecated && state.config.deprecated !== "ignore",
    defaultParams: pathDefaultParams(getPathVariants(pathParams)),
  };
}

function buildPathVariantTypesParams({
  variant,
  index,
  variants,
  pathParams,
  state,
}) {
  const countVariants = variants.length;
  const isMoreOneVariant = countVariants > 1;

  return {
    name: camelCase(pathParams.pathConfig.operationId),
    params: buildPathParamsTypes(variant, pathParams, state),
    addedParams: isMoreOneVariant ? buildPathAddedParamsTypes(variant) : null,
    result: buildPathResultTypes(variant, pathParams, state),
    countVariants,
    index,
  };
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
