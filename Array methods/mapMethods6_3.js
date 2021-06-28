/** - Write a function which parses string integers. If it's not possible to
parse, then add null

``` javascript
arseInteger(["1", "2", "34"]); // [1, 2, 34];
parseInteger(["1", "px", "2323"]); // [1, null, 2323];
```*/

const parseInteger = (arr) => {
  return arr.map((elem) => (!Number.isNaN(+elem) ? +elem : null));
};

console.log(parseInteger(["1", "px", "2323"])); // [1, null, 2323];
