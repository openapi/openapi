type JsonValue = string | number | null;

type Json = { [propName: string]: JsonValue | JsonValue[] | Json };

type SwaggerType = {
  [propName: string]: any;
};

type TemplateRequestCodeParams = {
  name: string;
  method: string;
  url: string;
  isWarningDeprecated: boolean;
  isExistParams: boolean;
  defaultParams: SwaggerType;
};

type TemplateRequestTypesParams = {
  name: string;
  countVariants: number;
  index: number;
  params: SwaggerType | null;
  addedParams: SwaggerType | null;
  result: SwaggerType | null;
};

type Config = {
  mode?: "prod" | "dev"; // default: "prod"
  deprecated?: "warning" | "ignore" | "exception"; // detault: "warning"
  importRequest?: boolean; // default: false
  originalBody?: boolean; // default: false
  templateCodeBefore?: () => string;
  templateCodeAfter?: () => string;
  templateTypesBefore?: () => string;
  templateTypesAfter?: () => string;
  templateRequestCode?: (_: TemplateRequestCodeParams) => string;
  templateRequestTypes?: (_: TemplateRequestTypesParams) => string;
};

type Result = {
  ["index.js"]: string;
  ["index.d.ts"]: string;
  [nameFile: string]: string;
};

export function swaggerapi(apiJson: Json, config?: Config): Result;
