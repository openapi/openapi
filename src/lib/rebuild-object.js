function rebuildObject(object, callback) {
  if (object instanceof Object) {
    return Object.keys(object).reduce((memo, key) => {
      memo[key] = callback(object[key]);

      return memo;
    }, {});
  }

  throw new Error("Critical error for rebuild object");
}

module.exports = { rebuildObject };
