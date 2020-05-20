const {
  templateRequestCode: _templateRequestCode,
} = require("./common/templates/request-code");
const {
  templateRequestTypes: _templateRequestTypes,
} = require("./common/templates/request-types");
const {
  templateTypesBefore: _templateTypesBefore,
} = require("./common/templates/types-before");
const { swaggerV2ToJs } = require("./v2");
const { swaggerV3ToJs } = require("./v3");

function swaggerToJs(apiJson, config = {}) {
  const {
    mode = "prod",
    deprecated = "warning",
    originalBody = false,
    ignoreDescription = false,

    templateRequestCode = _templateRequestCode,
    templateRequestTypes = _templateRequestTypes,
    templateTypesBefore = _templateTypesBefore,
  } = config;
  const nextConfig = {
    deprecated,
    mode,
    originalBody,
    templateRequestCode,
    templateRequestTypes,
    templateTypesBefore,
  };

  if (apiJson.openapi) {
    return swaggerV3ToJs(apiJson, nextConfig);
  } else if (apiJson.swagger) {
    return swaggerV2ToJs(apiJson, nextConfig);
  }

  throw new Error("Swagger version didn't detect");
}

module.exports = { swaggerToJs };
