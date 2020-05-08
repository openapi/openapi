const { getRefName, capitalize } = require("./common");
const { readFileSync } = require("fs");
const path = require("path");

function print(store, config = {}) {
  return {
    code: printCode(store, config),
    types: printTypes(store, config),
  };
}

function printCode(store, config = {}) {
  let result = "";

  if (config.importRequest) {
    result += "import { request } from 'swagger-to-js/request';\n\n";
  } else {
    const requestFile = readFile("../request.js");
    const js2xmlFile = readFile("../lib/js2xml.js");
    const xml2jsFile = readFile("../lib/xml2js.js");
    const kebabCase = readFile("../lib/kebab-case.js");

    const requestFileByLines = requestFile.split("\n").slice(0, -2);

    requestFileByLines[0] = js2xmlFile.split("\n").slice(0, -2).join("\n");
    requestFileByLines[1] = xml2jsFile.split("\n").slice(0, -2).join("\n");
    requestFileByLines[2] = kebabCase.split("\n").slice(0, -3).join("\n");

    result += requestFileByLines.join("\n") + "\n";
  }

  Array.from(store.requests).forEach(([requestId, request]) => {
    result += printCodeRequest({ store, requestId, request }, config);
  });

  return result;
}

function readFile(value) {
  const pathFile = path.resolve(path.dirname(__filename), value);

  return readFileSync(pathFile).toString();
}

function printCodeRequest({ store, requestId, request }, config = {}) {
  const { method } = request;

  const isExistParams = getIsExistRequestParams(request);
  const isWarning = request.deprecated && config.deprecated !== "ignore";

  const url = `\`${request.url.replace(/\{(.*)\}/g, "${params.path.$1}")}\``;
  const params = isExistParams ? "params" : "";
  const defaultParams = getDefaultParams({ store, request });
  const deprecatedWarning = isWarning
    ? `\n  console.warn("Api method '${requestId}' is deprecated");`
    : "";

  let result = "";

  if (config.mode === "dev") {
    result += `// ${requestId} ${request.variants.size}\n`;
  }

  result += `export function ${requestId}(${params}) {${deprecatedWarning}
  return request("${method}", ${url}${defaultParams})(${params});
}\n`;

  return result;
}

function getIsExistRequestParams(request) {
  return Array.from(request.variants.values()).reduce(
    (memo, variant) => memo || Boolean(variant.params),
    false,
  );
}

function getDefaultParams({ store, request }) {
  const { variants } = request;

  if (variants.size === 1) {
    const firstVariant = Array.from(variants.values())[0];

    if (Boolean(firstVariant.addedParams)) {
      const addedParams = store.addedParams.get(firstVariant.addedParams);

      return `, ${printValue(addedParams)}`;
    }
  }

  return "";
}

function printTypes(store, config = {}) {
  const baseTypes = printBaseTypes();
  const refs = printRefs(store, config);
  const params = printParams(store, config);
  const addedParams = printAddedParams(store, config);
  const results = printResults(store, config);
  const requests = printRequests(store, config);

  return `${baseTypes}\n${refs}\n${params}\n${addedParams}\n${results}\n${requests}\n`;
}

function printBaseTypes() {
  let result = "";

  result += `type RequestResult<Data> = { response: Response; data: Data; };\n`;

  return result;
}

function printRefs(store, config = {}) {
  let result = "";

  store.refs.forEach((ref, link) => {
    if (config.mode === "dev") {
      result += `// ${link}\n`;
    }

    result += `type ${getRefName(link)} = ${printValue(ref)};\n`;
  });

  return result;
}

function printParams(store, config = {}) {
  let result = "";

  Array.from(store.params).forEach(([id, itemParams], index) => {
    if (config.mode === "dev") {
      result += `// ${id}\n`;
    }

    result += `type Params${index} = ${printValue(itemParams, "any")};\n`;
  });

  return result;
}

function printAddedParams(store, config = {}) {
  let result = "";

  Array.from(store.addedParams).forEach(([id, itemAddedParams], index) => {
    if (config.mode === "dev") {
      result += `// ${id}\n`;
    }

    result += `type AddedParams${index} = ${printValue(itemAddedParams)};\n`;
  });

  return result;
}

