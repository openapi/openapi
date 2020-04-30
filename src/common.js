function getPathParametersByIn(parameters) {
  return parameters.reduce((memo, parameter) => {
    if (memo[parameter.in]) {
      memo[parameter.in].push(parameters);
    } else {
      memo[parameter.in] = [parameter];
    }

    return memo;
  }, {});
}

function capitalize(value) {
  if (typeof value === "string") {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  return "";
}

function breakLine(value, pre = "") {
  return value ? `\n${pre}` : "";
}

function parseType(type) {
  if (type) {
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
      default:
        console.warn(`Type didn't detect. [${type}]`);
        return "any";
    }
  }

  return "any";
}

function parseDefinition(value) {
  return value.replace(/«/g, "_").replace(/,/g, "__");
}

function parseSchemaRef(value) {
  return parseDefinition(value.replace(/(#\/definitions\/)|»/g, ""));
}

function printTypesParamsObject(objectName, types) {
  if (types.length > 0) {
    let result = `${objectName}: {\n`;

    types.forEach(({ name, type }) => {
      result += `  "${name}": ${type};\n`;
    });

    result += "};";

    return result;
  }

  return "";
}

function addTab(value, tab = "  ") {
  return value ? value.replace(/^/gm, tab) : "";
}

module.exports = {
  getPathParametersByIn,
  capitalize,
  breakLine,
  parseType,
  parseDefinition,
  parseSchemaRef,
  printTypesParamsObject,
  addTab,
};
