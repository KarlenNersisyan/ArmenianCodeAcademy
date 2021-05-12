const toMakeSplice = (arr, index, data = undefined) => {
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < index) {
      arr1.push(arr[i]);
    } else if (i > index) {
      arr2.push(arr[i]);
    }
  }
  if (data !== undefined) {
    arr1.push(data);
    return arr1.concat(arr2);
  }
  return arr1.concat(arr2);
};

const months = ["Jan", "March", "April", "May"];

console.log(toMakeSplice(months, 1, "Feb")); // [ 'Jan', 'Feb', 'April', 'May' ]
