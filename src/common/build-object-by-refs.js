const getIsUrl = require("is-url");
const path = require("path");
const { readFileSync } = require("fs");

const { getRef } = require("../lib/get-ref");
const { isObject } = require("../lib/is-object");
const { rebuildObject } = require("../lib/rebuild-object");
const { contentToJson } = require("../lib/content-to-json");

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
  } else if (object instanceof Array) {
    return object.map((item) => buildObjectByRefs(item, state));
  }

  return object;
}

function checkGetRef(object, state) {
  const { config } = state;
  const ref = object["$ref"];

  if (ref) {
    const isCurrentFile = ref[0] === "#";
    const isUrl = getIsUrl(ref);

    if (isCurrentFile) {
      return getRef(state.apiJson, ref);
    } else if (isUrl) {
    } else {
      if (config.file) {
        const refArr = ref.split("#");
        const subRef = refArr[1] || null;
        const dirName = path.dirname(config.file);
        const pathFile = path.resolve(dirName, refArr[0]);

        const content = contentToJson(pathFile, () =>
          readFileSync(pathFile, "utf8"),
        );

        const nextObject = subRef ? getRef(content, `#${subRef}`) : content;

        return buildObjectByRefs(nextObject, {
          ...state,
          apiJson: content,
          config: { ...config, file: pathFile },
        });
      } else {
        throw new Error(
          "In this api exist links to other files, insert to config prop 'file' path to root file.",
        );
      }
    }
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
