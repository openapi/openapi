const { swaggerV2ToJs } = require("./v2");
const { swaggerV3ToJs } = require("./v3");

function swaggerToJs(apiJson, config = {}) {
  const {
    mode = "prod",
    deprecated = "warning",
    importRequest = false,
    originalBody = false,
  } = config;
  const nextConfig = { deprecated, mode, originalBody, importRequest };

  if (apiJson.openapi) {
    return swaggerV3ToJs(apiJson, nextConfig);
  } else if (apiJson.swagger) {
    return swaggerV2ToJs(apiJson, nextConfig);
  }

  throw new Error("Swagger version didn't detect");
}

module.exports = { swaggerToJs };
