Function.prototype.myApply = function (context, argsArr) {
  const key = "tempFunc";
  context[key] = this;
  let result = context[key](...argsArr);
  delete context[key];
  return result;
};

function foo(a) {
  this.a = a;
  return this;
}

console.log(foo.myApply({}, [1]));
console.log(foo.apply({}, [1]));
