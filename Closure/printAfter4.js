const printAfter = (fn) => {
  console.log("Hello Word");
  fn();
};

const print = () => console.log("Karl Ner");

printAfter(print);
