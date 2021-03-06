function objectKeysValuesChanger(obj) {
  let reverseObj = {};
  for (let objKeys in obj) {
    let reverseObjKey = obj[objKeys];
    if (reverseObjKey in reverseObj) {
      reverseObj[reverseObjKey] = [...reverseObj[reverseObjKey], objKeys];
    } else {
      reverseObj[reverseObjKey] = objKeys;
    }
  }

  return reverseObj;
}

console.log(objectKeysValuesChanger({ a: "1", b: "2", c: "2" }));
