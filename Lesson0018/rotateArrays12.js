/*
        Given an array and a number N. Write a recursive function that rotates an array N
    places to the left. (Hint: to add element to the beginning use arr.unshift())
*/

function rotateArrays(arr, i) {
  let arr1 = [];
  let arr2 = [];

  if (!i) {
    return arr;
  }

  if (i < 0) {
    arr1 = arr.slice(arr.length + i);
    arr2 = arr.slice(0, arr.length + i);
  } else if (i >= 0) {
    arr1 = arr.slice(i);
    arr2 = arr.slice(0, i);
  }

  return rotateArrays([...arr1, ...arr2]);
}

console.log(
  rotateArrays(
    ["Karl", "Aca", "Armenia", "New York", "Singapore", "Yerevan"],
    -2
  )
);

//  [ 'Singapore', 'Yerevan', 'Karl', 'Aca', 'Armenia', 'New York' ]
