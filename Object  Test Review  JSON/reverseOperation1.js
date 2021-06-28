/**
 Write function that will do reverse operation for Object.entries

fromPairs([
["a", 1],
["b", 2],
]);
// => { 'a': 1, 'b': 2 }
 */

function fromPairs(arr) {
  let obj = arr.reduce((a, b) => {
    a[b[0]] = b[1];
    return a;
  }, {});
  return obj;
}
console.log(
  fromPairs([
    ["a", 1],
    ["b", 2],
  ])
);
