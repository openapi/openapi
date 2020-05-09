const { build } = require("./build");
const { print } = require("./print");
const { readFileSync } = require("fs");
const path = require("path");

function swaggerV2ToJs(apiJson, config = {}) {
  const { code, types } = print(build(apiJson, config), config);
  const files = {
    "index.d.ts": types,
  };

  if (config.importRequest) {
    files["index.js"] = `import { request } from 'swagger-to-js/request';\n\n`;
    files["index.js"] += code;
  } else {
    files["index.js"] = `import { request } from './request';\n\n`;
    files["index.js"] += code;

    files["request.js"] = readFile("../request.js", (content) => {
      const contentLines = content.split("\n").slice(0, -2);

      contentLines[0] = "import { js2xml } from './js2xml';";
      contentLines[1] = "import { xml2js } from './xml2js';";
      contentLines[2] = "import { kebabCase } from './kebab-case';";

      contentLines[4] = `export ${contentLines[4]}`;

      return contentLines.join("\n");
    });
    files["js2xml.js"] = readFile("../lib/js2xml.js", exportOneFunction);
    files["xml2js.js"] = readFile("../lib/xml2js.js", exportOneFunction);
    files["kebab-case.js"] = readFile(
      "../lib/kebab-case.js",
      exportOneFunction,
    );
  }

  return files;
}

function readFile(value, callback = (content) => content) {
  const pathFile = path.resolve(path.dirname(__filename), value);

  return callback(readFileSync(pathFile).toString());
}

function exportOneFunction(content) {
  const contentLines = content.split("\n").slice(0, -2);

  contentLines[0] = `export ${contentLines[0]}`;

  return contentLines.join("\n");
}

module.exports = { swaggerV2ToJs };
