const checkFilter = (array, foo) => {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    if (foo(array[i], i, array)) {
      res.push(array[i]);
    }
  }
  return res;
};

let element = [4, 2, 3, 6, 8];

let newArray = checkFilter(element, (item) => item > 5);

console.log("Result ::", newArray);
