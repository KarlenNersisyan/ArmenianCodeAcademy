function checkPal(str) {
  let arrStr = str.split("");
  if (arrStr === arrStr.reverse()) {
    return true;
  } else {
    return false;
  }
}

word = "pap";
console.log(checkPal(word));
