const { getRef } = require("../lib/get-ref");

function buildObjectByRefs(mode, object, state) {
  let result = { ...object };
  const ref = checkGetRef(result, state);

  if (ref) {
    result = {
      ...buildObjectByRefs(mode, ref, state),
      ...result,
    };
  } else if (result.schema) {
    result = buildObjectByRefs(mode, result.schema, state);
  } else if (result.type) {
    result = buildObjectTypeByType(mode, result, state);
  } else if (typeof result === "object") {
    result = buildObject(mode, result, state);
  }

  return result;
}

function buildObjectTypeByType(mode, object, state) {
  switch (object.type) {
    case "object":
      return buildObjectTypeHowObject(mode, object, state);
    case "array":
      return buildObjectTypeHowArray(mode, object, state);
    default:
      return object;
  }
}

function buildObjectTypeHowObject(mode, object, state) {
  if (object.additionalProperties) {
    object.additionalProperties = buildObjectByRefs(
      mode,
      object.additionalProperties,
      state,
    );
  } else if (object.properties) {
    object.properties = buildObject(mode, object.properties, state);

    if (mode === "xml") {
      object = xmlObjectWrapper(object);
    }
  }

  return object;
}

function buildObjectTypeHowArray(mode, object, state) {
  if (object.items) {
    object.items = buildObjectByRefs(mode, object.items, state);

    if (mode === "xml" && object.items.xml) {
      object = xmlObjectWrapper(object.items, (items) => {
        const ref = checkGetRef(items, state);
        const nextItems = ref ? { ...ref } : items;

        delete nextItems.xml;

        return {
          type: "array",
          items: nextItems,
        };
      });
    }
  }

  return object;
}

function buildObject(mode, object, state) {
  return Object.keys(object).reduce((memo, key) => {
    let value = object[key];

    if (mode === "xml") {
      const ref = checkGetRef(value, state);

      if (ref) {
        value = { ...ref };
        delete value.xml;
      }
    }

    memo[key] = buildObjectByRefs(mode, value, state);
    return memo;
  }, {});
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

    return {
      type: "object",
      properties: { [propName]: callback(object) },
    };
  }

  return object;
}

module.exports = { buildObjectByRefs };
