function elementsLength(arr) {
  let array = [];
  for (let char of arr) {
    if (char.length > 3) {
      array.push(char);
    }
  }
  return array;
}

console.log(elementsLength(["opel", "tesla", "kia", "mercedes", "volkswagen"]));
