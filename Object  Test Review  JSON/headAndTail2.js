/*
Write functions that willreturn head and tail of Array

getHead([1, 2, 3]);
// => [1]
getTail([1, 2, 3]);
// => [2, 3]
 */

let getHead = (arr) => [arr[0]];
let getTail = (arr) => {
  let [, , ...result] = [arr[0], ...arr];
  return result;
};

console.log(getHead([1, 2, 3]));
console.log(getTail([1, 2, 3]));
