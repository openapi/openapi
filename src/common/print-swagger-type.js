const { printObjectType, objectToArrayType } = require("../lib/print-object");

function printSwaggerType(object) {
  let type = "unknown";

  if (object.type) {
    type = printObjectTypeByType(object);
  } else if (object.schema) {
    type = printSwaggerType(object.schema);
  } else if (typeof object === "object") {
    type = printObjectType(objectToArrayType(object), (propValue) =>
      printSwaggerType(propValue),
    );
  }

  return type;
}

function printObjectTypeByType(object) {
  switch (object.type) {
    case "object":
      return printObjectTypeHowObject(object);
    case "array":
      return printObjectTypeHowArray(object);
    case "string":
      return printObjectTypeHowString(object);
    case "integer":
      return "number";
    case "boolean":
      return "boolean";
    case "file":
      return "File";
    default:
      console.warn(`Type didn't detect. [${object.type}]`);
      return "any";
  }
}

function printObjectTypeHowObject(object) {
  if (object.additionalProperties) {
    const itemType = printSwaggerType(object.additionalProperties);

    return `{ [nameProp: string]: ${itemType}; }`;
  } else if (object.properties) {
    const properties = Object.keys(object.properties).map((propName) => {
      const objectRequired = object.required || [];
      const required = objectRequired.length
        ? objectRequired.includes(propName)
        : true;
      let value = object.properties[propName];

      return [propName, { value, required }];
    });

    return printObjectType(properties, (value) => printSwaggerType(value));
  }

  return "object";
}

function printObjectTypeHowArray(object) {
  if (object.items) {
    return `(${printSwaggerType(object.items)})[]`;
  }

  return "any[]";
}

function printObjectTypeHowString(object) {
  if (object.enum) {
    return object.enum.map((value) => `"${value}"`).join(" | ");
  }

  return "string";
}

module.exports = { printSwaggerType };
