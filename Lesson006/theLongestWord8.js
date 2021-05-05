function findLongWord(str = "") {
    let arr = str.split(" ");
    let longWord = arr.sort(function (a, b) {
      return a.length - b.length;
    });
    console.log(longWord[longWord.length - 1]);
  }
  
  findLongWord("A revolution without dancing is a revolution not worth having.");