function getRef(object, ref) {
  const refArr = ref.split("/").slice(1);

  return refArr.reduce((memo, key) => memo[key], object);
}

module.exports = { getRef };