function printResults(store, config = {}) {
  let result = "";

  Array.from(store.results).forEach(([id, itemResults], index) => {
    if (config.mode === "dev") {
      result += `// ${id}\n`;
    }

    result += `type Result${index} = ${printValue(itemResults)};\n`;
  });

  return result;
}

function printRequests(store, config = {}) {
  let result = "";

  Array.from(store.requests).forEach(([requestId, request]) => {
    Array.from(request.variants.values()).forEach(
      (variant, variantIndex, variants) => {
        if (config.mode === "dev") {
          const variantInfo = JSON.stringify(variant, null, 2);

          result += `/** ${requestId}\n ${variantInfo}*/\n`;
        }

        result += printRequest({
          requestId,
          request,
          variant,
          store,
          variantIndex,
          variantsLength: variants.length,
        });
      },
    );
  });

  return result;
}

function printRequest(params) {
  const { variant, requestId } = params;
  let result = "";
  const isAddVariantParams = Boolean(variant.params || variant.addedParams);
  let variantParams = isAddVariantParams ? printRequestParams(params) : "";
  let variantResult = variant.result ? printRequestResult(params) : "";

  const paramsString = variantParams ? `params: ${variantParams.type}` : "";
  const resultString = variantResult ? variantResult.type : "null";

  result += `export function ${requestId}(${paramsString}): Promise<RequestResult<${resultString}>>;\n`;

  return result;
}

function printRequestParams({
  requestId,
  variant,
  store,
  variantIndex,
  variantsLength,
}) {
  const paramsKeys = Array.from(store.params.keys());
  const paramsIndex = paramsKeys.indexOf(variant.params);
  const addedParamsKeys = Array.from(store.addedParams.keys());
  const addedParamsIndex = addedParamsKeys.indexOf(variant.addedParams);

  const params = paramsIndex === -1 ? "" : `Params${paramsIndex}`;
  const isAddedParams = !(addedParamsIndex === -1 || variantsLength === 1);

  if (params || isAddedParams) {
    const name = `${capitalize(requestId)}Params${variantIndex}`;
    const addedParams = isAddedParams ? `AddedParams${addedParamsIndex}` : "";
    const and = params.length && addedParams.length ? " & " : "";
    const type = `${params}${and}${addedParams}`;

    return { name, type };
  }

  return null;
}

function printRequestResult({ requestId, store, variantIndex, variant }) {
  const resultsKeys = Array.from(store.results.keys());
  const resultIndex = resultsKeys.indexOf(variant.result);

  const name = `${capitalize(requestId)}Result${variantIndex}`;
  const type = resultIndex === -1 ? "null" : `Result${resultIndex}`;

  return { name, type };
}

function printValue(value, defaultValue = "unknown") {
  if (getIsType(value)) {
    return printValueType(value, defaultValue);
  } else if (typeof value === "object") {
    return printValueObject(value, defaultValue);
  }

  return defaultValue;
}

function printValueType(value, defaultValue = "unknown") {
  switch (typeof value.type) {
    case "object":
      return printValueObject(value.type, defaultValue);
    case "string":
      return value.type;
    default:
      return defaultValue;
  }
}

function printValueObject(value, defaultValue = "null") {
  const keys = Object.keys(value);

  if (keys.length) {
    let result = "{";

    keys.forEach((key) => {
      const prop = value[key];
      const type = printValue(prop, defaultValue);
      const required = getIsRequiredObjectProp(prop) ? "" : "?";

      result += ` "${key}"${required}: ${type},`;
    });

    result += " }";

    return result;
  }

  return defaultValue;
}

function getIsRequiredObjectProp(prop) {
  if (getIsType(prop)) {
    return prop.required;
  } else if (typeof prop === "object") {
    return Object.keys(prop).reduce(
      (memo, key) => memo && getIsRequiredObjectProp(prop[key]),
      true,
    );
  } else {
    return true;
  }
}

function getIsType(value) {
  return (
    value &&
    typeof value === "object" &&
    value.hasOwnProperty("type") &&
    value.hasOwnProperty("required")
  );
}

module.exports = { print };
