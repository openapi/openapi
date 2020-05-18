function rebuildObject(object, callback) {
  return Object.keys(object).reduce((memo, key) => {
    memo[key] = callback(object[key]);

    return memo;
  }, {});
}

module.exports = { rebuildObject };
