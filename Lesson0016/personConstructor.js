function Person({ name, age, stomach = [] } = {}) {
  this.name = name;
  this.age = age;
  this.stomach = stomach;
}

Person.prototype.someFood = function (...food) {
  if (this.stomach.length < 10) {
    this.stomach = [...this.stomach, ...food];
  } else {
    throw new Error("Too Much Food!");
  }
};

Person.prototype.poop = function () {
  return (this.stomach = []);
};

Person.prototype.toString = function () {
  return `Person : ${this.name} -> ${this.age}`;
};

const rawUser = { name: "John", age: "44" };

const u1 = new Person(rawUser);

u1.someFood("pizza", "kebab", "fries");
u1.someFood("pasta");

console.log(u1);
console.log(u1.poop());
console.log(u1.toString());
