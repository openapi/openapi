const { build } = require("./build");

function swaggerV2ToJs(apiJson, config = {}) {
  return build(apiJson, config);
}

module.exports = { swaggerV2ToJs };
