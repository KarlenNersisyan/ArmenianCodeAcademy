function Person({ name, age, stomach = [] } = {}) {
  this.name = name;
  this.age = age;
  this.stomach = stomach;

  //   this.eat = function (...food) {
  //     console.log(food);
  //     this.stomach = [...this.stomach, ...food];
  //   };
}

Person.prototype.eat = function (...food) {
  if (this.stomach.length < 10) {
    this.stomach = [...this.stomach, ...food];
  } else {
    throw new Error("Too Much Food!");
  }
};

Person.prototype.poop = function () {
  this.stomach = [];
};

Person.prototype.toString = function () {
  return `Person : ${this.name} - ${this.age}`;
};

const rawUser = { name: "John", age: "44" };

const u1 = new Person(rawUser);
const u2 = new Person();

u1.eat("pizza", "fries");
u1.eat("pasta");

console.log(u1);
console.log(u2);

function Baby(name, age, favoriteToys = []) {
  //   console.log("PRE::", this);
  Person.call(this, { name, age });
  //   console.log("POST::", this);
  this.favoriteToys = favoriteToys;
}

Baby.prototype = Object.create(Person.prototype);

const b1 = new Baby("Tom", 1);
console.log(b1);

b1.eat("milk");
console.log(b1.toString());
