/**
 * - Write a function which remove users with language equals to 'ru'.
``` javascript
const users = [
{
username: "Yuri Gagarin",
lang: "ru",
},
{
username: "Nil Armstrong",
lang: "ENG",
},
];
filterUsers(users); // [{ username: "Nil Armstrong, lang: "ENG" }]
```
 */

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];

function filterUsers(arr, str) {
  let lang = str.toLowerCase();
  let res = arr.filter((item) => item.lang.toLowerCase() !== lang);
  return res;
}

console.log(filterUsers(users, "ru"));
