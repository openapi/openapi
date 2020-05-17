const { buildFiles } = require("../common/build-files");
const { build } = require("./build");

function swaggerV3ToJs(apiJson, config = {}) {
  const buildResult = build(apiJson, config);

  return buildFiles(buildResult, config);
}

module.exports = { swaggerV3ToJs };
