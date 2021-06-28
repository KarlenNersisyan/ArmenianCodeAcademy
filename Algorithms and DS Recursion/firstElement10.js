/*
    Given an array. Write a recursive function that removes the first element and returns the
    given array. (without using arr.shift())
*/

function firstElement(arr, i = 0) {
  if (i > 0) {
    return arr;
  }
  return firstElement(arr.slice(1), (i += 1));
}
console.log(firstElement([6, 78, "n", 0, 1])); // [78, "n", 0, 1]
