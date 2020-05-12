const { getRef } = require("../lib/get-ref");
const { printObjectType, objectToArrayType } = require("../lib/print-object");

/**
 * @param {"json" | "xml"} mode
 * @param {*} object
 * @param {*} state
 */
function printSwaggerType(mode, object, state) {
  const ref = checkGetRef(object, state);
  let type = "unknown";

  if (ref) {
    type = printSwaggerType(mode, ref, state);
  } else if (object.schema) {
    type = printSwaggerType(mode, object.schema, state);
  } else if (object.type) {
    type = printObjectTypeByType(mode, object, state);
  } else if (typeof object === "object") {
    type = printObjectType(objectToArrayType(object), (propValue) =>
      printSwaggerType(mode, propValue, state),
    );
  }

  return type;
}

function printObjectTypeByType(mode, object, state) {
  switch (object.type) {
    case "array":
      return printObjectTypeHowArray(mode, object, state);
    case "object":
      return printObjectTypeHowObject(mode, object, state);
    case "string":
      return printObjectTypeHowString(mode, object, state);
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

function printObjectTypeHowObject(mode, object, state) {
  if (object.additionalProperties) {
    const itemType = printSwaggerType(mode, object.additionalProperties, state);

    return `{ [nameProp: string]: ${itemType}; }`;
  } else if (object.properties) {
    if (mode === "xml") {
      object = xmlObjectWrapper(object);
    }

    const properties = Object.keys(object.properties).map((propName) => {
      const objectRequired = object.required || [];
      const required = objectRequired.length
        ? objectRequired.indexOf(propName) !== -1
        : true;
      let value = object.properties[propName];

      if (mode === "xml") {
        const ref = checkGetRef(value, state);

        if (ref) {
          value = { ...ref };
          delete value.xml;
        }
      }

      return [propName, { value, required }];
    });

    return printObjectType(properties, (value) =>
      printSwaggerType(mode, value, state),
    );
  }

  return "object";
}

function printObjectTypeHowArray(mode, object, state) {
  if (object.items) {
    if (mode === "xml" && object.items.xml) {
      const nextObject = xmlObjectWrapper(object.items, (items) => {
        const ref = checkGetRef(items, state);
        const nextItems = ref ? { ...ref } : items;

        delete nextItems.xml;

        return {
          type: "array",
          items: nextItems,
        };
      });

      return printSwaggerType(mode, nextObject, state);
    }

    return `(${printSwaggerType(mode, object.items, state)})[]`;
  }

  return "any[]";
}

function printObjectTypeHowString(mode, object) {
  if (object.enum) {
    return object.enum.map((value) => `"${value}"`).join(" | ");
  }

  return "string";
}

function checkGetRef(object, state) {
  if (object["$ref"]) {
    return getRef(state.apiJson, object["$ref"]);
  }

  return null;
}

// xml
function xmlObjectWrapper(object, callback = (value) => value) {
  if (object.xml && object.xml.name) {
    const propName = object.xml.name;
    let nextObject = { ...object };

    delete nextObject.xml;
    return {
      type: "object",
      properties: { [propName]: callback(nextObject) },
    };
  }

  return object;
}

module.exports = { printSwaggerType };
