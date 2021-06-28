function separateNumbers(array) {
  let odd = [];
  let even = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      even.push(array[i]);
    } else {
      odd.push(array[i]);
    }
  }

  return [even, odd];
}

console.log(separateNumbers([45, 630, 1, 4]));
