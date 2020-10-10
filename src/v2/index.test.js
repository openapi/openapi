const fs = require("fs");
const path = require("path");
const { sentenceCase } = require("change-case");
const { swaggerToJs } = require("../index");

describe("v2", () => {
  const fixturesDir = path.join(__dirname, "fixtures");
  const testCases = fs
    .readdirSync(fixturesDir)
    .filter((file) => file.endsWith(".js"))
    .sort();

  for (const caseFile of testCases) {
    const caseName = sentenceCase(`should ${caseFile.replace(/[tj]sx?/, "")}`);

    it(caseName, async () => {
      const fixturePath = path.join(fixturesDir, caseFile);
      const config = require(fixturePath);
      const result = await swaggerToJs(config);

      expect(result.types).toMatchSnapshot("types");
      expect(result.code).toMatchSnapshot("code");
      expect(result.swaggerData).toMatchSnapshot("swagger");
    });
  }
});
