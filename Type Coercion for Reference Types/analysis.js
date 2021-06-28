let a, b, c, d, e, f;

console.log(null + undefined); // NaN

console.log(null + true); // 0 + 1 = 1

console.log(null + false); // 0 + 0 = 0

console.log(null + 3); // 0 + 3 = 3

console.log(null + NaN); // NaN

console.log(null + "hello"); // nullhello

console.log(null + b + c + d + e + f); // NaN

console.log(undefined + true); // NaN

console.log(undefined + false); // NaN

console.log(undefined + 5); // NaN

console.log(undefined + NaN); // NaN

console.log(undefined + "hello"); // undefinedhello

console.log(undefined + a + b + c + d + e + f); // NaN

console.log(true + false); // 1 + 0 = 1

console.log(true + 2); // 1 + 2 = 3

console.log(true + NaN); // NaN

console.log(true + "hello"); // truehello

console.log(true + a + b + c + d + e + f); // NaN

console.log(false + 4); // 0 + 4 = 4

console.log(false + NaN); // NaN

console.log(false + "hello"); // falsehello

console.log(false + a + b + c + d + e + f); // NaN

console.log(5 + 3); // 5 + 3 = 8

console.log(5 + NaN); // NuN

console.log(5 + "hello"); // 5hello

console.log(5 + a + b + c + d + e + f); // NaN

console.log("hello" + NaN); // helloNaN

console.log("hello" + a + b + c + d + e + f); // helloundefinedundefinedundefinedundefinedundefinedundefined
