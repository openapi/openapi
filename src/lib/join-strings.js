function joinStrings(strings, options = {}) {
  const { before = "", after = "", separator = "" } = options;

  return strings
    .filter(Boolean)
    .map((value) => `${before}${value}${after}`)
    .join(separator);
}

module.exports = { joinStrings };
