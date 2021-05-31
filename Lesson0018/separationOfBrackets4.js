/*

Add brackets between letters.
Given a string containing only English letters (uppercase and lowercase). Add opening and closing parentheses
according to the following pattern: "example" -> "(e (x (a (m) p) l) e)" (Added opening parentheses to the
middle, closing parentheses after the middle. In case the string length is even there must be 2 characters in the
brackets in the middle. ("card -> (c (ar) d" but not "(c (a () r) d)"). Example`

*/

function addBrackets(word, result = "", i = 0) {
  if (!word[i]) {
    return result;
  }
  let middlePart = Math.floor(word.length / 2);
  if (i < middlePart) {
    result += "(" + word[i];
  }
  if (i === middlePart) {
    result += word.length % 2 === 0 ? word[i] + ")" : "(" + word[i] + ")";
  }
  if (i > middlePart) {
    result += word[i] + ")";
  }

  i++;

  return addBrackets(word, result, i);
}

console.log(addBrackets("Karl")); // (K(ar)l)
