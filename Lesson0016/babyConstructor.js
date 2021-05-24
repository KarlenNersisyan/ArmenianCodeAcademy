function Person({ name, age }) {
  this.name = name;
  this.age = age;
}

function Baby(name, age, favoriteToys = []) {
  Person.call(this, { name, age });
  this.favoriteToys = favoriteToys;
}

Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function () {
  return `Playing with ${this.favoriteToys}`;
};

const b1 = new Baby("Tom", 1, "car");

console.log(b1);
console.log(b1.play());
