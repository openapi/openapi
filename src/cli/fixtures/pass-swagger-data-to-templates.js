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

      templateRequestCode: ({ name }, { swaggerData }) => name + swaggerData.info.title,
      templateCodeBefore: ({ swaggerData }) => \`// Before \${swaggerData.info.description} \\n\\n\`,
      templateCodeAfter: ({ swaggerData }) => \`// After \${swaggerData.info.description} \\n\\n\`,

      templateTypesBefore: ({ swaggerData }) => \`// Before \${swaggerData.info.description} \\n\\n\`,
      templateTypesAfter: ({ swaggerData }) => \`// After \${swaggerData.info.description} \\n\\n\`,
      templateRequestTypes: ({ name }, { swaggerData }) => name + swaggerData.info.title,
    }
  `,
};
