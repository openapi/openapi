const objectHash = require("object-hash");

const { isPathException } = require("../common/is-path-exception");
const { templateRequestCode } = require("../common/templates/request-code");
const { pathDefaultParams } = require("../common/path-default-params");
const { tempateRequestTypes } = require("../common/templates/request-types");
const { pathParametersByIn } = require("../common/path-parameters-by-in");
const { getMode } = require("../common/get-mode");
const { buildObjectByRefs } = require("../common/build-object-by-refs");
const { buildObjectByMode } = require("../common/build-object-by-mode");

function build(apiJson, config = {}) {
  const store = new Map();
  const setStore = (value) => {
    const key = objectHash(value);
    store.set(key, value);
    return key;
  };
  const content = { code: "", types: "" };
  const state = { apiJson, config, store, setStore, content };

  content.types +=
    "type RequestResult<Data> = Promise<{ response: Response; data: Data; }>;\n\n";

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
  const isWarningDeprecated =
    pathConfig.deprecated && state.config.deprecated !== "ignore";
  const isExistParams =
    Boolean(pathConfig.requestBody && pathConfig.requestBody.content) ||
    (pathConfig.parameters || []).length > 0;

  state.content.code += templateRequestCode({
    name: pathConfig.operationId,
    method: pathParams.method,
    url: pathParams.url,
    isWarningDeprecated,
    isExistParams,
    defaultParams: pathDefaultParams(getPathVariants(pathParams, state)),
  });
  state.content.code += "\n\n";
}

function printPathTypes(pathParams, state) {
  const name = pathParams.pathConfig.operationId;
  const variants = getPathVariants(pathParams, state);
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
  if (variant.produce) {
    const result = getPathResponses(pathParams, state)[variant.produce];

    if (result) {
      const mode = getMode(variant.produce);
      const objectByRefs = buildObjectByRefs(result, state);
      const objectByMode = buildObjectByMode(objectByRefs, mode);

      return objectByMode;
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

function getPathRequestBody(pathParams, state) {
  const { pathConfig } = pathParams;

  if (pathConfig.requestBody) {
    const requestBody = buildObjectByRefs(pathConfig.requestBody, state);

    if (requestBody) {
      return requestBody.content;
    }
  }

  return null;
}

function getPathResponses(pathParams, state) {
  const { pathConfig } = pathParams;

  if (pathConfig.responses && pathConfig.responses["200"]) {
    const result = buildObjectByRefs(pathConfig.responses["200"], state);

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

module.exports = { build };
