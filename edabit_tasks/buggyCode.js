/*
Mub_as_hir created an infinite loop! Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.
*/

function printArray(number) {
  let newArray = [];

  for (let i = 1; i <= number; i++) {
    newArray.push(i);
  }

  return newArray;
}

console.log(printArray(5)); // [ 1, 2, 3, 4, 5 ]
