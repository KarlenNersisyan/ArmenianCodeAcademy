const toMakeSlice = (arr, start, end) => {
  if (end === undefined) {
    end = arr.length;
  }
  let res = [];
  for (let i = start; i < end; i++) {
    res.push(arr[i]);
  }
  return res;
};

let animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(toMakeSlice(animals, 2)); // [ 'camel', 'duck', 'elephant' ]
console.log(toMakeSlice(animals, 1, 3)); // [ 'bison', 'camel' ]
