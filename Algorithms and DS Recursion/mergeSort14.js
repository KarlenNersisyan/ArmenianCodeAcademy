/*
        Implement merge sort
*/

const mergeSort = (arr) => {
  const merge = (left, right) => {
    let arr = [];
    while (left.length && right.length) {
      if (left[0] > right[0]) {
        arr.push(left.shift());
      } else {
        arr.push(right.shift());
      }
    }
    return [...arr, ...left, ...right];
  };

  const half = Math.floor(arr.length / 2);
  if (arr.length < 2) {
    return arr;
  }
  const left = arr.splice(0, half);
  return merge(mergeSort(left), mergeSort(arr));
};

console.log(mergeSort([10, 50, 7, 3, 99, 0, 3]));

/*
    [
        99, 50, 10, 7,
        3,  3,  0
    ]
*/
