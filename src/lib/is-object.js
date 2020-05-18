function isObject(object) {
  const isObject = typeof object === "object";
  const isArray = object instanceof Array;

  return object && isObject && !isArray;
}

module.exports = { isObject };
