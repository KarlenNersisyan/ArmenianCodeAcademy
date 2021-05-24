Function.prototype.myBind = function (context, ...argsArr) {
  const thisHolder = this;

  return function (...restArgs) {
    const key = "tempFunc";
    context[key] = thisHolder;
    let result = context[key](...argsArr, ...restArgs);
    delete context[key];
    return result;
  };
};

function changeInfo(fullName, age) {
  this.fullName = fullName;
  this.age = age;
  return this.fullName;
}

const user = {
  fullName: "Karl",
  age: 22,
};

const bound = changeInfo.myBind(user, "Han Solo");
console.log(bound(38)); // "Han Solo"

console.log(user);
