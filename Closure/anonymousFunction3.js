function add_suffix(suffix) {
  return function (str) {
    return str + suffix;
  };
}

let suffix = add_suffix("_Academy");
console.log(suffix("Armenian_Code"));
