function isPathException(pathParams, state) {
  return state.config.deprecated === "exception" && Boolean(pathParams.pathConfig.deprecated);
}

module.exports = { isPathException };
