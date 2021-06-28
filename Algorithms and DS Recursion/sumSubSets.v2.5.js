/*
    Print sums of all subsets of a given set

    Given an array of integers, print sums of all subsets in it. Output sums can be printed in any order.
    Hint: There are total 2^n subsets. For every element, we consider two choices.
    
*/
let arr = [7, 3, 13];
let n = arr.length;

function sumSubSets(arr, index, last, sum) {
  if (index > last) {
    console.log(sum);
    return;
  }

  sumSubSets(arr, index + 1, last, sum + arr[index]);

  sumSubSets(arr, index + 1, last, sum);
}

sumSubSets(arr, 0, n - 1, 0);

// 23 10 20 7 16 3 13 0
