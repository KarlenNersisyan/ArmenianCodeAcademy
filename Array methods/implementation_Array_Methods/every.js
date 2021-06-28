function toMakeEvery(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
}

const isBelowThreshold = (currentValue) => currentValue < 100;
const array1 = [1, 30, 0, 29, 10, -159];

console.log(toMakeEvery(array1, isBelowThreshold)); // true
