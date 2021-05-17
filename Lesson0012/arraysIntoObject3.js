/*
Write function that will zip arrays into object

zipObject(["a", "b", "c"], [1, 2]);
// => { 'a': 1, 'b': 2, c: null }
*/

const zipObject = (array1, array2) => {
  let res = 0;
  
  let obj = array1.reduce((i, j) => {
    if (array2[res] === undefined) {
      array2[res] = null;
    }
    i[j] = array2[res++];

    return i;
  }, {});
  return obj;
};

console.log(zipObject(["a", "b", "c"], [1, 2]));
