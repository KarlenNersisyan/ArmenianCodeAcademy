function symmetricDifference(setA, setB) {
  let difference = new Set(setA);
  for (let elem of setB) {
    if (difference.has(elem)) {
      difference.delete(elem);
    } else {
      difference.add(elem);
    }
  }
  return difference;
}

const a = new Set([1, 2, 3, 4]);
const b = new Set([2, 3]);
const c = new Set([3, 4]);

console.log(symmetricDifference(a, b)); // Set(2) { 1, 4 }
console.log(symmetricDifference(a, c)); // Set(2) { 1, 2 }
console.log(symmetricDifference(b, c)); // Set(2) { 2, 4 }
