function camelCase(value) {
  return value
    .replace(/[\s-_]/g, "__")
    .split("__")
    .filter(Boolean)
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }

      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
}

module.exports = { camelCase };
