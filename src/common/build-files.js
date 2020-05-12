const { readFileSync } = require("fs");
const path = require("path");

function buildFiles({ code, types }, config = {}) {
  const files = {
    "index.d.ts": types,
  };

  if (config.importRequest) {
    files["index.js"] = `import { request } from 'swagger-to-js/request';\n\n`;
    files["index.js"] += code;
  } else {
    files["index.js"] = `import { request } from './request';\n\n`;
    files["index.js"] += code;

    files["request.js"] = readFile("../lib/request.js", (content) => {
      const contentLines = content.split("\n").slice(0, -2);

      contentLines[0] = "import { jsonToXml } from './json-to-xml';";
      contentLines[1] = "import { xmlToJson } from './xml-to-json';";

      contentLines[3] = `export ${contentLines[3]}`;

      return contentLines.join("\n");
    });
    files["xml-to-json.js"] = readFile(
      "../lib/xml-to-json.js",
      exportOneFunction,
    );
    files["json-to-xml.js"] = readFile(
      "../lib/json-to-xml.js",
      exportOneFunction,
    );
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

module.exports = { buildFiles };
