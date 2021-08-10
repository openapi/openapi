const { openapiGenerate: swaggerToJs } = require("../index");
const { readFileSync } = require("fs");
const path = require("path");

/* eslint-disable no-unused-vars */

const config = {
  file: "./src/mocks/petstore-v2.json",
};

test("apiJson equal api by file", async () => {
  const apiJsonPath = path.resolve(process.cwd(), config.file);
  const apiJson = JSON.parse(readFileSync(apiJsonPath, "utf8"));
  const { swaggerData: _, ...result } = await swaggerToJs({ apiJson });
  const { swaggerData: _s, ...resultByBaseConfig } = await swaggerToJs(config);

  expect(result).toEqual(resultByBaseConfig);
});

test("apiJson important than file", async () => {
  const apiJsonPath = path.resolve(process.cwd(), config.file);
  const apiJson = JSON.parse(readFileSync(apiJsonPath, "utf8"));
  const { swaggerData: _, ...result } = await swaggerToJs({
    apiJson,
    file: "./src/mocks/petstore-v3.json",
  });
  const { swaggerData: _s, ...resultByBaseConfig } = await swaggerToJs(config);

  expect(result).toEqual(resultByBaseConfig);
});

test("use yaml", async () => {
  const { swaggerData: _, ...result } = await swaggerToJs({
    file: "./src/mocks/petstore-v2.yaml",
  });
  const { swaggerData: _s, ...resultByBaseConfig } = await swaggerToJs(config);

  expect(result).toEqual(resultByBaseConfig);
});

test.skip("use url in prop file", async () => {
  const { swaggerData: _, ...result } = await swaggerToJs({
    file:
      "https://raw.githubusercontent.com/openapi/openapi/master/src/mocks/petstore-v2-multi-file.yaml",
  });
  const { swaggerData: _s, ...resultByBaseConfig } = await swaggerToJs(config);

  expect(result).toEqual(resultByBaseConfig);
});

test("multifile", async () => {
  const { swaggerData: _, ...result } = await swaggerToJs({
    file: "./src/mocks/petstore-v2-multi-file.yaml",
  });
  const { swaggerData: _s, ...resultByBaseConfig } = await swaggerToJs(config);

  expect(result).toEqual(resultByBaseConfig);
});

test("multifile and root file by url", async () => {
  const { swaggerData: _, ...result } = await swaggerToJs({
    file:
      "https://raw.githubusercontent.com/openapi/openapi/master/src/mocks/petstore-v2-multi-file.yaml",
  });
  const { swaggerData: _s, ...resultByBaseConfig } = await swaggerToJs(config);

  expect(result).toEqual(resultByBaseConfig);
});

test("multifile with ref how url", async () => {
  const { swaggerData: _, ...result } = await swaggerToJs({
    file: "./src/mocks/petstore-v2-ref-url.yaml",
  });
  const { swaggerData: _s, ...resultByBaseConfig } = await swaggerToJs(config);

  expect(result).toEqual(resultByBaseConfig);
});
