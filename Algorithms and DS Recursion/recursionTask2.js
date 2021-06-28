/*Write a recursive function to find the factorial of a given natural N. */

function factorial(n) {
  if (n < 0) {
    return "There is no negative factorial!";
  }
  if (n === 0) {
    return 1;
  }
  return n != 1 ? n * factorial(n - 1) : 1;
}

console.log(factorial(7)); // 5040
