module.exports = {
  file: "./src/mocks/petstore-v2.json",
  importRequest: "disabled",
  presets: [require.resolve("../mocks/example-preset.js"), "demo3-swagger-to-js-preset"],
};
