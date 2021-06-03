class MySet {
  constructor(array = []) {
    this.result = array.reduce((acc, item) => {
      if (acc.indexOf(item) === -1) {
        acc.push(item);
      }
      return acc;
    }, []);
  }

  MyAdd(value) {
    if (this.result.indexOf(value) === -1) {
      this.result.push(value);
    }
    return this;
  }

  MyDelete(value1, boolean = false) {
    this.result.forEach((elem, i) => {
      if (value1 === elem) {
        this.result.splice(i, 1);
        boolean = true;
      }
    });

    return boolean;
  }

  MyHas(value2) {
    if (this.result.some((item3) => item3 === value2)) {
      return true;
    }

    return false;
  }

  MyClear() {
    this.result = [];
    return this;
  }

  MySize() {
    return this.result.length;
  }
}

let fakeSet = new MySet([33, 33, -7, 0]);
let original = new Set([33, 33, -7, 0]);

console.log("ORIGINAL Set --->", original.add(11).add(33).add(-5));
console.log("My Set --->", fakeSet.MyAdd(11).MyAdd(33).MyAdd(-5));
/*
    Set(5) { 33, -7, 0, 11, -5 }
    My Set ---> MySet { result: [ 33, -7, 0, 11, -5 ] }
*/

// console.log("My Set --->", fakeSet.MyDelete(-7));
// console.log("ORIGINAL Set --->", original.delete(-7));
/*
    My Set ---> true
    ORIGINAL Set ---> true
*/

// console.log("My Set --->", fakeSet.MyHas(-8));
// console.log("ORIGINAL Set --->", original.has(-8));
/*
    My Set ---> false
    ORIGINAL Set ---> false
*/

// console.log("My Set --->", fakeSet.MyClear());

// original.clear();
// console.log("ORIGINAL Set --->", original);
/*
    My Set ---> MySet { result: [] }
    ORIGINAL Set ---> Set(0) {}
*/

// console.log("ORIGINAL Set --->", original.size);
// console.log("My Set --->", fakeSet.MySize());
/*
ORIGINAL Set ---> 3
My Set ---> 3
*/
