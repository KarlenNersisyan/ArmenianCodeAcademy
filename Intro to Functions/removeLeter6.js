function removeLetter(str = "", str2 = "") {
  return str.split(`${str2}`).join("");
}
console.log(removeLetter("This is some text", "is"));
