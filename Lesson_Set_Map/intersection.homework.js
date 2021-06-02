function intersection(set1, set2) {
  let result = new Set();

  for (let elem of set2) {
    if (set1.has(elem)) {
      result.add(elem);
    }
  }
  return result;
}

const a = new Set([1, 2, 3, 4]);
const b = new Set([2, 3]);
const c = new Set([3, 4]);

console.log(intersection(a, c)); //  Set {3, 4}
console.log(intersection(a, b)); //  Set {2, 3}
console.log(intersection(b, c)); //  Set {3}
