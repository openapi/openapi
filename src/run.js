const { program } = require("commander");
const { swaggerapi } = require("./index");
const path = require("path");
const { existsSync, writeFileSync } = require("fs");
const { execSync } = require("child_process");

program
  .option("--file <path>", "Swagger JSON file with api")
  .option("--output-dir <path>", "Output directory js api with types", "./api");

program.parse(process.argv);

if (program.file) {
  // Paths
  const pathFile = path.resolve(process.cwd(), program.file);
  const pathOutputDir = path.resolve(process.cwd(), program.outputDir);
  const pathIndex = path.resolve(pathOutputDir, "index.js");
  const pathTypes = path.resolve(pathOutputDir, "index.d.ts");

  // Check output dir
  if (existsSync(pathOutputDir) === false) {
    execSync(`mkdir -p ${pathOutputDir}`);
  }

  const fileApi = require(pathFile);
  const { paths, definitions } = swaggerapi(fileApi);

  writeFileSync(pathIndex, paths.code);
  writeFileSync(pathTypes, `${definitions}\n// Methods\n${paths.types}`);
} else {
  throw new Error("Insert path to file with swagger api");
}
