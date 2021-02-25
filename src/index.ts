import * as fs from "fs";
import * as path from "path";
import { OpenAPIV2, OpenAPIV3 } from "openapi-types";
import { convertObj } from "swagger2openapi";
import * as changeCase from "change-case";

import { Config } from "./config";
import { parseContent, readApiFile, createFetchOptions } from "./api-file";
import {
  createPresetIterator,
  FilesApi,
  forEach,
  Internal,
  Method,
  Preset,
  PresetConstructor,
  PresetCore,
} from "./presets";
import { SeparatedFileSystem } from "./fs";
import { getByPath } from "./object-path";

export { PresetConstructor, Preset, OpenAPIV3, Internal, FilesApi };

export async function openapi(config: Config) {
  assertDirectory(config.outputDir);
  const content = await readApiFile(config);
  const apiObject = await parseContent(config.file, content);
  const api = isSwagger(apiObject)
    ? (await convertObj(apiObject, { fetchOptions: createFetchOptions(config) })).openapi
    : apiObject;

  function resolveRef(path: string): unknown | null {
    if (path[0] !== "#") {
      throw new TypeError(`Passed non local reference ${path}. Unexpected error`);
    }
    return getByPath(path.substr(1), api);
  }

  function isRef(object: unknown | Record<string, unknown>): boolean {
    return (
      typeof object === "object" && object !== null && typeof (object as any)["$ref"] === "string"
    );
  }

  const internal: Internal = { changeCase, root: () => api, isRef, resolveRef };
  const fileSystems = new SeparatedFileSystem<PresetCore>();
  const presets = createPresetIterator(config.presets, internal);

  // Create files API for each preset
  presets.forEach((preset) => fileSystems.createFor(preset));

  presets.forEach((preset) => preset.preComponents());
  presets.traverse(api.components?.callbacks, (preset) => preset.onCallback);
  presets.traverse(api.components?.headers, (preset) => preset.onHeader);
  presets.traverse(api.components?.links, (preset) => preset.onLink);
  presets.traverse(api.components?.parameters, (preset) => preset.onParameter);
  presets.traverse(api.components?.requestBodies, (preset) => preset.onRequestBody);
  presets.traverse(api.components?.responses, (preset) => preset.onResponse);
  presets.traverse(api.components?.schemas, (preset) => preset.onSchema);
  presets.traverse(api.components?.securitySchemes, (preset) => preset.onSecurityScheme);
  presets.forEach((preset) => preset.postComponents());

  presets.forEach((preset) => preset.preOperations());
  // Call hook for operation
  forEach(api.paths, (pattern, path) => {
    const methods = pick(path, [
      "get",
      "put",
      "post",
      "delete",
      "options",
      "head",
      "patch",
      "trace",
    ]);

    forEach(methods, (method, operation) =>
      presets.forEach((preset) => preset.onOperation(pattern, method as Method, operation, path)),
    );
  });
  presets.forEach((preset) => preset.postOperations());

  // Finish building and create files in Virtual file system
  presets.forEach((preset) => preset.build(fileSystems.get(preset).api));

  for (const file of fileSystems.combineTogether().values()) {
    fs.writeFileSync(path.join(config.outputDir, file.name), file.content);
  }
}

function pick<T extends object, K extends keyof T>(object: T, keys: K[]): Pick<T, K> {
  const entries = (Object.entries(object) as [K, T[K]][]).filter(([key]) => keys.includes(key));
  return Object.fromEntries(entries) as Pick<T, K>;
}

function isSwagger(input: OpenAPIV3.Document | OpenAPIV2.Document): input is OpenAPIV2.Document {
  return typeof (input as any)["swagger"] === "string";
}

function assertDirectory(dir: string): void {
  const outputDirPath = path.resolve(process.cwd(), dir);
  if (!fs.existsSync(outputDirPath)) {
    fs.mkdirSync(outputDirPath, { recursive: true });
  }
}
