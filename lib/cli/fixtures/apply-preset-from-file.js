module.exports = {
  cli: "--file ./src/mocks/petstore-v3-short.json",
  fileCode: "index.js",
  fileTypes: "index.d.ts",
  configContent: `
    module.exports = {
      file: "./src/mocks/petstore-v3-short.json",
      outputDir: "./TEST_API",
      importRequest: "disabled",

      presets: [[require.resolve("./src/lib/presets/mocks/demo3-preset/unused.js"), { dummy: "PASSED" }]]
    }
  `,
};
