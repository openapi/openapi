function getPathParametersByIn(parameters) {
  return parameters.reduce((memo, parameter) => {
    if (memo[parameter.in]) {
      memo[parameter.in].push(parameter);
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

function parseType(type, defaultValue = "any") {
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
      case "file":
        return "File";
      default:
        console.warn(`Type didn't detect. [${type}]`);
        return defaultValue;
    }
  }

  return defaultValue;
}

function parseSwaggerType(item, defaultValue = "any") {
  let type = parseType(item.type);

  if (item.type) {
    switch (item.type) {
      case "array":
        if (item.items["$ref"]) {
          type = `${formatSchemaRefName(item.items["$ref"])}[]`;
        } else {
          type = `${parseType(item.items.type, defaultValue)}[]`;
        }
        break;
      case "object":
        type = `{ [nameProp: string]: ${parseType(
          item.additionalProperties.type,
          defaultValue,
        )} }`;
        break;
    }
  } else if (item["$ref"]) {
    type = formatSchemaRefName(item["$ref"]);
  } else if (item.schema) {
    type = parseSwaggerType(item.schema, defaultValue);
  }

  return type;
}

function formatDefinitionName(value) {
  return value ? value.replace(/«/g, "_").replace(/,/g, "__") : "";
}

function formatSchemaRefName(value) {
  return value
    ? formatDefinitionName(value.replace(/(#\/definitions\/)|»/g, ""))
    : "";
}

function printTypesParamsObject(objectName, types) {
  if (types.length > 0) {
    let result = `${objectName}: {`;

    types.forEach(({ name, type, isRequired }) => {
      const required = isRequired ? "" : "?";

      result += `"${name}"${required}: ${type};`;
    });

    result += "};";

    return result;
  }

  return "";
}

module.exports = {
  getPathParametersByIn,
  capitalize,
  parseType,
  formatDefinitionName,
  formatSchemaRefName,
  printTypesParamsObject,
  parseSwaggerType,
};
