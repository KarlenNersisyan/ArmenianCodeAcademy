function toCountNumbers(arr, sym) {
  switch (sym) {
    case "+":
      console.log(arr.reduce((a, b) => a + b));
      break;
    case "-":
      console.log(arr.reduce((a, b) => a - b));
      break;
    case "*":
      console.log(arr.reduce((a, b) => a * b));
      break;
    case "/":
      console.log(arr.reduce((a, b) => a / b));
      break;
    default:
      console.log("Enter the array & sign");
  }
}
toCountNumbers([1, -5, 3, 56, 54], "*");
