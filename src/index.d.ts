type JsonValue = string | number | null;

type Json = { [propName: string]: JsonValue | JsonValue[] | Json };

type Config = {
  deprecated?: "warning" | "ignore" | "exception"; // detault: "warning"
  mode?: "prod" | "dev"; // default: "prod"
  shortBody?: boolean; // default: false (xml won't work)
  importRequest?: boolean; // default: false
};

type Result = {
  paths: { code: string; types: string };
  definitions: string;
};

export function swaggerapi(apiJson: Json, config?: Config): Result;
