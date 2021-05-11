const words = ["hello", "world", "js", "python"];
const checkMap = function (arr, func) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    array.push(func(arr[i]));
  }
  return array;
};
let newArr = checkMap(words, (elem) => elem + "Hi");

console.log(words);
console.log("Res::", newArr);
