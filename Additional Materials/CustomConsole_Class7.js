class CustomConsole {
  constructor(head) {
    this.head = head;
    this.historyArr = [];
  }

  log(...args) {
    let argsStr = "";

    if (args.length === 0) {
      return "";
    }

    if (args.length === 1) {
      argsStr = `${this.head}: ${JSON.stringify(...args)}`;
    } else {
      const tail = args.slice(1);

      tail.forEach((elem, index, array) => {
        if (index === array.length - 1) {
          argsStr += JSON.stringify(elem);
        } else {
          argsStr += JSON.stringify(elem) + ", ";
        }
      });

      argsStr = `${args[0]} ${argsStr}`;
    }

    this.historyArr.push(argsStr);
    return argsStr;
  }

  history(start, end) {
    if (this.historyArr.length === 0) {
      return `""`;
    }

    return this.historyArr.slice(start, end);
  }

  clearHistory() {
    this.historyArr = [];
    return true;
  }
}
const myConsole = new CustomConsole("Regular");
const fancyConsole = new CustomConsole("Fancy");

console.log(myConsole.log([0, 1, 2, 3])); // Regular: [0,1,2,3]
console.log(fancyConsole.log({ a: 1, b: 2 })); // Fancy: {"a":1,"b":2}
console.log(myConsole.log("ok : ", 1, 2, 3)); // ➞ ok : 1, 2, 3
console.log(myConsole.clearHistory()); // true
console.log(myConsole.history()); // ""
