/*
    Convert the code using try...catch.
*/

/*
    function reverseString(s) {
    typeof s !== "string"
        ? console.log("s.split is not a function")
        : (s = s.split("").reverse().join(""));
    console.log(s);
    }
*/

function reverseString(s) {
  try {
    return s.split("").reverse().join("");
  } catch {
    console.log(s);
    throw error;
  }
}
console.log(reverseString(1234));
