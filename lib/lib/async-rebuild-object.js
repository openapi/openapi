const { asyncReduce } = require("./async-reduce");

async function asyncRebuildObject(object, callback) {
  return await asyncReduce(
    Object.keys(object),
    async (memo, key) => {
      memo[key] = await callback(object[key]);

      return memo;
    },
    {},
  );
}

module.exports = { asyncRebuildObject };
