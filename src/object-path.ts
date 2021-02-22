export function getByPath(path: string, object: object): unknown | null {
  const chunks = path
    .trim()
    .split("/")
    .map((chunk) => chunk.trim())
    .filter((chunk) => chunk.length > 0);

  let level = object;
  while (chunks.length) {
    const key = chunks.shift() as string;
    const value = (level as any)[key];
    if (value) {
      level = value;
    } else {
      return null;
    }
  }

  return level;
}
