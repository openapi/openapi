module.exports = (options, internal) => {
  const schemas = [];

  return {
    name: "preset-options",
    onSchema(name, schema) {
      schemas.push(schema);
    },
    build(files) {
      files.addFile("schemas-count.js", "wrooong");
      files.addFile("schemas-count.js", String(schemas.length), { overwrite: true });
    },
  };
};
