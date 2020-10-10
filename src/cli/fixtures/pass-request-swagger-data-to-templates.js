module.exports = {
  cli: "--file ./src/mocks/petstore-v3-short.json",
  fileCode: "index.js",
  fileTypes: "index.d.ts",
  configContent: `
    module.exports = {
      file: "./src/mocks/petstore-v3-short.json",
      outputDir: "./TEST_API",
      importRequest: "disabled",

      templateRequestCode: (_, { requestSwaggerData, changeCase }) => changeCase.dotCase(requestSwaggerData.operationId),
      templateRequestTypes: (_, { requestSwaggerData, changeCase }) => changeCase.dotCase(requestSwaggerData.operationId),
    }
  `,
};
