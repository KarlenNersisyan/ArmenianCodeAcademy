/*
    Given an array of numbers. Write a recursive function to find its minimal positive
    element. (if such element does not exist, return -1). 
*/

function minimalPositive(arr) {
  let posArr = arr.filter((item) => item >= 0);
  let [first, ...rest] = posArr;
  let min = first;
  if (posArr.length === 0) {
    return -1;
  }
  if (posArr.length === 1) {
    return posArr[0];
  } else {
    if (first <= rest[0]) {
      rest[0] = first;
    } else {
      min = rest[0];
    }
  }
  return minimalPositive(rest);
}
console.log(minimalPositive([1, -65, 96, 0, -5874]));

// 0
