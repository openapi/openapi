function kebabCase(value) {
  let result = value
    .split("")
    .map((letter) => {
      if (letter === letter.toUpperCase()) {
        return `-${letter.toUpperCase()}`;
      }

      return letter;
    })
    .join("");

  return result.charAt(0).toUpperCase() + result.slice(1);
}

module.exports = { kebabCase };
