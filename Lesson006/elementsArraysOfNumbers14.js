const negativeProduct = (arr) => {
  if (typeof arr[0] === "number") {
    return "Invalid Argument";
  }
  let res = [];
  for (let a of arr) {
    let an = a.filter((a) => a < 0);
    an.length ? res.push(Math.max(...an)) : null;
  }
  return res.length ? res.reduce((a, b) => a * b) : "No negatives";
};

console.log(
  negativeProduct([
    [2, -9, -3, 0],
    [1, 2],
    [-4, -11, 0],
  ])
);
