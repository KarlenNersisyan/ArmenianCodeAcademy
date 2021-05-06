const quadNum = (arr) => {
  let res = [];
  for (let num of arr) {
    if (num % 2 === 0 && Math.sqrt(num) % 1 === 0) {
      res.push(num);
    }
  }
  return res;
};

console.log(quadNum([1, 2, 3, 4, 48, 6, 7, 16, 9, 36]));
