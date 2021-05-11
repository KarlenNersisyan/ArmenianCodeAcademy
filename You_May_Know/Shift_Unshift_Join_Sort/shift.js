function shift(arr) {
    let temp = arr[0];
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i + 1];
    }
    arr.length--;
    return temp;
  }
  console.log(shift([5, 4, 985, -1]));