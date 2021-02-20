import * as fs from "fs";
import { open, FileHandle } from "fs/promises";
import * as path from "path";
import { ono } from "@jsdevtools/ono";

type Preset = string | [string, Record<string, unknown>];

export interface Config {
  outputDir: string;
  file: string;
  authorization: string | void;
  presets: Preset[];
}

export async function openapi(config: Config) {
  const content = await readFile(config.file);
  assertDirectory(config.outputDir);
}

async function readFile(file: string): Promise<string> {
  let handle: FileHandle | null = null;
  try {
    handle = await open(file, "r");
    return await handle?.readFile({ encoding: "utf8", flag: "r" });
  } catch (error) {
    throw ono(error, `Cannot read file ${file}`);
  } finally {
    await handle?.close();
  }
}

function assertDirectory(dir: string): void {
  const outputDirPath = path.resolve(process.cwd(), dir);
  if (!fs.existsSync(outputDirPath)) {
    fs.mkdirSync(outputDirPath, { recursive: true });
  }
}
