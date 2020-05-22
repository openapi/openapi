const { isPathException } = require("../common/is-path-exception");
const { pathDefaultParams } = require("../common/path-default-params");
const { pathParametersByIn } = require("../common/path-parameters-by-in");
const { getMode } = require("../common/get-mode");
const { buildObjectByRefs } = require("../common/build-object-by-refs");
const { buildObjectByMode } = require("../common/build-object-by-mode");
const { baseBuild } = require("../common/base-build");
const { buildPathName } = require("../common/build-path-name");

async function swaggerV2ToJs(apiJson, config = {}) {
  const nextApiJson = await buildObjectByRefs(apiJson, { apiJson, config });

  return baseBuild(
    (content) => buildPaths(content, { apiJson: nextApiJson, config }),
    config,
  );
}

function buildPaths(content, state) {
  const { apiJson, config } = state;

  Object.keys(apiJson.paths).forEach((url) => {
    Object.keys(apiJson.paths[url]).forEach((method) => {
      const pathConfig = apiJson.paths[url][method];
      const pathParams = { url, method, pathConfig };

      if (isPathException(pathParams, state)) return;

      // Path name
      pathParams.name = buildPathName(pathParams);

      // Path code
      const pathCodeParams = buildPathCodeParams(pathParams, state);

      content.code += config.templateRequestCode(pathCodeParams);
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

        content.types += config.templateRequestTypes(pathVariantTypesParams);
        content.types += "\n\n";
      });
    });
  });
}

function buildPathCodeParams(pathParams, state) {
  const { pathConfig } = pathParams;

  return {
    name: pathParams.name,
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
