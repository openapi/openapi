#!/usr/bin/env node

import { program } from "commander";
import { cosmiconfigSync } from "cosmiconfig";
import path from "path";
import { openapi } from "..";
import isUrl from "is-url";
import createDebug from "debug";

import Package from "../../package.json";
import { Config } from "../config";

const debug = createDebug("openapi:cli");

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
  const workingDirectory = process.cwd();
  const cosmic = cosmiconfigSync(Package.name);

  const configFullPath = program.config
    ? path.resolve(workingDirectory, program.config)
    : cosmic.search()?.filepath;

  const resolved = configFullPath ? cosmic.load(configFullPath) : null;
  const configFromFs: Partial<Config> = resolved?.config ?? {};

  const configDirectory = configFullPath ? path.dirname(configFullPath) : process.cwd();

  const config = {
    outputDir:
      resolveDirectory(workingDirectory, program.outputDir) ||
      resolveDirectory(configDirectory, configFromFs.outputDir) ||
      path.resolve(workingDirectory, "./api"),
    file:
      resolveDirectory(process.cwd(), program.file) ||
      resolveDirectory(configDirectory, configFromFs.file),
    authorization: program.authorization || configFromFs.authorization,
    presets: program.presets || configFromFs.presets || [],
    workingDirectory: configDirectory,
  };

  if (!config.file) {
    throw new Error(
      "Please, provide path to a file with Swagger/OpenAPI spec via --file parameter",
    );
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

function resolveDirectory(relates: string, link?: string): string | void {
  if (link) {
    return path.resolve(relates, link);
  }
}
