const { readFileSync } = require("fs");
const path = require("path");

function buildFiles({ code, types }, config = {}) {
  const files = {
    "index.d.ts": {
      content: `type RequestResult<Data> = Promise<{ response: Response; data: Data; }>;\n\n${types}`,
    },
  };

  if (config.importRequest) {
    files["index.js"] = {
      content: `import { request } from 'swagger-to-js/request';\n\n${code}`,
    };
  } else {
    files["index.js"] = {
      content: `import { request } from './request';\n\n${code}`,
    };

    files["request.js"] = {
      content: readFile("../lib/request.js", (content) => {
        const contentLines = content.split("\n").slice(0, -2);

        contentLines[0] = "import { jsonToXml } from './json-to-xml';";
        contentLines[1] = "import { xmlToJson } from './xml-to-json';";

        contentLines[3] = `export ${contentLines[3]}`;

        return contentLines.join("\n");
      }),
      dependencies: {
        "xml-to-json.js": {
          content: readFile("../lib/xml-to-json.js", exportOneFunction),
        },
        "json-to-xml.js": {
          content: readFile("../lib/json-to-xml.js", exportOneFunction),
        },
      },
    };
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
