/*
Write function that will group by some rule

groupBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': [4.2], '6': [6.1, 6.3] }
groupBy(["one", "two", "three"], (i) => i.length);
// => { '3': ['one', 'two'], '5': ['three'] }
*/

function groupBy(array, action) {
  return array.reduce(function (obj, elem) {
    let key = typeof action === "function" ? action(elem) : elem[action];
    if (!obj.hasOwnProperty(key)) {
      obj[key] = [];
    }
    obj[key].push(elem);
    return obj;
  }, {});
}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
console.log(groupBy(["one", "two", "three"], (i) => i.length));
