function compareTheNumber(str, num) {
  let bigNumbers = [];
  for (const number of str) {
    if (number > num) {
      bigNumbers.push(number);
    }
  }
  return bigNumbers.length ? bigNumbers : "Such values do not exist.";
}
console.log(compareTheNumber([10, 16, -5, 15], 16));
