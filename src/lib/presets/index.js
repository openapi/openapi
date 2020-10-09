/**
 * Function do not supports deep object.
 * Just simple object with one level
 */
function compilePresets(config) {
  if (Object.prototype.hasOwnProperty.call(config, "presets")) {
    if (!Array.isArray(config.presets) || config.presets === null) {
      throw new TypeError(
        `property "presets" should be an array. ${
          config.presets === null ? "null" : typeof config.presets
        } passed`,
      );
    }

    let presetsMerged = {};
    for (const name of config.presets) {
      const imported = require(name);
      presetsMerged = {
        ...presetsMerged,
        ...compilePresets(imported),
      };
    }

    const final = { ...presetsMerged, ...config };
    delete final.presets;
    return final;
  }
  return config;
}

module.exports = { compilePresets };
