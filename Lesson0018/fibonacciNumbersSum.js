function fibonacciNumbersSum(n) {
  let fib = [];
  if (n <= 0) return 0;

  fib[0] = 0;
  fib[1] = 1;

  let sum = fib[0] + fib[1];

  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
    sum += fib[i];
  }
  return sum;
}

console.log(fibonacciNumbersSum(5));

// 1 + 1 + 2 + 3 + 5 = 12
