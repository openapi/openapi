#!/usr/bin/env node

import { program } from "commander";
import { cosmiconfigSync } from "cosmiconfig";
import { openapi } from "..";

import Package from "../../package.json";

program
  .version(Package.version)

  // Cli Options
  .option("--output-dir <path>", "Where to save compiled files")
  .option("--config <path>", "Path to a config")
  .option("--file <path>", "Path to Swagger/OpenAPI file (JSON, YAML, or URL")
  .option(
    "--authorization <value>",
    "An auth token for getting OpenAPI file from URL (used as header)",
  )
  .option("--presets <presets...>", "List of presets to generate files from");

async function main() {
  program.parse(process.argv);

  const cosmic = cosmiconfigSync(Package.name);
  const resolved = program.config ? cosmic.load(program.config) : cosmic.search() || { config: {} };
  const loaded = resolved?.config || {};

  const config = {
    outputDir: program.outputDir || loaded.outputDir || "./api",
    file: program.file || loaded.file,
    authorization: program.authorization || loaded.authorization,
    presets: program.presets || loaded.presets || [],
  };

  if (!config.file) {
    throw new Error("Please, provide path to a file with Swagger/OpenAPI spec");
  }
  if (config.presets.length === 0) {
    console.warn("[openapi] No presets were specified. Nothing to generate.");
  }

  const timeLog = `✨ ${Package.name}`;
  console.time(timeLog);
  await openapi(config);
  console.timeEnd(timeLog);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
