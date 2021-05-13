/**
 * - Given an array, return the sum of numbers that are 18 or over.
``` javascript
const arr = [1, 22, 55, 166, 5, 306, 11, 205, 333, 95, 62, 10, 43]
// 22 + 55 + 166 + 306 + 205 + 333 + 95 + 62 + 43 = 1347
```
 */
const array = [1, 22, 55, 166, 5, 366, 11, 205, 333, 95, 62, 10, 43];

const getReduce = (array) => {
  return array.reduce((a, b) => (b >= 18 ? a + b : a), 0);
};

console.log(getReduce(array));
