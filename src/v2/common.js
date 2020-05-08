function getRefName(value) {
  const valueArr = value.split("/");
  const name = valueArr[valueArr.length - 1];

  return name.replace(/[«,»]/g, "__").split("__").map(capitalize).join("");
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

module.exports = { getRefName, capitalize };
