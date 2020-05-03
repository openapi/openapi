#!/usr/bin/env node

const { program } = require("commander");
const { swaggerapi } = require("./index");
const path = require("path");
const { existsSync, writeFileSync } = require("fs");
const { execSync } = require("child_process");
const { version } = require("../package.json");

const defaultOutputDir = "./api";

program
  .version(version)
  .option("--file <path>", "Path swagger JSON file with api")
  .option(
    "--output-dir <path>",
    `Path output directory js api with types (default: "${defaultOutputDir}")`,
  )
  .option(
    "--deprecated <type>",
    "Action for deprecated methods: 'warning' | 'ignore' | 'exception' (default: 'warning')",
  );

program.parse(process.argv);

const pathPackageJson = path.resolve(process.cwd(), "package.json");
const { swaggerapi: swaggerapiConfig = {} } = require(pathPackageJson) || {};
const config = {
  file: program.file ? program.file : swaggerapiConfig.file,
  outputDir:
    (program.outputDir ? program.outputDir : swaggerapiConfig.outputDir) ||
    defaultOutputDir,
  deprecated: program.deprecated
    ? program.deprecated
    : swaggerapiConfig.deprecated,
};

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
  const { code, types } = swaggerapi(fileApi, {
    deprecated: config.deprecated,
  });

  writeFileSync(pathIndex, code);
  writeFileSync(pathTypes, types);
} else {
  throw new Error("Setup path to file with swagger api");
}
