#!/usr/bin/env node

const { program } = require("commander");
const { swaggerToJs } = require("./index");
const path = require("path");
const { existsSync, writeFileSync, readFileSync } = require("fs");
const { execSync } = require("child_process");
const { version, name } = require("../package.json");
const { cosmiconfigSync } = require("cosmiconfig");
const yaml = require("js-yaml");
const getIsUrl = require("is-url");
const fetch = require("node-fetch");

const timeLog = `✨ ${name}`;
const defaultOutputDir = "./api";
const changeAlways = ["index.js", "index.d.ts"];

program
  .version(version)
  // Cli options
  .option("--file <path>", "Path to file with api (*.json, *.yaml, url)")
  .option(
    "--output-dir <path>",
    `Path output directory js api with types (default: '${defaultOutputDir}')`,
  )
  .option(
    "--authorization <value>",
    "Auth for get api by url (it is header for request)",
  )
  .option("--config <path>", "Path to config")
  // Common options
  .option(
    "--mode <type>",
    "Mode for build added comments: 'prod' | 'dev' (default: 'prod')",
  )
  // Api options
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
  authorization: program.authorization || loadedConfig.authorization,

  mode: program.mode || loadedConfig.mode,
  deprecated: program.deprecated || loadedConfig.deprecated,
  importRequest: program.importRequest || loadedConfig.importRequest,
  originalBody: program.originalBody || loadedConfig.originalBody,
};

async function main(config) {
  if (config.mode === "dev") {
    const pathConfig = program.config || searchedConfig.filepath;

    if (pathConfig) {
      console.log("configPath:", pathConfig);
    }

    console.log("config:", config);
  }

  if (config.file) {
    console.time(timeLog);

    // Get apiJson
    const apiJson = await readApiJson(config);

    // Convert to js
    const outputFiles = swaggerToJs(apiJson, config);

    // Check and create output dir
    const pathOutputDir = path.resolve(process.cwd(), config.outputDir);

    if (existsSync(pathOutputDir) === false) {
      execSync(`mkdir -p ${pathOutputDir}`);
    }

    // Write files
    writeFilesSync(outputFiles, pathOutputDir);

    console.timeEnd(timeLog);
  } else {
    throw new Error("Setup path to file with swagger api.");
  }
}

async function readApiJson(config) {
  const isUrl = getIsUrl(config.file);

  // By url
  if (isUrl) {
    return await fetch(config.file, {
      headers: { authorization: config.authorization },
    }).then((response) => {
      if (response.status === 401) {
        throw new Error("Unable to get file. Specify authorization settings.");
      }

      return response.json();
    });
  }

  // By local file
  const apiPath = path.resolve(process.cwd(), config.file);
  const extname = path.extname(config.file).substr(1);
  const isJson = extname === "json";
  const isYaml = extname === "yaml" || extname === "yml";

  if (isJson || isYaml) {
    const apiFile = readFileSync(apiPath, "utf8");
    let apiJson = {};

    if (isYaml) {
      apiJson = yaml.safeLoad(apiFile);
    } else {
      apiJson = JSON.parse(apiFile);
    }

    return apiJson;
  }

  throw new Error("Selected file have incorrect format.");
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

main(config);
