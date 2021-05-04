function separateNumbers(array) {
  let odd = [];
  let even = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      odd.push(array[i]);
    } else {
      even.push(array[i]);
    }
  }

  return [odd, even];
}

console.log(separateNumbers([45, 630, 1, 4]));
