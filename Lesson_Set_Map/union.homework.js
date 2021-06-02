function union(setA, setB) {
  let unionSet = new Set(setA);
  for (let elem of setB) {
    unionSet.add(elem);
  }
  return unionSet;
}

const a = new Set([1, 2, 3, 4]);
const b = new Set([2, 3]);
const c = new Set([3, 4]);

console.log(union(a, b)); // Set(4) { 1, 2, 3, 4 }
console.log(union(a, c)); // Set(4) { 1, 2, 3, 4 }
console.log(union(b, c)); // Set(3) { 2, 3, 4 }
