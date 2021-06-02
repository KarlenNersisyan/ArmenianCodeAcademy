/*
        Given a number. Write a function that calculates its sum of the digits and if that sum has
    more than 1 digit find the sum of digits of that number. Repeat that process if needed
    and return the result.
*/

function sumOfTheDigits(num) {
  let digit = num % 10;
  res = Math.floor(num / 10);
  if (res + digit <= 9) {
    return res + digit;
  }
  return sumOfTheDigits(res + digit);
}

console.log(sumOfTheDigits(999999999999));

// 9 + 9 + 9 + 9 + 9 + 9 + 9 + 9 + 9 + 9 + 9 + 9 = 108
// 1 + 0 + 8 = 9
