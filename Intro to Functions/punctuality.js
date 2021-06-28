function findWord(str, str2) {
  let arr = str.split("");
  let a = arr.sort();
  for (let i = 0; i < str2.length; i++) {
    let b = str2[i].split("");
    b.sort();
    if (a.join("") === b.join("")) {
      console.log(str2[i]);
    }
  }
  return "";
}
console.log(findWord("Armennai", ["Armenian", "Code", "nainemrA", "April"]));
