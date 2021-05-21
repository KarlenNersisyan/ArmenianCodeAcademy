// Create a draw for following code

// ---1
const arr = [1, 2, 3];

arr.__proto__ === Array.prototype; // true
Array.prototype.__proto__ === Object.prototype; // true
Object.prototype.__proto__; // null

// ---2
const human = {
  isHuman: true,
};

human.__proto__ === Object.prototype; // true
Object.prototype.__proto__; // null

// ---3
const str = "";

str.__proto__ === String.prototype; // true
String.__proto__ === Function.prototype; // true
Function.prototype.__proto__ === Object.prototype; // true
Object.prototype.__proto__; // null

// ---4
const human = {
  isHuman: true,
};

const user = {
  name: "Karl",
  __proto__: human,
};

user.__proto__ === human; // true
human.__proto__ === Object.prototype; // true
Object.prototype.__proto__; // null

// ---5
const car = {
  hasEngine: true,
};

car.__proto__ === Object.prototype; // true
Object.prototype.__proto__; // null

// ---6
const car = {
  hasEngine: true,
};

const mercedes = {
  name: "mercedes",
  __proto__: car,
};

mercedes.__proto__ === car; // true
car.__proto__ === Object.prototype; // true
Object.prototype.__proto__; // null

// ---7
const bmw = Object.create(null); // No __proto__,No properties,

// ---8
const emptyObj = {};

emptyObj.__proto__ === Object.prototype; // true
Object.prototype.__proto__; // null

// ---9
function fn() {
  console.log("hello, world!");
}

fn.__proto__ === Function.prototype; // true
Function.prototype.__proto__ === Object.prototype; // true
Object.prototype.__proto__; // null

// ---10
const emptyWithoutProto = Object.create(null); // No __proto__,No properties,

// ---11
const num = 12;

num.__proto__ === Number.prototype; // true
Number.prototype.__proto__ === Object.prototype; // true
Object.prototype.__proto__; // null

// ---12
const isAuth = false;

isAuth.__proto__ === Boolean.prototype; // true
Boolean.prototype.__proto__ === Object.prototype; // true
Object.prototype.__proto__; // null
