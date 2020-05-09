const objectHash = require("object-hash");

const { camelCase } = require("../lib/camel-case");
const { getRefName } = require("./common");

function build(apiJson, config = {}) {
  const store = {
    refs: new Map(),
    params: new Map(),
    addedParams: new Map(),
    results: new Map(),
    requests: new Map(),
  };

  Object.keys(apiJson.paths).forEach((url) => {
    Object.keys(apiJson.paths[url]).forEach((method) => {
      const pathConfig = apiJson.paths[url][method];
      const isException =
        config.deprecated === "exception" && Boolean(pathConfig.deprecated);

      if (isException) {
        return;
      }

      buildPath({ store, url, method, pathConfig, apiJson }, config);
    });
  });

  return store;
}

function buildPath(params, config = {}) {
  const { pathConfig, store, apiJson } = params;
  const variants = new Map();

  const checkRef = (link) => {
    const ref = buildRef({ link, apiJson }, { checkRef });

    store.refs.set(link, ref);
  };

  (pathConfig.consumes || [null]).forEach((consume) => {
    (pathConfig.produces || [null]).forEach((produce) => {
      const variant = buildPathVariant(
        { pathConfig, consume, produce },
        { checkRef },
        config,
      );
      const variantKeys = buildVariantKeys(variant);

      if (variantKeys.params) {
        store.params.set(variantKeys.params, variant.params);
      }

      if (variantKeys.addedParams) {
        store.addedParams.set(variantKeys.addedParams, variant.addedParams);
      }

      if (variantKeys.result) {
        store.results.set(variantKeys.result, variant.result);
      }

      variants.set(objectHash(variantKeys), variantKeys);
    });
  });

  const request = {
    url: params.url,
    method: params.method,
    deprecated: Boolean(pathConfig.deprecated),
    variants,
  };

  store.requests.set(pathConfig.operationId, request);
}

function buildPathVariant(params, options = {}, config = {}) {
  return {
    params: buildPathVariantParams(params, options, config),
    addedParams: buildPathVariantAddedParams(params, options, config),
    result: buildPathVariantResult(params, options, config),
  };
}

function buildVariantKeys(variant) {
  return {
    params: variant.params ? objectHash(variant.params) : null,
    addedParams: variant.addedParams ? objectHash(variant.addedParams) : null,
    result: variant.result ? objectHash(variant.result) : null,
  };
}

function buildRef(params, options = {}) {
  const { link, apiJson } = params;
  const refConfig = getRefByLink(apiJson, link);

  return buildType(refConfig, options);
}

function buildPathVariantParams({ pathConfig }, options = {}, config = {}) {
  const { parameters = [] } = pathConfig;

  const params = parameters.reduce((memo, originalParameter) => {
    const parameter = parsePathVariantParamsParameter(
      originalParameter,
      options,
    );

    if (!memo[parameter.in]) {
      memo[parameter.in] = {};
    }

    memo[parameter.in][parameter.name] = parameter.type;

    return memo;
  }, {});

  // Check body, if have one element so push up to root body
  if (params.body && config.shortBody) {
    const bodyKeys = Object.keys(params.body);

    if (bodyKeys.length === 1) {
      params.body = params.body[bodyKeys[0]];
    }
  }

  // Params header to calelCase
  if (params.header) {
    params.header = Object.keys(params.header).reduce((memo, key) => {
      memo[camelCase(key)] = params.header[key];

      return memo;
    }, {});
  }

  return Object.keys(params).length ? params : null;
}

function parsePathVariantParamsParameter(parameter, options = {}) {
  let { in: parameterIn } = parameter;

  // TODO It is resolve in 'request'
  // It is mistake maybe =)
  if (parameterIn === "formData") {
    parameterIn = "body";
  }

  return {
    name: parameter.name,
    in: parameterIn,
    type: buildType(parameter, options),
  };
}

function buildPathVariantAddedParams({ consume, produce }) {
  const addedParams = {};

  if (consume || produce) {
    addedParams.header = {};

    if (consume) {
      addedParams.header.accept = {
        type: `"${consume}"`,
        required: true,
      };
    }

    if (produce) {
      addedParams.header.contentType = {
        type: `"${produce}"`,
        required: true,
      };
    }
  }

  return Object.keys(addedParams).length ? addedParams : null;
}

function buildPathVariantResult({ pathConfig }, options = {}) {
  const defaultValue = "void";
  // let result = { type: defaultValue, required: false };
  let result = null;

  if (pathConfig.responses && pathConfig.responses["200"]) {
    result = buildType(pathConfig.responses["200"], {
      ...options,
      defaultValue,
    });
  }

  return result;
}

function buildType(object, options = {}) {
  const { defaultValue = "any", checkRef = () => {} } = options;
  const required = Boolean(object.required);

  if (object["$ref"]) {
    checkRef(object["$ref"]);
    return { type: getRefName(object["$ref"]), required };
  } else if (object.schema) {
    return buildType({ ...object.schema, required }, options);
  } else if (object.type) {
    return buildTypeByObjectType(object, options);
  }

  return { type: defaultValue, required };
}

function buildTypeByObjectType(object, options = {}) {
  const { defaultValue = "any" } = options;
  let type = defaultValue;
  const required = Boolean(object.required);

  switch (object.type) {
    case "array":
      type = parseObjectTypeArray(object, options);
      break;
    case "object":
      type = parseObjectTypeObject(object, options);
      break;
    default:
      type = toJsType(object.type, defaultValue);
      break;
  }

  return { type, required };
}

function parseObjectTypeArray(object, options = {}) {
  const { defaultValue = "any", checkRef = () => {} } = options;
  const ref = object.items["$ref"] || null;
  let type = defaultValue;

  if (ref) {
    type = `${getRefName(ref)}[]`;
  } else {
    type = `${toJsType(object.items.type, defaultValue)}[]`;
  }

  if (ref) {
    checkRef(ref);
  }

  return type;
}

function parseObjectTypeObject(object, options = {}) {
  const { additionalProperties, properties, required = [] } = object;
  const { defaultValue = "any" } = options;
  let type = defaultValue;

  if (additionalProperties) {
    return `{ [nameProp: string]: ${toJsType(
      additionalProperties.type,
      defaultValue,
    )} }`;
  } else if (properties) {
    const propKeys = Object.keys(properties);

    type = propKeys.reduce((memo, propName) => {
      const isRequired = required.length
        ? required.indexOf(propName) !== -1
        : true;
      const nextObject = { ...properties[propName], required: isRequired };

      memo[propName] = buildType(nextObject, options);

      return memo;
    }, {});
  }

  return type;
}

function toJsType(type, defaultValue = "any") {
  switch (type) {
    case "string":
      return "string";
    case "integer":
      return "number";
    case "array":
      return "any[]";
    case "boolean":
      return "boolean";
    case "object":
      return "object";
    case "file":
      return "File";
    default:
      console.warn(`Type didn't detect. [${type}]`);
      return defaultValue;
  }
}

function getRefByLink(object, link) {
  const linkArr = link.split("/").slice(1);

  return linkArr.reduce((memo, key) => memo[key], object);
}

module.exports = { build };
