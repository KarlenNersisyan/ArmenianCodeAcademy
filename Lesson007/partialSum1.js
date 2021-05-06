function findSum(num1) {
  function findSum1(num2) {
    return num1 + num2;
  }
  return findSum1;
}

const numbers = findSum(10);

console.log(numbers(10));
