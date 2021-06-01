// /*
//     Given an array of numbers which is almost sorted in ascending order. Find the index
//     where sorting order is violated.
// */

const ascendingOrder = (arr, i = 1) => {
  if (i === arr.length) {
    return -1;
  }
  if (arr[i] < arr[i - 1]) {
    return i;
  }
  return ascendingOrder(arr, i + 1);
};

console.log(ascendingOrder([1, 2, 3, 4, 5, 2, 8])); // 5
