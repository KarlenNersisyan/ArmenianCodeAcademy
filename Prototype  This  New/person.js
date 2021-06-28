function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.compareAge = function (anPerson) {
  if (this.age < anPerson.age) {
    return `${p2.name} is older than me.`;
  } else if (this.age > anPerson.age) {
    return `${p1.name} is younger than me.`;
  } else {
    return `${p3.name} is the same age as me.`;
  }
};

const p1 = new Person("Karl", 24);
const p2 = new Person("John", 36);
const p3 = new Person("Lily", 24);

console.log(p1.compareAge(p2));
console.log(p2.compareAge(p1));
console.log(p1.compareAge(p3));
