function difference(setA, setB) {
  let diffSet = new Set(setA);
  for (let elem of setB) {
    diffSet.delete(elem);
  }
  return diffSet;
}

const a = new Set([1, 2, 3, 4]);
const b = new Set([2, 3]);
const c = new Set([3, 4]);

console.log(difference(a, b)); // Set(2) { 1, 4 }
console.log(difference(a, c)); // Set(2) { 1, 2 }
console.log(difference(b, c)); // Set(1) { 2 }
