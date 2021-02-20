const getIsUrl = require("is-url");
const path = require("path");
const parseUrl = require("url-parse");

const { getRef } = require("../lib/get-ref");
const { isObject } = require("../lib/is-object");
const { loadApiJson } = require("./load-api-json");
const { asyncMap } = require("../lib/async-map");
const { asyncRebuildObject } = require("../lib/async-rebuild-object");

async function buildObjectByRefs(object, state) {
  if (isObject(object)) {
    const ref = await checkGetRef(object, state);
    let next = { ...object };

    if (ref) {
      delete next["$ref"];
      next = { ...(await buildObjectByRefs(ref, state)), ...next };
    } else if (next.schema) {
      next.schema = await buildObjectBySchema(next.schema, state);
    } else if (next.type) {
      next = await buildObjectTypeByType(next, state);
    } else {
      next = await asyncRebuildObject(next, async (value) => await buildObjectByRefs(value, state));
    }

    return next;
  } else if (object instanceof Array) {
    return await asyncMap(object, async (item) => await buildObjectByRefs(item, state));
  }

  return object;
}

async function checkGetRef(object, state) {
  const ref = object["$ref"];

  if (ref) {
    const isCurrentFile = ref[0] === "#";
    const isUrl = getIsUrl(ref);

    if (isCurrentFile) {
      return getRef(state.apiJson, ref);
    } else if (isUrl) {
      return await checkGetRefIsUrl(ref, state);
    } else {
      return await checkGetRefIsLocalFile(ref, state);
    }
  }

  return null;
}

async function checkGetRefIsUrl(ref, state) {
  const { config } = state;
  const fileRef = parseFileRef(ref);

  const content = await loadApiJson({
    file: fileRef.path,
    authorization: config.authorization,
  });

  const nextObject = fileRef.subRef ? getRef(content, `#${fileRef.subRef}`) : content;

  return await buildObjectByRefs(nextObject, {
    ...state,
    apiJson: content,
    config: { ...config, file: fileRef.path },
  });
}

async function checkGetRefIsLocalFile(ref, state) {
  const { config } = state;

  if (config.file) {
    const fileRef = parseFileRef(ref);
    const pathFile = getPathFile(config, fileRef);

    const content = await loadApiJson({
      file: pathFile,
      authorization: config.authorization,
    });

    const nextObject = fileRef.subRef ? getRef(content, `#${fileRef.subRef}`) : content;

    return await buildObjectByRefs(nextObject, {
      ...state,
      apiJson: content,
      config: { ...config, file: pathFile },
    });
  }

  throw new Error(
    "In this api exist links to other files, insert to config prop 'file' path to root file.",
  );
}

function parseFileRef(ref) {
  const refArr = ref.split("#");

  return { path: refArr[0], subRef: refArr[1] || null };
}

function getPathFile(config, fileRef) {
  let before = "";
  let dirName = "";

  if (getIsUrl(config.file)) {
    const url = parseUrl(config.file);

    before = url.origin;
    dirName = path.dirname(url.pathname);
  } else {
    dirName = path.dirname(config.file);
  }

  return `${before}${path.resolve(dirName, fileRef.path)}`;
}

async function buildObjectBySchema(object, state) {
  return {
    type: "object",
    ...(await buildObjectByRefs(object, state)),
  };
}

async function buildObjectTypeByType(object, state) {
  switch (object.type) {
    case "object":
      return await buildObjectTypeHowObject(object, state);
    case "array":
      return await buildObjectTypeHowArray(object, state);
    default:
      return object;
  }
}

async function buildObjectTypeHowObject(object, state) {
  if (object.additionalProperties) {
    object.additionalProperties = await buildObjectByRefs(object.additionalProperties, state);
  } else if (object.properties) {
    object.properties = await asyncRebuildObject(
      object.properties,
      async (value) => await buildObjectByRefs(value, state),
    );
  }

  return object;
}

async function buildObjectTypeHowArray(object, state) {
  if (object.items) {
    object.items = await buildObjectByRefs(object.items, state);
  }

  return object;
}

module.exports = { buildObjectByRefs };
