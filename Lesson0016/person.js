function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.compareAge = function (anPerson) {
  if (this.age < anPerson.age) {
    return "Joel is older than me.";
  } else if (this.age > anPerson.age) {
    return "Samuel is younger than me.";
  } else {
    return "Lily is the same age as me.";
  }
};

const p1 = new Person("Samuel", 24);
const p2 = new Person("Joel", 36);
const p3 = new Person("Lily", 24);

console.log(p1.compareAge(p2));
console.log(p1.compareAge(p3));
console.log(p2.compareAge(p3));
