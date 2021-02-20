const { compilePresets } = require(".");

test("do not breaks if no presets field", () => {
  const config = {
    first: 1,
    second: 2,
  };
  expect(compilePresets(config)).toMatchInlineSnapshot(`
    Object {
      "first": 1,
      "second": 2,
    }
  `);
});

test("remove property if empty", () => {
  const config = {
    first: 1,
    second: 2,
    presets: [],
  };
  expect(compilePresets(config)).toMatchInlineSnapshot(`
    Object {
      "first": 1,
      "second": 2,
    }
  `);
});

test("breaks on invalid type", () => {
  expect(() => compilePresets({ presets: null })).toThrowErrorMatchingInlineSnapshot(
    `"property \\"presets\\" should be an array. null passed"`,
  );
  expect(() => compilePresets({ presets: 1 })).toThrowErrorMatchingInlineSnapshot(
    `"property \\"presets\\" should be an array. number passed"`,
  );
  expect(() => compilePresets({ presets: "" })).toThrowErrorMatchingInlineSnapshot(
    `"property \\"presets\\" should be an array. string passed"`,
  );
  expect(() => compilePresets({ presets: {} })).toThrowErrorMatchingInlineSnapshot(
    `"property \\"presets\\" should be an array. object passed"`,
  );
  expect(() => compilePresets({ presets: global })).toThrowErrorMatchingInlineSnapshot(
    `"property \\"presets\\" should be an array. object passed"`,
  );
  expect(() => compilePresets({ presets: true })).toThrowErrorMatchingInlineSnapshot(
    `"property \\"presets\\" should be an array. boolean passed"`,
  );
  expect(() => compilePresets({ presets: undefined })).toThrowErrorMatchingInlineSnapshot(
    `"property \\"presets\\" should be an array. undefined passed"`,
  );
});

test("correctly apply single preset", () => {
  const config = {
    foo: "override",
    baz: false,
    presets: ["./mocks/preset-simple"],
  };
  expect(compilePresets(config)).toMatchInlineSnapshot(`
    Object {
      "bar": 123,
      "baz": false,
      "foo": "override",
    }
  `);
});

test("correctly apply much more presets, properties from right to left, local has priority over preset", () => {
  const config = {
    foo: "override",
    baz: false,
    presets: ["./mocks/preset-simple", "./mocks/preset-second"],
  };
  expect(compilePresets(config)).toMatchInlineSnapshot(`
    Object {
      "bar": 5000,
      "baz": false,
      "foo": "override",
      "monster": "hi",
    }
  `);
});

test("applies nested presets", () => {
  const config = {
    foo: "override",
    baz: false,
    presets: ["./mocks/preset-nested"],
  };
  expect(compilePresets(config)).toEqual({
    foo: "override",
    baz: false,
    first: 1,
    bar: 2,
    monster: "hi",
  });
});

test("applies package preset", () => {
  const config = {
    foo: "override",
    baz: false,
    presets: ["demo-swagger-to-js-preset"],
  };
  expect(compilePresets(config)).toEqual({
    foo: "override",
    baz: false,
    first: 1,
    second: "hi",
  });
});

test('applies file in package preset "demo-preset/file"', () => {
  const config = {
    first: "override",
    baz: false,
    presets: ["demo-swagger-to-js-preset/another"],
  };
  expect(compilePresets(config)).toEqual({
    baz: false,
    first: "override",
    second: "hi",
  });
});

test("preset from package requires another package preset that use local preset", () => {
  const config = {
    first: "just start",
    third: 50000,
    presets: ["demo2-swagger-to-js-preset"],
  };
  expect(compilePresets(config)).toEqual({
    first: "just start",
    second: "hi",
    third: 50000,
    fourth: "SHOULD BE!",
  });
});

describe("options", () => {
  test("should be passed as argument to functional preset", () => {
    const config = {
      demo: 0,
      another: true,
      presets: [[require.resolve("./mocks/preset-options.js"), { wow: true }]],
    };
    expect(compilePresets(config)).toEqual({
      demo: 0,
      another: true,
      options: {
        wow: true,
      },
      just: 2,
    });
  });

  test("should throw if passed options to non-functional preset", () => {
    const config = {
      demo: 0,
      another: true,
      presets: [[require.resolve("./mocks/preset-simple.js"), { wow: true }]],
    };
    expect(() => {
      compilePresets(config);
    }).toThrowError(/must be used without options/);
  });

  test("should pass empty object if functional preset used without options", () => {
    const config = {
      demo: 0,
      another: true,
      presets: [require.resolve("./mocks/preset-options.js")],
    };
    expect(compilePresets(config)).toEqual({
      demo: 0,
      another: true,
      options: {},
      just: 2,
    });
  });

  test("should pass empty object if functional preset used without options", () => {
    const config = {
      demo: 0,
      another: true,
      presets: [[require.resolve("./mocks/preset-options-nested.js"), { passed: "options" }]],
    };
    expect(compilePresets(config)).toMatchInlineSnapshot(`
      Object {
        "another": true,
        "deep": true,
        "demo": 0,
        "just": 5,
        "options": Object {
          "options": Object {
            "passed": "options",
          },
        },
        "parentOptions": Object {
          "passed": "options",
        },
      }
    `);
  });
});
