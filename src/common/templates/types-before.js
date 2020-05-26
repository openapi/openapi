function templateTypesBefore() {
  return "type RequestResult<Data> = Promise<{ response: Response; data: Data; }>;\n\n";
}

module.exports = { templateTypesBefore };
