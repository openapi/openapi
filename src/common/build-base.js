async function buildBase(build, config = {}) {
  const content = { code: "", types: "" };

  if (config.templateCodeBefore) {
    content.code += config.templateCodeBefore();
  }

  if (config.templateTypesBefore) {
    content.types += config.templateTypesBefore();
  }

  await build(content);

  if (config.templateCodeAfter) {
    content.code += config.templateCodeAfter();
  }

  if (config.templateTypesAfter) {
    content.types += config.templateTypesAfter();
  }

  return content;
}

module.exports = { buildBase };
