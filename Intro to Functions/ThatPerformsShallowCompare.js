const shallowCompare = (obj1, obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  let equal = true;
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      equal = false;
      break;
    }
  }
  return equal;
};

console.log(shallowCompare({ a: "1", b: "2" }, { a: "1", b: "2" }));
let obj = {};
