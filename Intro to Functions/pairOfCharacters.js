function evenNumbers(num1, num2) {
  let arr = [];
  let evenArr = [];
  for (let i = num1; i <= num2; i++) {
    i = i.toString();
    arr.push(i);
  }
  let isEven = false;
  for (let j = 0; j < arr.length; j++) {
    for (let s = 0; s < arr[j].length; s++) {
      if (arr[j][s] % 2 === 0) {
        isEven = true;
        continue;
      } else {
        isEven = false;
        break;
      }
    }
    if (isEven === true) {
      evenArr.push(arr[j]);
    }
  }
  if (evenArr.length === 0) {
    evenArr.push("Such numbers does not exist.");
  }
  evenArr = evenArr.join(" , ");
  return evenArr;
}
console.log(evenNumbers(33, 89));
