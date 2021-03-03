const changeCase = require("change-case");

async function buildBase(build, swaggerData, config = {}) {
  const content = { code: "", types: "" };

  if (config.templateCodeBefore) {
    content.code += config.templateCodeBefore({ swaggerData, changeCase });
  }

  if (config.templateTypesBefore) {
    content.types += config.templateTypesBefore({ swaggerData, changeCase });
  }

  await build(content);

  if (config.templateCodeAfter) {
    content.code += config.templateCodeAfter({ swaggerData, changeCase });
  }

  if (config.templateTypesAfter) {
    content.types += config.templateTypesAfter({ swaggerData, changeCase });
  }

  return content;
}

module.exports = { buildBase };
