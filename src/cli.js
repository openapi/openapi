#!/usr/bin/env node

const { program } = require("commander");
const { swaggerToJs } = require("./index");
const path = require("path");
const { existsSync, writeFileSync } = require("fs");
const { execSync } = require("child_process");
const { version } = require("../package.json");
const { cosmiconfigSync } = require("cosmiconfig");

const defaultOutputDir = "./api";
const changeAlways = ["index.js", "index.d.ts"];

program
  .version(version)
  .option("--file <path>", "Path swagger JSON file with api")
  .option(
    "--output-dir <path>",
    `Path output directory js api with types (default: '${defaultOutputDir}')`,
  )
  .option("--config <path>", "Path to config")
  .option(
    "--mode <type>",
    "Mode for build added comments: 'prod' | 'dev' (default: 'prod')",
  )
  .option(
    "--deprecated <type>",
    "Action for deprecated methods: 'warning' | 'ignore' | 'exception' (default: 'warning')",
  )
  .option("--import-request", "Import request code in out code")
  .option("--original-body", "Build with original request body");

program.parse(process.argv);

const exlorerConfig = cosmiconfigSync("swagger-to-js");
const searchedConfig = program.config
  ? exlorerConfig.load(program.config)
  : exlorerConfig.search() || {};
const loadedConfig = searchedConfig.config || {};

const config = {
  file: program.file || loadedConfig.file,
  outputDir: program.outputDir || loadedConfig.outputDir || defaultOutputDir,

  mode: program.mode || loadedConfig.mode,
  deprecated: program.deprecated || loadedConfig.deprecated,
  importRequest: program.importRequest || loadedConfig.importRequest,
  originalBody: program.originalBody || loadedConfig.originalBody,
};

if (config.mode === "dev") {
  const pathConfig = program.config || searchedConfig.filepath;

  if (pathConfig) {
    console.log("configPath:", pathConfig);
  }

  console.log("config:", config);
}

if (config.file) {
  // Paths
  const pathFile = path.resolve(process.cwd(), config.file);
  const pathOutputDir = path.resolve(process.cwd(), config.outputDir);

  // Check output dir
  if (existsSync(pathOutputDir) === false) {
    execSync(`mkdir -p ${pathOutputDir}`);
  }

  const fileApi = require(pathFile);
  const outputFiles = swaggerToJs(fileApi, config);

  console.time("✨ swagger-to-js");
  writeFilesSync(outputFiles, pathOutputDir);
  console.timeEnd("✨ swagger-to-js");
} else {
  throw new Error("Setup path to file with swagger api");
}

function writeFilesSync(files, outputDir = "") {
  Object.keys(files).forEach((fileName) => {
    const filePath = path.resolve(outputDir, fileName);

    if (existsSync(filePath) === false || changeAlways.includes(fileName)) {
      const fileConfig = files[fileName];

      writeFileSync(filePath, fileConfig.content);

      if (fileConfig.dependencies) {
        writeFilesSync(fileConfig.dependencies, outputDir);
      }
    }
  });
}
