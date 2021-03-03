import { open, FileHandle } from "fs/promises";
import * as path from "path";
import { ono } from "@jsdevtools/ono";
import { OpenAPIV2, OpenAPIV3 } from "openapi-types";
import isUrl from "is-url";
import fetch from "node-fetch";
import yaml from "js-yaml";
import createDebug from "debug";

import { Config } from "./config";

const debug = createDebug("openapi:api-file");

export async function readApiFile(config: Config): Promise<string> {
  return isUrl(config.file) ? await readFileFromWeb(config) : await readFileFromDisk(config);
}

export async function parseContent(
  filepath: string,
  content: string,
): Promise<OpenAPIV3.Document | OpenAPIV2.Document> {
  const extension = path.extname(filepath);

  switch (extension) {
    case ".yaml": {
      const result: any = yaml.load(content, { filename: filepath });
      if (!result) {
        throw new Error(`Read file has incorrect content: ${result}`);
      }
      return result;
    }

    case ".json":
    case "": {
      const result: any = JSON.parse(content);
      if (!result) {
        throw new Error(`Read file has incorrect content: ${result}`);
      }
      return result;
    }

    default:
      throw new Error(`Cannot parse file ${filepath} with extension "${extension}"`);
  }
}

export function createFetchOptions(config: Config) {
  return {
    headers: config.authorization ? { authorization: config.authorization } : undefined,
  };
}

async function readFileFromWeb(config: Config): Promise<string> {
  const response = await fetch(config.file, createFetchOptions(config));

  if (response.ok) {
    return await response.text();
  }
  throw new Error(`Failed to fetch api file ${config.file}`);
}

async function readFileFromDisk(config: Config): Promise<string> {
  let handle: FileHandle | null = null;
  try {
    handle = await open(config.file, "r");
    return await handle?.readFile({ encoding: "utf8", flag: "r" });
  } catch (error) {
    throw ono(error, `Cannot read file ${config.file}`);
  } finally {
    await handle?.close();
  }
}
