function toMakeFind(arr, foo) {
  for (let index = 0; index < arr.length; index++) {
    if (foo(arr[index], index, arr)) {
      return arr[index];
    }
  }
}
console.log(toMakeFind([5, 12, 8, 130, 44], (elem) => elem > 7)); // 12
