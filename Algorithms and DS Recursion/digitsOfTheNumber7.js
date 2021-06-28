/* Write a recursive function to determine whether all digits of the number are odd or not. */

function digitsOfNumber(number) {
  if (number % 2 === 0) {
    return false;
  }
  if (number / 10 < 1) {
    return true;
  }
  return digitsOfNumber(Math.floor(number / 10));
}

console.log(digitsOfNumber(425791)); // false
