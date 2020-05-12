function lineJoin(lines, options = {}) {
  const { beforeLine = "", separator = "" } = options;

  return lines
    .filter(Boolean)
    .map((value) => `${beforeLine}${value}`)
    .join(separator);
}

module.exports = { lineJoin };
