import path from "path";
import { OpenAPIV3 } from "openapi-types";
import { PresetConfig } from "./config";

export interface FilesApi {
  addFile(name: string, content: string, options?: { overwrite?: boolean }): void;
}

export interface Preset {
  name: string;
  onSchema: (name: string, schema: OpenAPIV3.SchemaObject) => void;
  onParameter: (name: string, schema: OpenAPIV3.ParameterObject) => void;
  build(filesApi: FilesApi): void;
}

const defaultPreset: Preset = {
  name: "(default)",
  onSchema() {},
  onParameter() {},
  build() {},
};

type OptionalPreset = Partial<Preset>;

export function createPresetIterator(list: PresetConfig[], internal: unknown) {
  const presets: Preset[] = [];

  list.forEach((presetConfigName) => {
    const [name, readPreset] = loadPreset(presetConfigName, internal);
    presets.push({ ...defaultPreset, name, ...readPreset });
  });

  return {
    forEach(fn: (preset: Preset) => void) {
      presets.forEach((preset) => fn(preset));
    },
  };
}

function loadPreset(presetConfig: PresetConfig, internal: unknown): [string, OptionalPreset] {
  if (Array.isArray(presetConfig)) {
    const [name, options] = presetConfig;
    if (typeof name !== "string") {
      throw new TypeError(
        `A name of the preset should be a string. "${name === null ? "null" : typeof name}" passed`,
      );
    }

    const imported = require(resolvePath(name));

    // Here we know that user passed options to preset
    if (typeof imported !== "function") {
      throw new TypeError(
        `Preset "${name}" must be used without options. Please, remove options or check that you use correct preset`,
      );
    }
    const preset = imported(options || {}, internal);
    assertPreset(preset, name);

    return [name, preset];
  }

  const imported = require(resolvePath(presetConfig));
  // Package exports preset constructor
  if (typeof imported === "function") {
    const preset = imported({}, internal);
    assertPreset(preset, presetConfig);
    return [presetConfig, preset];
  }
  // Here package exports preset object
  assertPreset(imported, presetConfig);
  return [presetConfig, imported];
}

function resolvePath(name: string): string {
  if (name[0] === ".") {
    return path.resolve(process.cwd(), name);
  }
  return name;
}

function assertPreset(preset: any, name: string): void {
  if (typeof preset !== "object") {
    throw new TypeError(
      `Preset "${name}" must return an object from default exported function. Please, check that you use correct preset name.`,
    );
  }
}
