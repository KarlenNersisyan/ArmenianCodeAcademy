function findNumbersSum(str) {
  return str.match(/-?\d+/g).reduce((a, b) => Number(a) + Number(b));
}
console.log(findNumbersSum('48-hgu7F-35'));
