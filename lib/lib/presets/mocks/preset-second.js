module.exports = (options = {}, { changeCase, root } = {}) => {
  const { fileName = "readme" } = options;
  return {
    name: "preset-second",
    build(files) {
      files.addFile(`${fileName}.md`, `# ${changeCase.sentenceCase(root().info.title)}`);
    },
  };
};
