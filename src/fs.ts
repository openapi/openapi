import { FilesApi } from "./presets";

// File system per preset
interface VirtualFileSystem {
  files: Map<string, string>;
  api: FilesApi;
}

export class SeparatedFileSystem<Key extends { name: string }> {
  map = new Map<Key, VirtualFileSystem>();

  createFor(key: Key) {
    const files = new Map<string, string>();
    const api: FilesApi = {
      addFile(name, content, { overwrite } = {}) {
        if (files.has(name) && !overwrite) {
          return;
        }
        files.set(name, content);
      },
    };
    const system: VirtualFileSystem = { files, api };
    this.map.set(key, system);
  }

  /**
   * @throws ReferenceError
   */
  get(key: Key): VirtualFileSystem {
    const fileSystem = this.map.get(key);
    if (!fileSystem)
      throw new ReferenceError(`Cannot find fileSystem for "${key.name}". Unexpected error`);

    return fileSystem;
  }

  /**
   * @throws Error
   */
  combineTogether(): Map<string, VFile> {
    const files = new Map<string, VFile>();

    for (const [key, fs] of this.map.entries()) {
      for (const [name, content] of fs.files.entries()) {
        const exists = files.get(name); // TODO: normalize path
        if (exists) {
          throw new Error(
            `The file with the name "${name}" created by "${exists.createdBy}", but "${key.name}" wants to create a file with the same name. Change options for these presets to solve conflict.`,
          );
        }
        files.set(name, { name, createdBy: key.name, content });
      }
    }

    return files;
  }
}

interface VFile {
  name: string;
  createdBy: string;
  content: string;
}
