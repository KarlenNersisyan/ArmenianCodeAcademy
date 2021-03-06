/*- Write a function which returns array of usernames.
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
getUserNames(users); // ['Yuri Gagarin', 'Nil Armstrong']
```*/

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
function getUserNames(users) {
  return users.map((item) => {
    return item.username;
  });
}
console.log(getUserNames(users));
