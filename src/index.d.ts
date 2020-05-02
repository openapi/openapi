type JsonValue = string | number | null;

type Json = { [propName: string]: JsonValue | JsonValue[] | Json };

type Result = {
  paths: { code: string; types: string };
  definitions: string;
};

export function swaggerapi(apiJson: Json): Result;
