const { build } = require("./build");
const { buildFiles } = require("../common/build-files");

function swaggerV2ToJs(apiJson, config = {}) {
  const buildResult = build(apiJson, config);

  return buildFiles(buildResult, config);
}

module.exports = { swaggerV2ToJs };
