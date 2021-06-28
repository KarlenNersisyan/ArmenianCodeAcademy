const highest_Adj = (array) => {
  let highest = -Infinity;
  for (let i = 0; i < array.length - 1; i++) {
    highest = highest < array[i] * array[i + 1] ? array[i] * array[i + 1] : highest;
  }

  return highest;
};

console.log(highest_Adj([-2, 1, 62, 9]));
