"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openapi = openapi;

var fs = _interopRequireWildcard(require("fs"));

var _promises = require("fs/promises");

var path = _interopRequireWildcard(require("path"));

var _ono = require("@jsdevtools/ono");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

async function openapi(config) {
  const content = await readFile(config.file);
  assertDirectory(config.outputDir);
}

async function readFile(file) {
  let handle = null;

  try {
    handle = await (0, _promises.open)(file, "r");
    return await handle?.readFile({
      encoding: "utf8",
      flag: "r"
    });
  } catch (error) {
    throw (0, _ono.ono)(error, `Cannot read file ${file}`);
  } finally {
    await handle?.close();
  }
}

function assertDirectory(dir) {
  const outputDirPath = path.resolve(process.cwd(), dir);

  if (!fs.existsSync(outputDirPath)) {
    fs.mkdirSync(outputDirPath, {
      recursive: true
    });
  }
}