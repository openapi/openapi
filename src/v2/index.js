const { build } = require("./build");
const { print } = require("./print");

function swaggerV2ToJs(apiJson, config = {}) {
  return print(build(apiJson, config), config);
}

module.exports = { swaggerV2ToJs };
