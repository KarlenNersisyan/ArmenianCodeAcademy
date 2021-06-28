const values = [null, true, {}, { name: "Karl" }, "", NaN, 0];

function filteringArray(array) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (values[i]) {
      arr.push(values[i]);
    }
  }

  return arr;
}
console.log(filteringArray(values));
