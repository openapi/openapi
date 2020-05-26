const fs = require("fs");
const path = require("path");

const { swaggerToJs } = require("../../../src");

swaggerToJs({
  file: "./src/mocks/petstore-v2-multi-file.yaml",
}).then(({ code, types }) => {
  fs.writeFileSync(path.resolve(__dirname, "code.js"), code);
  fs.writeFileSync(path.resolve(__dirname, "code.d.ts"), types);
});
