const { build } = require("./build");

function swaggerV3ToJs(apiJson, config = {}) {
  return build(apiJson, config);
}

module.exports = { swaggerV3ToJs };
