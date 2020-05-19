const { getRef } = require("../lib/get-ref");
const { isObject } = require("../lib/is-object");
const { rebuildObject } = require("../lib/rebuild-object");

function buildObjectByRefs(object, state) {
  if (isObject(object)) {
    const ref = checkGetRef(object, state);
    let next = { ...object };

    if (ref) {
      delete next["$ref"];
      next = { ...buildObjectByRefs(ref, state), ...next };
    } else if (next.schema) {
      next.schema = buildObjectBySchema(next.schema, state);
    } else if (next.type) {
      next = buildObjectTypeByType(next, state);
    } else {
      next = rebuildObject(next, (value) => buildObjectByRefs(value, state));
    }

    return next;
  }

  return object;
}

function checkGetRef(object, state) {
  if (object["$ref"]) {
    return getRef(state.apiJson, object["$ref"]);
  }

  return null;
}

function buildObjectBySchema(object, state) {
  return {
    type: "object",
    ...buildObjectByRefs(object, state),
  };
}

function buildObjectTypeByType(object, state) {
  switch (object.type) {
    case "object":
      return buildObjectTypeHowObject(object, state);
    case "array":
      return buildObjectTypeHowArray(object, state);
    default:
      return object;
  }
}

function buildObjectTypeHowObject(object, state) {
  if (object.additionalProperties) {
    object.additionalProperties = buildObjectByRefs(
      object.additionalProperties,
      state,
    );
  } else if (object.properties) {
    object.properties = rebuildObject(object.properties, (value) =>
      buildObjectByRefs(value, state),
    );
  }

  return object;
}

function buildObjectTypeHowArray(object, state) {
  if (object.items) {
    object.items = buildObjectByRefs(object.items, state);
  }

  return object;
}

module.exports = { buildObjectByRefs };
