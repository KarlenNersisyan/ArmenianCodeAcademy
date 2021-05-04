function checkNumbers(str = "") {
  let num = str.split("");
  if (num[0] === "+") {
    num.shift();
  }

  for (let i = 0; i < num.length; i++) {
    if (num[i] === " ") {
      num.splice(i, 1);
    }
  }

  for (let i = 0; i < num.length; i++) {
    if (isNaN(num[i]) || num.length !== 10) {
      return "Does not meet the requirements!";
    } else {
      return num.join("");
    }
  }
}
console.log(checkNumbers("456 5584745"));
