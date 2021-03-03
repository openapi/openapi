export type PresetConfig = string | [string, Record<string, unknown>];

export interface Config {
  outputDir: string;
  file: string;
  authorization: string | void;
  presets: PresetConfig[];
  workingDirectory?: string;
}
