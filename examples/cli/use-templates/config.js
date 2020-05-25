const path = require("path");

module.exports = {
  file: "./src/mocks/petstore-v2.json",
  outputDir: path.resolve(path.dirname(__filename), "api"),

  templateRequestCode: ({ name }) => `export function ${name}() {}`,
  templateRequestTypes: ({ name }) => `export function ${name}(): any;`,
};
