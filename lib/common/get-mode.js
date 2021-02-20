function getMode(value) {
  return value === "application/xml" ? "xml" : "json";
}

module.exports = { getMode };
