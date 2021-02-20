"use strict";

var _commander = require("commander");

var _cosmiconfig = require("cosmiconfig");

var _ = require("..");

var _package = _interopRequireDefault(require("../../package.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander.program.version(_package.default.version) // Cli Options
.option("--output-dir <path>", "Where to save compiled files").option("--config <path>", "Path to a config").option("--file <path>", "Path to Swagger/OpenAPI file (JSON, YAML, or URL").option("--authorization <value>", "An auth token for getting OpenAPI file from URL (used as header)").option("--presets <presets...>", "List of presets to generate files from");

async function main() {
  _commander.program.parse(process.argv);

  const cosmic = (0, _cosmiconfig.cosmiconfigSync)(_package.default.name);
  const resolved = _commander.program.config ? cosmic.load(_commander.program.config) : cosmic.search() || {
    config: {}
  };
  const loaded = resolved?.config || {};
  const config = {
    outputDir: _commander.program.outputDir || loaded.outputDir || "./api",
    file: _commander.program.file || loaded.file,
    authorization: _commander.program.authorization || loaded.authorization,
    presets: _commander.program.presets || loaded.presets || []
  };

  if (!config.file) {
    throw new Error("Please, provide path to a file with Swagger/OpenAPI spec");
  }

  if (config.presets.length === 0) {
    console.warn("[openapi] No presets were specified. Nothing to generate.");
  }

  const timeLog = `✨ ${_package.default.name}`;
  console.time(timeLog);
  await (0, _.openapi)(config);
  console.timeEnd(timeLog);
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});