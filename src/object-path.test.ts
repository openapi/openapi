import { getByPath } from "./object-path";

const root = {
  theA: {
    theB: {
      theC: 1,
    },
  },
};

test("should resolve first level", () => {
  expect(getByPath("theA", root)).toBe(root.theA);
});

test("should resolve second level", () => {
  expect(getByPath("theA/theB", root)).toBe(root.theA.theB);
});

test("should resolve third level", () => {
  expect(getByPath("theA/theB/theC", root)).toBe(root.theA.theB.theC);
});

test("should return null if not found", () => {
  expect(getByPath("theA/theB/theZ", root)).toBe(null);
  expect(getByPath("theA/theZ/theC", root)).toBe(null);
  expect(getByPath("theZ/theB/theC", root)).toBe(null);
  expect(getByPath("theA/theZ", root)).toBe(null);
  expect(getByPath("theZ/theB", root)).toBe(null);
  expect(getByPath("theZ", root)).toBe(null);
});

test("should return the same object if passed empty string", () => {
  expect(getByPath("", root)).toBe(root);
});

test("should return the same object if passed /", () => {
  expect(getByPath("/", root)).toBe(root);
});

test("should skip duplicates /", () => {
  expect(getByPath("////", root)).toBe(root);
  expect(getByPath("theA///theB", root)).toBe(root.theA.theB);
  expect(getByPath("theA///theB", root)).toBe(root.theA.theB);
  expect(getByPath("theA//theB////theC", root)).toBe(root.theA.theB.theC);
});

test("should skip leading /", () => {
  expect(getByPath("/theA", root)).toBe(root.theA);
  expect(getByPath("/theA//theB", root)).toBe(root.theA.theB);
  expect(getByPath("/theA//theB////theC", root)).toBe(root.theA.theB.theC);
});

test("should skip trailing /", () => {
  expect(getByPath("theA/", root)).toBe(root.theA);
  expect(getByPath("theA//theB/", root)).toBe(root.theA.theB);
  expect(getByPath("/theA//theB////theC/", root)).toBe(root.theA.theB.theC);
});

test("realistic openapi refs", () => {
  const openapi = {
    components: {
      requestBodies: {
        Register: {
          required: true,
          content: {
            "application/json": {
              schema: {
                required: ["email"],
                properties: {
                  email: {
                    type: "string",
                  },
                },
              },
            },
          },
        },
      },
      schemas: {
        SessionUser: {
          description: "Current user in a session",
          type: "object",
          required: ["firstName", "lastName"],
          properties: {
            firstName: {
              type: "string",
            },
            lastName: {
              type: "string",
            },
          },
        },
      },
    },
  };

  expect(getByPath("/components/requestBodies/Register", openapi)).toBe(
    openapi.components.requestBodies.Register,
  );
  expect(getByPath("/components/schemas/SessionUser", openapi)).toBe(
    openapi.components.schemas.SessionUser,
  );
});
