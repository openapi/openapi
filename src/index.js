const mock = require("./mock.json");
const fs = require("fs");

const {
  getPathParametersByIn,
  parseType,
  parseSchemaRef,
  capitalize,
  breakLine,
  printTypesParamsObject,
  addTab,
} = require("./common");

const PATH_API = "./api/index.js";
const PATH_API_D_TS = "./api/index.d.ts";

function generapi(apiJson) {
  const paths = buildPaths(apiJson);
  const definitions = buildDefinitions(apiJson);

  return { paths, definitions };
}

// Code
function buildPaths(apiJson) {
  const code = [];
  const types = [];

  Object.keys(apiJson.paths).forEach((path) => {
    Object.keys(apiJson.paths[path]).forEach((method) => {
      const config = apiJson.paths[path][method];
      const params = { path, method, config };

      code.push(printPathCode(buildPathCodeScope(params)));
      types.push(printPathTypes(buildPathTypesScope(params)));
    });
  });

  return {
    code: code.join(""),
    types: types.join(""),
  };
}

function buildPathCodeScope(params) {
  return {
    isExistParameters: Boolean(params.config.parameters.length),
    method: params.method,
    name: params.config.operationId,
    url: buildPathCodeScopeUrl(params),
  };
}

function buildPathCodeScopeUrl(params) {
  const parametersByIn = getPathParametersByIn(params.config.parameters);
  let result = params.path.replace("{", "${");

  if (parametersByIn.path) {
    parametersByIn.path.forEach(({ name }) => {
      result = result.replace(name, `params.path.${name}`);
    });
  }

  return result;
}

function printPathCode(scope) {
  const { name, isExistParameters, method, url } = scope;
  const params = isExistParameters ? "params" : "";
  const requestParams = isExistParameters ? ", params" : "";

  return `export function ${name}(${params}) {
  return request("${method}", \`${url}\`${requestParams});
}

`;
}

// Definitions
function buildDefinitions(apiJson) {
  const definitions = [];

  Object.keys(apiJson.definitions).forEach((name) => {
    const definition = apiJson.definitions[name];
    const scope = buildDefinitionsTypesScope({ name, definition });
    const print = printDefinitionsTypes(scope);

    definitions.push(print);
  });

  return definitions.join("");
}

function buildDefinitionsTypesScope(params) {
  const name = parseSchemaRef(params.name);
  const properties = [];

  if (params.definition.properties) {
    Object.keys(params.definition.properties).forEach((propName) => {
      const property = params.definition.properties[propName];

      let type = parseType(property.type);

      const isRequired = params.definition.required
        ? params.definition.required.includes(propName)
        : true;

      if (property.type) {
        switch (property.type) {
          case "array":
            if (property.items["$ref"]) {
              type = `${parseSchemaRef(property.items["$ref"])}[]`;
            } else {
              type = `${parseType(property.items.type)}[]`;
            }
            break;
          case "object":
            type = `{ [nameProp: string]: ${parseType(
              property.additionalProperties.type
            )} }`;
            break;
        }
      } else if (property["$ref"]) {
        type = parseSchemaRef(property["$ref"]);
      }

      properties.push({ name: propName, type, isRequired });
    });
  }

  return { name, properties };
}

function printDefinitionsTypes(scope) {
  let result = `type ${scope.name} = {\n`;

  scope.properties.forEach(({ name, type, isRequired }) => {
    const required = isRequired ? "" : "?";
    result += `  ${name}${required}: ${type};\n`;
  });

  result += `};\n\n`;

  return result;
}

// Types
function buildPathTypesScope(params) {
  const name = params.config.operationId;
  const capitalizeName = capitalize(name);

  return {
    name,
    nameParams: `${capitalizeName}Params`,
    nameResult: `${capitalizeName}Result`,
    typesParams: buildPathTypesScopeParams(params),
    typeResult: buildPathTypesScopeResult(params),
  };
}

function buildPathTypesScopeParams(params) {
  const result = {};

  const parametersByIn = getPathParametersByIn(params.config.parameters);

  Object.keys(parametersByIn).forEach((inName) => {
    if (result[inName] === undefined) {
      result[inName] = [];
    }

    parametersByIn[inName].forEach((parameter) => {
      result[inName].push(buildPathTypesScopeParameter(parameter));
    });
  });

  return result;
}

function buildPathTypesScopeParameter(parameter) {
  const { name, schema } = parameter;
  let type = "any";

  if (schema) {
    type = parseSchemaRef(schema["$ref"]);
  } else {
    type = parseType(parameter.type);
  }

  return { name, type };
}

function buildPathTypesScopeResult(params) {
  const { schema } = params.config.responses["200"];

  return schema ? parseSchemaRef(schema["$ref"]) : "";
}

function printPathTypes(scope) {
  const params = printPathTypesParams(scope);
  const paramsString = `${params}${breakLine(params)}`;

  const result = printPathTypesResult(scope);
  const resultString = `${result}${breakLine(result)}`;

  const method = printPathTypesMethod(scope);

  return `${paramsString}${resultString}${method}\n\n`;
}

function printPathTypesParams(scope) {
  const path = printPathTypesParamsPath(scope);
  const pathString = `${addTab(path)}${breakLine(path)}`;

  const header = printPathTypesParamsHeader(scope);
  const headerString = `${addTab(header)}${breakLine(header)}`;

  const query = printPathTypesParamsQuery(scope);
  const queryString = `${addTab(query)}${breakLine(query)}`;

  const body = printPathTypesParamsBody(scope);
  const bodyString = `${addTab(body)}${breakLine(body)}`;

  let result = "";

  if (header || query || path || body) {
    result = `type ${scope.nameParams} = {
${headerString}${queryString}${pathString}${bodyString}};`;
  }

  return result;
}

function printPathTypesParamsPath(scope) {
  return printTypesParamsObject("path", scope.typesParams.path || []);
}

function printPathTypesParamsHeader(scope) {
  return printTypesParamsObject("header", scope.typesParams.header || []);
}

function printPathTypesParamsQuery(scope) {
  return printTypesParamsObject("query", scope.typesParams.query || []);
}

function printPathTypesParamsBody(scope) {
  // TODO I didn't find body with length more 2 elements
  const body = scope.typesParams.body || [];

  if (body && body.length === 1) {
    return `body: ${body[0].type};`;
  }

  return "";
}

function printPathTypesResult(scope) {
  if (scope.typeResult) {
    return `type ${scope.nameResult} = ${scope.typeResult};`;
  }

  return "";
}

function printPathTypesMethod(scope) {
  const { name, nameParams, nameResult, typesParams, typeResult } = scope;
  const isExistTypesParams = Boolean(
    typesParams.path ||
      typesParams.header ||
      typesParams.query ||
      typesParams.body
  );
  const paramsString = isExistTypesParams ? `params: ${nameParams}` : "";
  const resultString = typeResult ? nameResult : "any";

  return `export function ${name}(${paramsString}): Promise<${resultString}>;`;
}

console.time("✨  generapi");

const { paths, definitions } = generapi(mock);
fs.writeFileSync(PATH_API, paths.code);
fs.writeFileSync(PATH_API_D_TS, `${definitions}\n\n${paths.types}`);

console.timeEnd("✨  generapi");
