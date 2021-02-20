import * as fs from "fs";
import * as path from "path";
import { OpenAPIV2, OpenAPIV3 } from "openapi-types";
import { convertObj } from "swagger2openapi";
import * as changeCase from "change-case";

import { Config } from "./config";
import { parseContent, readApiFile, createFetchOptions } from "./api-file";
import { createPresetIterator, Preset, FilesApi } from "./presets";

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

  const internal = { changeCase };
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

  forEach(api.components?.parameters, (name, parameter) =>
    presets.forEach((preset) => preset.onParameter(name, parameter)),
  );

  forEach(api.components?.schemas, (name, schema) =>
    presets.forEach((preset) => preset.onSchema(name, schema)),
  );

  // TODO: add hooks for each component type
  // TODO: add hook for operation
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

function forEach<T>(
  map: Record<string, T> | undefined,
  fn: (name: string, value: Exclude<T, OpenAPIV3.ReferenceObject | undefined>) => void,
) {
  for (const name in map) {
    const value: OpenAPIV3.ReferenceObject | T | undefined = map[name];
    if (noRef(value) && value) fn(name, value as any);
  }
}

function noRef<T>(value: OpenAPIV3.ReferenceObject | T): value is Exclude<T, undefined> {
  return typeof value && !(value as any)["$ref"];
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
