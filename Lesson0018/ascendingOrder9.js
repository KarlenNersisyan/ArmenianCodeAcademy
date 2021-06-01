// /*
//     Given an array of numbers which is almost sorted in ascending order. Find the index
//     where sorting order is violated.
// */

const ascendingOrder = (arr, item = 1) => {
  if (item === arr.length) {
    return -1;
  }
  if (arr[item] < arr[item - 1]) {
    return item;
  }
  return ascendingOrder(arr, item + 1);
};

console.log(ascendingOrder([-9, -4, -4, 3, 12, 4, 5])); // 5
