async function asyncMap(arr, callback) {
  const result = [];

  for (let index = 0; index < arr.length; index += 1) {
    result.push(await callback(arr[index], index, arr));
  }

  return result;
}

module.exports = { asyncMap };
