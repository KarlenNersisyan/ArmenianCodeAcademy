function join(arr, sym) {
  let res = "";
  for (let i = 0; i < arr.length - 1; i++) {
    res += arr[i] + sym;
  }
  res += arr.length - 1;

  return res;
}
console.log(join([1, 8, 2], "-"));
