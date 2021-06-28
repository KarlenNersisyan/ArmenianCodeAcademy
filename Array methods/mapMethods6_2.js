/** 
 - Write a function which returns array of lengths of user names

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
getUsernameLengths(users); // [12, 13]
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
function getUsernameLengths(arr) {
  let newArr = [];
  arr.map((elem) => newArr.push(elem.username.length));
  return newArr;
}

console.log(getUsernameLengths(users));
