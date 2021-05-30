/* Write a fib(int) function which returns n-th fibonacci number. */

function fibonacci(n) {
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6)); // 1,1,2,3,5,8,13,21,34 ... -> 8
