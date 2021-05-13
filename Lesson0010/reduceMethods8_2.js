/**
 * - Write a function which calculates average age of users.
``` javascript
const users = [
{
username: "Yuri Gagarin",
lang: "ru",
age: 56,
},
{
username: "Nil Armstrong",
lang: "ENG",
age: 54,
},
];
getAverageAge(users); // 55
```
 */
const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
  },
];

const getAverage = (arr) => {
  return Math.floor(arr.reduce((a, b) => a.age + b.age) / 2);
};

console.log(getAverage(users));
