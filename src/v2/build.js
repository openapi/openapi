const objectHash = require("object-hash");

const { printObject, objectToArray } = require("../lib/print-object");
const { printSwaggerType } = require("../common/print-swagger-type");
const { capitalize } = require("../lib/capitalize");
const { lineJoin } = require("../lib/lines-join");

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

      const isException = getIsPathException(pathParams, state);

      if (isException) return;

      printPathCode(pathParams, state);
      printPathTypes(pathParams, state);
    });
  });
}

function getIsPathException(pathParams, state) {
  return (
    state.config.deprecated === "exception" &&
    Boolean(pathParams.pathConfig.deprecated)
  );
}

function printPathCode(pathParams, state) {
  const { pathConfig } = pathParams;
  const name = pathConfig.operationId;
  const existParams = (pathConfig.parameters || []).length > 0;
  const params = existParams ? "params" : "";
  const requestParams = [
    `"${pathParams.method}"`,
    `\`${pathParams.url.replace(/\{(.*)\}/g, "${params.path.$1}")}\``,
    printPathCodeDefaultParams(pathParams),
  ];

  const body = lineJoin(
    [
      printPathCodeWarningDeprecated(pathParams, state),
      `return request(${requestParams.filter(Boolean).join(", ")})(${params});`,
    ],
    { beforeLine: "  ", separator: "\n" },
  );

  state.content.code += lineJoin(
    [`export function ${name}(${params}) {`, body, "}\n\n"],
    { separator: "\n" },
  );
}

function printPathCodeDefaultParams(pathParams) {
  const variants = getPathVariants(pathParams);

  if (variants.length === 1) {
    const { consume, produce } = variants[0];
    const header = {};

    if (consume) {
      header.accept = `"${consume}"`;
    }

    if (produce) {
      header["Content-Type"] = `"${produce}"`;
    }

    if (Object.keys(header).length) {
      return printObject(objectToArray({ header }), (propValue) =>
        printObject(objectToArray(propValue)),
      );
    }
  }

  return "";
}

function printPathCodeWarningDeprecated(pathParams, state) {
  const { pathConfig } = pathParams;

  if (pathConfig.deprecated && state.config.deprecated !== "ignore") {
    return `console.warn("Api method '${pathConfig.operationId}' is deprecated");`;
  }

  return "";
}

function printPathTypes(pathParams, state) {
  const name = pathParams.pathConfig.operationId;
  const variants = getPathVariants(pathParams);

  variants.forEach((variant, index) => {
    const nameParams = `${capitalize(name)}Params${index}`;
    const params = printPathParamsTypes(variant, pathParams, state);

    const nameAddedParams = `${capitalize(name)}AddedParams${index}`;
    const addedParams =
      variants.length > 1
        ? printPathParamsTypesAdded(variant, pathParams, state)
        : "";

    const nameResult = `${capitalize(name)}Result${index}`;
    const result = printPathResultTypes(variant, pathParams, state);

    let pathArgs = "";

    if (params.length) {
      state.content.types += `type ${nameParams} = ${params};\n`;
      pathArgs += `params: ${nameParams}`;
    }

    if (addedParams.length) {
      state.content.types += `type ${nameAddedParams} = ${addedParams}\n`;

      if (params.length) {
        pathArgs += ` & ${nameAddedParams}`;
      } else {
        pathArgs = `params: ${nameAddedParams}`;
      }
    }

    state.content.types += `type ${nameResult} = RequestResult<${
      result || "null"
    }>;\n`;

    state.content.types += `export function ${name}(${pathArgs}): ${nameResult};\n\n`;
  });
}

function printPathParamsTypes(variant, pathParams, state) {
  const { pathConfig } = pathParams;
  const { config } = state;
  const { parameters = [] } = pathConfig;
  const parametersByIn = parameters.reduce(
    (memo, parameter) => {
      if (!memo.properties[parameter.in]) {
        memo.properties[parameter.in] = {};
      }

      memo.properties[parameter.in][parameter.name] = parameter;

      return memo;
    },
    {
      type: "object",
      properties: {},
    },
  );

  // Detect required for 'parametersByIn'
  const required = Object.keys(parametersByIn.properties).reduce(
    (result, propName) => {
      const propValue = parametersByIn.properties[propName];
      const isRequired = Object.keys(propValue).reduce((memo, parameterKey) => {
        const parameter = propValue[parameterKey];
        return memo || Boolean(parameter.required);
      }, false);

      if (isRequired) {
        result.push(propName);
      }

      return result;
    },
    [],
  );

  if (required.length) {
    parametersByIn.required = required;
  }

  if (config.originalBody === false) {
    // Check exist 'formData' if exist move tot 'body'
    if (parametersByIn.properties.formData) {
      parametersByIn.properties.body = parametersByIn.properties.formData;
      delete parametersByIn.properties.formData;
    }

    // Check body, if have one element so push up to root body
    if (parametersByIn.properties.body) {
      const bodyKeys = Object.keys(parametersByIn.properties.body);

      if (bodyKeys.length === 1) {
        parametersByIn.properties.body =
          parametersByIn.properties.body[bodyKeys[0]];
      }
    }
  }

  return Object.keys(parametersByIn).length
    ? printSwaggerType(getModePrintSwaggerType(variant), parametersByIn, state)
    : "";
}

function printPathParamsTypesAdded(variant) {
  const { consume, produce } = variant;
  const header = {};

  if (consume) {
    header.accept = { type: "string", enum: [consume] };
  }

  if (produce) {
    header["Content-Type"] = { type: "string", enum: [produce] };
  }

  if (Object.keys(header)) {
    return printSwaggerType("json", { header });
  }

  return "";
}

function printPathResultTypes(variant, pathParams, state) {
  const { pathConfig } = pathParams;

  if (pathConfig.responses && pathConfig.responses["200"]) {
    return printSwaggerType(
      getModePrintSwaggerType(variant),
      pathConfig.responses["200"],
      state,
    );
  }

  return "";
}

function getModePrintSwaggerType(variant) {
  return variant.consume === "application/xml" ? "xml" : "json";
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

module.exports = { build };
