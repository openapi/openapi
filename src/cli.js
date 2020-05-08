#!/usr/bin/env node

const { program } = require("commander");
const { swaggerToJs } = require("./index");
const path = require("path");
const { existsSync, writeFileSync } = require("fs");
const { execSync } = require("child_process");
const { version } = require("../package.json");
const { cosmiconfigSync } = require("cosmiconfig");

const defaultOutputDir = "./api";

program
  .version(version)
  .option("--file <path>", "Path swagger JSON file with api")
  .option(
    "--output-dir <path>",
    `Path output directory js api with types (default: '${defaultOutputDir}')`,
  )
  .option(
    "--deprecated <type>",
    "Action for deprecated methods: 'warning' | 'ignore' | 'exception' (default: 'warning')",
  )
  .option("--config <path>", "Path to config")
  .option(
    "--mode <type>",
    "Mode for build added comments: 'prod' | 'dev' (default: 'prod')",
  )
  .option(
    "--short-body",
    "If request body have one element so this element move to root body",
  )
  .option("--import-request", "Import request code in out code");

program.parse(process.argv);

const exlorerConfig = cosmiconfigSync("swagger-to-js");
const loadedConfig = program.config
  ? exlorerConfig.load(program.config).config
  : exlorerConfig.search().config;

const config = {
  file: program.file || loadedConfig.file,
  outputDir: program.outputDir || loadedConfig.outputDir || defaultOutputDir,

  deprecated: program.deprecated || loadedConfig.deprecated,
  mode: program.mode || loadedConfig.mode,
  shortBody: program.shortBody || loadedConfig.shortBody,
  importRequest: program.importRequest || loadedConfig.importRequest,
};

if (config.mode === "dev") {
  console.log(config);
}

if (config.file) {
  // Paths
  const pathFile = path.resolve(process.cwd(), config.file);
  const pathOutputDir = path.resolve(process.cwd(), config.outputDir);
  const pathIndex = path.resolve(pathOutputDir, "index.js");
  const pathTypes = path.resolve(pathOutputDir, "index.d.ts");

  // Check output dir
  if (existsSync(pathOutputDir) === false) {
    execSync(`mkdir -p ${pathOutputDir}`);
  }

  const fileApi = require(pathFile);
  const { code, types } = swaggerToJs(fileApi, config);

  writeFileSync(pathIndex, code);
  writeFileSync(pathTypes, types);
} else {
  throw new Error("Setup path to file with swagger api");
}
