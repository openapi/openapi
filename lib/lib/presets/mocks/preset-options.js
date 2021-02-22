module.exports = (options = {}, internal) => {
  const schemas = [];

  return {
    name: "preset-options",
    onSchema(name, schema) {
      schema.name = name;
      schemas.push(schema);
    },
    postComponents() {
      // console.log("POST COMPONENTS", schemas);
    },
    build(files) {
      const name =
        options.fileCase === "paramCase"
          ? internal.changeCase.paramCase(internal.root().info.title)
          : internal.changeCase.camelCase(internal.root().info.title);
      files.addFile(`${name}.json`, JSON.stringify(schemas[0].xml, null, 2));
    },
  };
};
