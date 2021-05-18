/*
Complete the reverseString function, it has one parameter s. You must perform the following actions:
. Try to reverse string s using the split,reverse, and join methods.
. If an exception is thrown, catch it and print the contents of the exception's message on a new line.
. Print s on new line. If no exception was thrown, then this should be the reversed string, if an exception
was thrown, this should be the original string.

Input Format
Locked stub code in the editor reads variable s from stdin and passes it to the function.

Output Format
You must write two print statements using console.log():
. Print the contents of a caught exception's message on a new line. If no exception was thrown, this line
should not be printed.
. Print s on a new line. If no exception was thrown, then this should be the reversed string, if an exception
was thrown, this should be the original string.

Simple Input 0
    Number(1234)

Simple Input 0
    s.split is not a function
*/

function reverseString(number) {
  try {
    return number.split("").reverse().join("");
  } catch (error) {
    console.log(number);
    throw error;
  }
}

console.log(reverseString(100));
