const { isPathException } = require("../common/is-path-exception");
const { buildPathName } = require("../common/build-path-name");

function buildPaths(buildOptions) {
  const {
    buildPathCodeParams,
    getPathVariants,
    buildPathVariantTypesParams,
  } = buildOptions;

  return (content, state) => {
    const { apiJson, config } = state;

    Object.keys(apiJson.paths).forEach((url) => {
      Object.keys(apiJson.paths[url]).forEach((method) => {
        const pathConfig = apiJson.paths[url][method];
        const pathParams = { url, method, pathConfig };

        if (isPathException(pathParams, state)) return;

        // Path name
        pathParams.name = buildPathName(pathParams);

        // Path code
        const pathCodeParams = buildPathCodeParams(pathParams, state);

        content.code += config.templateRequestCode(pathCodeParams);
        content.code += "\n\n";

        // Path types by variants
        const pathVariants = getPathVariants(pathParams, state);

        pathVariants.forEach((variant, index, variants) => {
          const pathVariantTypesParams = buildPathVariantTypesParams({
            variant,
            index,
            variants,
            pathParams,
            state,
          });

          content.types += config.templateRequestTypes(pathVariantTypesParams);
          content.types += "\n\n";
        });
      });
    });
  };
}

module.exports = { buildPaths };
