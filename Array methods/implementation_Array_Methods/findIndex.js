function toMakeFindIndex(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) {
      return i;
    }
  }
  return -1;
}
const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(toMakeFindIndex(array1, isLargeNumber));
