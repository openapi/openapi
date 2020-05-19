const { isObject } = require("../lib/is-object");
const { rebuildObject } = require("../lib/rebuild-object");

function buildObjectByMode(object, mode = "json") {
  if (isObject(object)) {
    let next = { ...object };

    if (next.schema) {
      next = buildObjectByMode(next.schema, mode);
    } else if (next.type) {
      next = buildObjectTypeByType(next, mode);
    } else {
      next = rebuildObject(next, rebuildObjectValue(mode));
    }

    return next;
  }

  return object;
}

function buildObjectTypeByType(object, mode) {
  switch (object.type) {
    case "object":
      return buildObjectTypeHowObject(object, mode);
    case "array":
      return buildObjectTypeHowArray(object, mode);
    default:
      return object;
  }
}

function buildObjectTypeHowObject(object, mode) {
  if (object.additionalProperties) {
    object.additionalProperties = buildObjectByMode(
      object.additionalProperties,
      mode,
    );
  } else if (object.properties) {
    object.properties = rebuildObject(
      object.properties,
      rebuildObjectValue(mode),
    );

    if (mode === "xml" && object.xml && object.xml.name) {
      object = {
        type: "object",
        properties: { [object.xml.name]: object },
      };
    }
  }

  return object;
}

function buildObjectTypeHowArray(object, mode) {
  if (object.items) {
    const itemsXml = mode === "xml" ? object.items.xml : null;

    delete object.items.xml;
    object.items = buildObjectByMode(object.items, mode);

    if (itemsXml && itemsXml.name) {
      return {
        type: "object",
        properties: {
          [itemsXml.name]: { type: "array", items: object.items },
        },
      };
    }
  }

  return object;
}

function rebuildObjectValue(mode) {
  return (value) => {
    delete value.xml;

    return buildObjectByMode(value, mode);
  };
}

module.exports = { buildObjectByMode };
