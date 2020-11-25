const path = require("path");
const { swaggerToJs } = require("../index");

test("use github api", async () => {
  const result = await swaggerToJs({
    file: path.resolve(__dirname, "mocks", "api.github.com.json"),
  });

  expect(result.types).toMatchSnapshot("types");
  expect(result.code).toMatchSnapshot("code");
  expect(result.swaggerData).toMatchSnapshot("swagger");
});
