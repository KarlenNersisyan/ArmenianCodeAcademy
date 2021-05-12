let numbers = [33, -2, -45, 47, 0];

function iterateAndAct(array, action) {
  for (let i = 0; i < array.length; i++) {
    const elem = array[i];
    action(elem, i, array);
  }
}

let res = 0;

for (let i = 0; i < numbers.length; i++) {
  const elem = numbers[i];
  if (elem > 0) {
    res += elem;
  }
}
console.log("SUM:", res);
