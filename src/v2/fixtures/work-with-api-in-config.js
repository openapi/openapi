const path = require("path");
const fs = require("fs");

const apiJsonPath = path.resolve(process.cwd(), "./src/mocks/petstore-v2.json");
const apiJson = JSON.parse(fs.readFileSync(apiJsonPath, "utf8"));

module.exports = { apiJson };
