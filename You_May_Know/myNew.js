function User(name) {
  this.name = name;
  return "Attention!";
}

function fakeNew(constructor, ...args) {
  const _o = {};

  _o.__proto__ = constructor.prototype;
  const answer = constructor.call(_o, ...args);

  const isReferenceType =
    typeof answer === "object" || typeof answer === "function";
  const isNull = answer === null;
  if (isReferenceType && !isNull) {
    return answer;
  }
  return _o;
}
const user1 = new User("KARL");
const user2 = fakeNew(User, "KARL");

console.log(User());
console.log("ORIGINAL new::", user1);
console.log("MY new::", user2);
