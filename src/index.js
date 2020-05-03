const { readFileSync } = require("fs");
const path = require("path");

const prettierOptions = {
  printWidth: 80,
  trailingComma: "all",
  arrowParens: "always",
};

const {
  getPathParametersByIn,
  formatSchemaRefName,
  capitalize,
  printTypesParamsObject,
  parseSwaggerType,
} = require("./common");

function swaggerToJs(apiJson, config = {}) {
  console.time("✨ swaggerapi");

  const paths = buildPaths(apiJson, config);
  const definitions = buildDefinitions(apiJson);

  const pathRequestCode = path.resolve(path.dirname(__filename), "request.js");
  const requestCode = readFileSync(pathRequestCode);

  const code = `${requestCode}\n\n${paths.code}`;
  const types = `${definitions}\n\n${paths.types}`;

  console.timeEnd("✨ swaggerapi");

  return { code, types };
}

// Code
function buildPaths(apiJson, config = {}) {
  const code = [];
  const types = [];

  Object.keys(apiJson.paths).forEach((path) => {
    Object.keys(apiJson.paths[path]).forEach((method) => {
      const params = { path, method, config: apiJson.paths[path][method] };

      code.push(printPathCode(buildPathCodeScope(params), config));
      types.push(printPathTypes(buildPathTypesScope(params), config));
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
    accept: buildPathCodeScopeAccept(params),
    contentType: buildPathCodeScopeContentType(params),
    isDeprecated: Boolean(params.config.deprecated),
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

function buildPathCodeScopeAccept(params) {
  if (params.config.consumes && params.config.consumes.length === 1) {
    return params.config.consumes[0];
  }

  return null;
}

function buildPathCodeScopeContentType(params) {
  if (params.config.produces && params.config.produces.length === 1) {
    return params.config.produces[0];
  }

  return null;
}

function printPathCode(scope, config) {
  let deprecatedWarning = "";

  if (scope.isDeprecated) {
    if (config.deprecated) {
      if (config.deprecated === "exception") {
        return "";
      } else if (config.deprecated === "warning") {
        deprecatedWarning = printPathCodeDeprecatedWarning(scope);
      }
    } else {
      deprecatedWarning = printPathCodeDeprecatedWarning(scope);
    }
  }

  const { name, isExistParameters, method, url } = scope;
  const params = isExistParameters ? "params" : "";
  const addedParams = printPathCodeAddedParams(scope);
  const addedParamsString = addedParams ? `, ${addedParams}` : "";

  return `export function ${name}(${params}) {
  ${deprecatedWarning}
  return request("${method}", \`${url}\`${addedParamsString})(${params});
}\n\n`;
}

function printPathCodeAddedParams(scope) {
  let result = "";
  let header = "";

  if (scope.accept) {
    header += `"accept": "${scope.accept}",`;
  }

  if (scope.contentType) {
    header += `"Content-Type": "${scope.contentType}",`;
  }

  if (header.length) {
    result += `header: {${header}}`;
  }

  if (result) {
    result = `{${result}}`;
  }

  return result;
}

function printPathCodeDeprecatedWarning(scope) {
  return `console.warn("Api method '${scope.name}' is deprecated");`;
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
  let result = `type ${scope.name} = {`;

  scope.properties.forEach(({ name, type, isRequired }) => {
    const required = isRequired ? "" : "?";

    result += `${name}${required}: ${type};`;
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
    isDeprecated: Boolean(params.config.deprecated),
  };
}

function buildPathTypesScopeParams(params) {
  const result = {};

  const parametersByIn = getPathParametersByIn(params.config.parameters);

  const addToHeader = (value) => {
    if (value) {
      if (result.header === undefined) {
        result.header = [];
      }

      result.header.push(value);
    }
  };

  Object.keys(parametersByIn).forEach((inName) => {
    if (result[inName] === undefined) {
      result[inName] = [];
    }

    parametersByIn[inName].forEach((parameter) => {
      result[inName].push(buildPathTypesScopeParameter(parameter));
    });
  });

  // Process config.consumes
  addToHeader(
    buildPathTypesScopeConsumesProduces({
      nameProp: "consumes",
      valueProp: params.config.consumes,
    }),
  );

  // Process config.produces
  addToHeader(
    buildPathTypesScopeConsumesProduces({
      nameProp: "produces",
      valueProp: params.config.produces,
    }),
  );

  return result;
}

function buildPathTypesScopeConsumesProduces({ nameProp, valueProp }) {
  if (valueProp && valueProp.length > 1) {
    const name = nameProp === "consumes" ? "accept" : "Content-Type";

    return {
      name,
      type: valueProp.map((value) => `"${value}"`).join(" | "),
      isRequired: true,
    };
  }

  return null;
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

function printPathTypes(scope, config) {
  if (scope.isDeprecated && config.deprecated === "exception") {
    return "";
  }

  const params = printPathTypesParams(scope);
  const result = printPathTypesResult(scope);
  const method = printPathTypesMethod(scope);

  return `${params}${result}${method}\n\n`;
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

    return `${memo}${result}`;
  }, "");

  let result = "";

  if (params.length > 0) {
    result = `type ${scope.nameParams} = {${params}};`;
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

module.exports = { swaggerToJs };
