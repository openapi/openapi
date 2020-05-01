const fs = require("fs");

const {
  getPathParametersByIn,
  formatSchemaRefName,
  capitalize,
  breakLine,
  printTypesParamsObject,
  addTab,
  parseSwaggerType,
} = require("./common");

function swaggerapi(apiJson) {
  console.time("✨ swaggerapi");

  const paths = buildPaths(apiJson);
  const definitions = buildDefinitions(apiJson);

  console.timeEnd("✨ swaggerapi");

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
  const name = formatSchemaRefName(params.name);
  const properties = [];

  if (params.definition.properties) {
    Object.keys(params.definition.properties).forEach((propName) => {
      const property = params.definition.properties[propName];

      const type = parseSwaggerType(property);

      const isRequired = params.definition.required
        ? params.definition.required.includes(propName)
        : true;

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
  return {
    name: parameter.name,
    type: parseSwaggerType(parameter),
    isRequired: parameter.required,
  };
}

function buildPathTypesScopeResult(params) {
  if (params.config.responses && params.config.responses["200"]) {
    return parseSwaggerType(params.config.responses["200"], "void");
  }

  return "";
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
  let params = Object.keys(scope.typesParams).reduce((memo, type) => {
    const typeParams = scope.typesParams[type] || [];
    let result = printTypesParamsObject(type, typeParams);

    switch (type) {
      case "body":
        result = printPathTypesParamsBody(typeParams);
        break;
    }

    return `${memo}${addTab(result)}${breakLine(result)}`;
  }, "");

  let result = "";

  if (params.length > 0) {
    result = `type ${scope.nameParams} = {
${params}};`;
  }

  return result;
}

function printPathTypesParamsBody(typeParams) {
  // TODO I didn't find body with length more 2 elements
  if (typeParams && typeParams.length === 1) {
    return `body: ${typeParams[0].type};`;
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
      typesParams.body,
  );
  const paramsString = isExistTypesParams ? `params: ${nameParams}` : "";
  const resultString = typeResult ? nameResult : "void";

  return `export function ${name}(${paramsString}): Promise<${resultString}>;`;
}

module.exports = { swaggerapi };
