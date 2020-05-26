const path = require("path");
const yaml = require("js-yaml");

function contentToJson(pathFile, getContent) {
  const extname = path.extname(pathFile).substr(1);
  const isYaml = extname === "yaml" || extname === "yml";

  const fileContent = getContent();
  let apiJson = {};

  if (isYaml) {
    apiJson = yaml.safeLoad(fileContent);
  } else {
    try {
      apiJson = JSON.parse(fileContent);
    } catch (error) {
      throw new Error("Selected file have incorrect format.");
    }
  }

  return apiJson;
}

module.exports = { contentToJson };
