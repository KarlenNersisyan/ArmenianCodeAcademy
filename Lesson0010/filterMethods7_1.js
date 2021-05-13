/**
 - Given an array, return a new array that only includes the numbers.
``` javascript
const arr = [1, 2, 'a', true, {}, undefined, 55, false, 'hi', null,
166, NaN]
// [1, 2, 55, 166]
```
 */
const array = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN];
function toDoFilter(arr) {
  for (let i = 0; i < arr.length; i++) {
    return array.filter((item) => typeof item === "number" && Boolean(item));
  }
}
console.log(toDoFilter(array));
