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
    for (const preset of config.presets) {
      const imported = loadPreset(preset);
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

function loadPreset(preset) {
  if (Array.isArray(preset)) {
    const [name, options] = preset;
    if (typeof name !== "string") {
      throw new TypeError(
        `A name of preset should be a string. "${name === null ? "null" : typeof name}" passed`,
      );
    }

    const imported = require(name);

    if (typeof imported !== "function") {
      throw new TypeError(`Preset "${name}" must be used without options`);
    }
    return imported(options || {});
  }
  const imported = require(preset);
  if (typeof imported === "function") {
    return imported({});
  }
  return imported;
}

module.exports = { compilePresets };
