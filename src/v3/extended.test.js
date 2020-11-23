const { swaggerToJs } = require("../index");

test("use github api", async () => {
  const result = await swaggerToJs({
    file:
      "https://raw.githubusercontent.com/github/rest-api-description/main/descriptions/api.github.com/api.github.com.json",
  });

  expect(result.types).toMatchSnapshot("types");
  expect(result.code).toMatchSnapshot("code");
  expect(result.swaggerData).toMatchSnapshot("swagger");
});
