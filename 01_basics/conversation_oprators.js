// =========================================
// Type Conversion and Basic Operations in JavaScript
// =========================================

// Example of Type Conversion
// --------------------------
// Converting a string to a number using the `Number()` function.

let score = "hitesh";
let valueInNumber = Number(score);
console.log(valueInNumber);  // NaN: "hitesh" cannot be converted to a number

// Example of Boolean Conversion
// -----------------------------
// Converting a non-empty string to a boolean using the `Boolean()` function.

let isLoggedIn = "hitesh";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true: Non-empty strings are truthy values

// Converting Numbers to Strings
// -----------------------------
// Using the `String()` function to convert a number to a string.

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber); // "33": The number 33 is converted to a string

// Arithmetic Operations
// ---------------------
// Basic arithmetic operations like addition, subtraction, multiplication, etc.

let value = 3;
let negValue = -value;
console.log(negValue); // -3: Negation of 3

console.log(2 + 2);  // 4: Addition
console.log(2 - 2);  // 0: Subtraction
console.log(2 * 2);  // 4: Multiplication
console.log(2 ** 3); // 8: Exponentiation (2 raised to the power of 3)
console.log(2 / 3);  // 0.666...: Division
console.log(2 % 3);  // 2: Remainder of division

// String Concatenation
// --------------------
// Combining strings and numbers using the `+` operator.

let str1 = "hello";
let str2 = " hitesh";
let str3 = str1 + str2;
console.log(str3); // "hello hitesh": Concatenation of two strings

console.log("1" + 2);      // "12": String "1" is concatenated with number 2
console.log(1 + "2");      // "12": Number 1 is concatenated with string "2"
console.log("1" + 2 + 2);  // "122": First "1" + 2 results in "12", then "12" + 2 results in "122"
console.log(1 + 2 + "2");  // "32": First 1 + 2 results in 3, then 3 + "2" results in "32"

// Operator Precedence
// -------------------
// Demonstrating how operator precedence affects the result.

console.log((3 + 4) * 5 % 3); // 2: Addition happens first, then multiplication, followed by modulus

// Unary Operators
// ---------------
// Demonstrating the use of unary operators like `+` and `++`.

console.log(+true);  // 1: Unary plus converts true to 1
console.log(+"");    // 0: Unary plus converts an empty string to 0

let gameCounter = 100;
++gameCounter;
console.log(gameCounter); // 101: Pre-increment increases the value by 1 before using it

// Compound Assignment
// -------------------
// Assigning values to multiple variables in a single line.

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
console.log(num1, num2, num3); // 4 4 4: All variables are assigned the value 4

