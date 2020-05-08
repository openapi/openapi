const { swaggerV2ToJs } = require("./v2");
const { swaggerV3ToJs } = require("./v3");

function swaggerToJs(apiJson, config = {}) {
  const {
    deprecated = "warning",
    mode = "prod",
    shortBody = false,
    importRequest = false,
  } = config;
  const nextConfig = { deprecated, mode, shortBody, importRequest };

  if (apiJson.openapi) {
    return time(() => swaggerV3ToJs(apiJson, nextConfig));
  } else if (apiJson.swagger) {
    return time(() => swaggerV2ToJs(apiJson, nextConfig));
  }

  throw new Error("Swagger version didn't detect");
}

function time(callback) {
  console.time("✨ swaggerapi");

  const result = callback();

  console.timeEnd("✨ swaggerapi");

  return result;
}

module.exports = { swaggerToJs };
