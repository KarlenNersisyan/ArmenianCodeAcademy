/*
Write an object with getter/setterfield name.

const obj = {
name: [], // ['name', length][]
set name,
get name,
}
console.log(obj.name)
obj.name = 'Armenian, code';
console.log(obj.name) // [['Armenian', 8], ['code', 4]]
*/

const obj = {
  _name: [], // ['name', length][]
  set name(value = "") {
    const array = [];
    value.split(",").forEach((el) => array.push(el.trim()));
    obj._name = array.reduce((acc, elem) => {
      acc[elem] = elem.length;
      return acc;
    }, {});
  },
  get name() {
    return Object.entries(obj._name);
  },
};

obj.name = "Armenian, code";
console.log(obj.name);
