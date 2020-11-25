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
  summary: string;
  description: string;
  countVariants: number;
  index: number;
  params: SwaggerType | null;
  addedParams: SwaggerType | null;
  result: SwaggerType | null;
};

type Config = {
  // Options
  file?: string; // Path to file with api  (*.json, *.yaml, url)
  apiJson?: Json; // Api in json (if not use option 'file', more important than path to file)
  authorization?: string; // Auth token for get api by url (it is header for request)
  mode?: "prod" | "dev"; // default: "prod"
  deprecated?: "warning" | "ignore" | "exception"; // detault: "warning"
  importRequest?: boolean; // default: false
  originalBody?: boolean; // default: false
  ignoreDescription?: boolean; // default: false

  // Templates
  templateCodeBefore?: () => string;
  templateRequestCode?: (_: TemplateRequestCodeParams) => string;
  templateCodeAfter?: () => string;

  templateTypesBefore?: () => string;
  templateRequestTypes?: (_: TemplateRequestTypesParams) => string;
  templateTypesAfter?: () => string;
};

type Result = {
  ["index.js"]: string;
  ["index.d.ts"]: string;
  [nameFile: string]: string;
};

export function openapiGenerate(config?: Config): Result;
