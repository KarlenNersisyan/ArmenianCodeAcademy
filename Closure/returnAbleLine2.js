const redundant = (str) => {
  return () => str;
};

const f1 = redundant("pear");
console.log(f1());
