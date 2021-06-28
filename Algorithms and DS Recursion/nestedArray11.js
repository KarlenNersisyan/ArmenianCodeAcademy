/*
    Given an array of nested arrays. Write a recursive function that flattens it. (Hint create
    function that con cats arrays).
*/

function nestedArray(arr, res = []) {
  if (arr.length === 0) {
    return res;
  }
  let head = arr[0];
  let rest = arr.slice(1);
  if (Array.isArray(head)) {
    return nestedArray(head.concat(rest), res);
  }
  res.push(head);
  return nestedArray(rest, res);
}
console.log(nestedArray([])); // []
console.log(nestedArray([5])); // [ 5 ]
console.log(nestedArray([1, [3, 4, [1, 2]], 10])); // [ 1, 3, 4, 1, 2, 10 ]
console.log(nestedArray([14, [1, [[[3, []]], 1], 0]])); // [ 14, 1, 3, 1, 0 ]
