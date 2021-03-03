module.exports = {
  cli: "--file ./src/mocks/petstore-v3-short.json",
  fileCode: "swagger-petstore-short-open-api-3-0.js",
  fileTypes: "swagger-petstore-short-open-api-3-0.d.ts",
  configContent: `
    module.exports = {
      file: "./src/mocks/petstore-v3-short.json",
      outputDir: "./TEST_API",
      importRequest: "disabled",

      templateFileNameCode: ({ swaggerData, changeCase }) => \`\${changeCase.paramCase(swaggerData.info.title)}.js\`,
      templateFileNameTypes: ({ swaggerData, changeCase }) => \`\${changeCase.paramCase(swaggerData.info.title)}.d.ts\`,

      templateRequestCode: ({ name }, { swaggerData, changeCase }) => name + changeCase.camelCase(swaggerData.info.title),
      templateCodeBefore: ({ swaggerData, changeCase }) => \`// Before \${changeCase.paramCase(swaggerData.info.description)} \\n\\n\`,
      templateCodeAfter: ({ swaggerData, changeCase }) => \`// After \${changeCase.paramCase(swaggerData.info.description)} \\n\\n\`,

      templateTypesBefore: ({ swaggerData, changeCase }) => \`// Before \${changeCase.paramCase(swaggerData.info.description)} \\n\\n\`,
      templateTypesAfter: ({ swaggerData, changeCase }) => \`// After \${changeCase.paramCase(swaggerData.info.description)} \\n\\n\`,
      templateRequestTypes: ({ name }, { swaggerData, changeCase }) => name + changeCase.camelCase(swaggerData.info.title),
    }
  `,
};
