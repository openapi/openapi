import * as fs from "fs";
import * as path from "path";
import { OpenAPIV2, OpenAPIV3 } from "openapi-types";
import { convertObj } from "swagger2openapi";
import * as changeCase from "change-case";

import { Config } from "./config";
import { parseContent, readApiFile, createFetchOptions } from "./api-file";
import { createPresetIterator, Preset, FilesApi, forEach, noRef, Method } from "./presets";

// File system per preset
interface PFileSystem {
  files: Map<string, string>;
  api: FilesApi;
}

export async function openapi(config: Config) {
  assertDirectory(config.outputDir);
  const content = await readApiFile(config);
  const apiObject = await parseContent(config.file, content);
  const api = isSwagger(apiObject)
    ? (await convertObj(apiObject, { fetchOptions: createFetchOptions(config) })).openapi
    : apiObject;

  const internal = { changeCase, root: () => api };
  const fileSystemsMap = new Map<Preset, PFileSystem>();
  const presets = createPresetIterator(config.presets, internal);

  // Create files API for each preset
  presets.forEach((preset) => {
    const files = new Map<string, string>();
    const api: FilesApi = {
      addFile(name, content, { overwrite } = {}) {
        if (files.has(name) && !overwrite) {
          return;
        }
        files.set(name, content);
      },
    };
    const system: PFileSystem = { files, api };
    fileSystemsMap.set(preset, system);
  });

  presets.traverse(api.components?.callbacks, (preset) => preset.onCallback);
  presets.traverse(api.components?.headers, (preset) => preset.onHeader);
  presets.traverse(api.components?.links, (preset) => preset.onLink);
  presets.traverse(api.components?.parameters, (preset) => preset.onParameter);
  presets.traverse(api.components?.requestBodies, (preset) => preset.onRequestBody);
  presets.traverse(api.components?.responses, (preset) => preset.onResponse);
  presets.traverse(api.components?.schemas, (preset) => preset.onSchema);
  presets.traverse(api.components?.securitySchemes, (preset) => preset.onSecurityScheme);

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

  // TODO: add pre/post hooks

  presets.forEach((preset) => {
    const fileSystem = fileSystemsMap.get(preset);
    if (!fileSystem) {
      throw new ReferenceError(
        `Cannot find fileSystem for preset "${preset.name}". Unexpected error`,
      );
    }
    preset.build(fileSystem.api);
  });

  // TODO: merge all filesystems into single one
  // TODO: validate that files has no conflicts
  // TODO: save files to FS

  for (const [preset, fs] of fileSystemsMap.entries()) {
    const files = Object.fromEntries(fs.files.entries());
    console.log(`File system of preset "${preset.name}":`, files);
  }
}

function onOperation(
  path: OpenAPIV3.PathItemObject,
  method: Method,
  fn: (operation: OpenAPIV3.OperationObject) => void,
) {
  const operation = path[method];
  if (operation) {
    fn(operation);
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
