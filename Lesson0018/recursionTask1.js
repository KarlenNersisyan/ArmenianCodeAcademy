/* Write a recursive function to find the sum of a given array. */
function sumArr(array) {
  if (array.length === 0) {
    return 0;
  }
  let [firstItem, ...sum] = array;
  return firstItem + sumArr(sum);
}

console.log(sumArr([77, -27, 0, 50])); // 100
