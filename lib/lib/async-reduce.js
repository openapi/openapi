async function asyncReduce(arr, callback, memo) {
  for (let index = 0; index < arr.length; index += 1) {
    memo = await callback(memo, arr[index], index, arr);
  }

  return memo;
}

module.exports = { asyncReduce };
