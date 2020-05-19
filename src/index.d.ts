type JsonValue = string | number | null;

type Json = { [propName: string]: JsonValue | JsonValue[] | Json };

type Config = {
  mode?: "prod" | "dev"; // default: "prod"
  deprecated?: "warning" | "ignore" | "exception"; // detault: "warning"
  importRequest?: boolean; // default: false
  originalBody?: boolean; // default: false
};

type Result = {
  ["index.js"]: string;
  ["index.d.ts"]: string;
  [nameFile: string]: string;
};

export function swaggerapi(apiJson: Json, config?: Config): Result;
