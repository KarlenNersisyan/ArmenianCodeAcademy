# Native Prototypes
* Read [following article](https://javascript.plainenglish.io/proto-vs-prototype-in-js-140b9b9c8cd5)

* Create a draw for following code

```
const arr = [1, 2, 3];
const human = {
isHuman: true,
};
const str = "";
const user = {
name: "Vrezh",
__proto__: human,
};
const car = {
hasEngine: true,
};
const mercedes = {
name: "mercedes",
__proto__: car,
};
const bmw = Object.create(null);
const emptyObj = {};
function fn() {
console.log("hello, world!");
}
const emptyWithoutProto = Object.create(null);
const num = 12;
const isAuth = false;
```