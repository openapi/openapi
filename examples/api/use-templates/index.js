const fs = require("fs");
const path = require("path");

const { swaggerToJs } = require("../../../src");

swaggerToJs({
  file: "./src/mocks/petstore-v3.json",

  templateCodeBefore: () => `import * as ef from "effector";\n\n`,
  templateRequestCode: ({ name }) =>
    `export function ${name}() {\n  return ef.createEffect();\n};`,

  templateTypesBefore: () => `import * as ef from "effector";\n\n`,
  templateRequestTypes: ({ name, index }) =>
    index === 0 ? `export function ${name}(): ef.Effect<any, any>;` : "",
}).then(({ code, types }) => {
  fs.writeFileSync(path.resolve(__dirname, "code.js"), code);
  fs.writeFileSync(path.resolve(__dirname, "code.d.ts"), types);
});
