const fs = require("fs");
const path = require("path");

const { openapiGenerate: swaggerToJs } = require("../../../lib");

swaggerToJs({
  file: "./src/mocks/petstore-v2.json",
}).then(({ code, types }) => {
  fs.writeFileSync(path.resolve(__dirname, "code.js"), code);
  fs.writeFileSync(path.resolve(__dirname, "code.d.ts"), types);
});
