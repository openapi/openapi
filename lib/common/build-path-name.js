const { camelCase } = require("change-case");

function buildPathName(pathParams) {
  const { pathConfig, url, method } = pathParams;

  if (pathConfig.operationId) {
    return camelCase(pathConfig.operationId);
  }

  return camelCase(`${url}/${method}`);
}

module.exports = { buildPathName };
