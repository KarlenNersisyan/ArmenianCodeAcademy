const reduce = (arr, foo, initialElem) => {
  let acc = typeof initialElem === "undefined" ? arr[0] : initialElem;
  const startingIndex = typeof initialElem === "undefined" ? 1 : 0;

  for (let i = startingIndex; i < arr.length; i++) {
    const element = arr[i];
    acc = foo(acc, element, i, arr);
  }

  return acc;
};

console.log(reduce([1, -2, 3, 47, 5, 0], (a, b) => a * b));
console.log(
  reduce(
    [1, -2, 3, 47, 5, 0],
    (acc, el, idx) => {
      acc[idx] = el;
      return acc;
    },
    {}
  )
);
// -0
//{ '0': 1, '1': -2, '2': 3, '3': 47, '4': 5, '5': 0 }
