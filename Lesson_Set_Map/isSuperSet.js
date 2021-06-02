function isSuperset(set, subset) {
  for (let elem of subset) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}

const a = new Set([1, 2, 3, 4]);
const b = new Set([2, 3]);
const c = new Set([3, 4]);

console.log(isSuperset(a, b)); //  true
console.log(isSuperset(a, c)); //  true
console.log(isSuperset(b, c)); //  false
