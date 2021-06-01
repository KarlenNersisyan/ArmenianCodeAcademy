/*

Print all combinations of factors (Ways to factorize)

    Write a program to print all the combinations of factors of given number n.

*/

const combinationsFactors = (n, first = 2, currentItem = 1, arr = []) => {
  if (first > n || currentItem > n) {
    return;
  }
  for (let i = first; i <= n / 2; i++) {
    if (currentItem * i > n) {
      break;
    }
    if (n % i === 0) {
      arr.push(i);
      combinationsFactors(n, i, i * currentItem, arr);
      arr.pop();
    }
  }
  if (currentItem === n) {
    console.log(arr.join(", "));
    return;
  }
};
combinationsFactors(3);
