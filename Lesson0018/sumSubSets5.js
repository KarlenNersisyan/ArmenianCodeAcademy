/*
    Print sums of all subsets of a given set

    Given an array of integers, print sums of all subsets in it. Output sums can be printed in any order.
    Hint: There are total 2^n subsets. For every element, we consider two choices.
    
*/

let arr = [1, 3, 2];
let n = arr.length;
let total = 2 ** n;

function sumSubSets(arr, n) {
  for (let i = 0; i < total; i++) {
    let sum = 0;

    for (let j = 0; j < n; j++) {
      if ((i & (2 ** j)) != 0) {
        sum += arr[j];
      }
    }

    console.log(sum);
  }
}

sumSubSets(arr, n);

// 0 1 3 4 2 3 5 6
