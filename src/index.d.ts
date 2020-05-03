type JsonValue = string | number | null;

type Json = { [propName: string]: JsonValue | JsonValue[] | Json };

type Config = {
  deprecated?: "warning" | "ignore" | "exception"; // detault: "warning"
};

type Result = {
  paths: { code: string; types: string };
  definitions: string;
};

export function swaggerapi(apiJson: Json, config?: Config): Result;
