// ==================================
// Comparison Operators in JavaScript
// ==================================

// Basic Comparisons
// -----------------
// These comparisons involve simple numerical values.

console.log(2 > 1);  // true: 2 is greater than 1
console.log(2 >= 1); // true: 2 is greater than or equal to 1
console.log(2 < 1);  // false: 2 is not less than 1
console.log(2 == 1); // false: 2 is not equal to 1
console.log(2 != 1); // true: 2 is not equal to 1

// Comparisons with Strings
// ------------------------
// When comparing strings with numbers, JavaScript converts the string to a number.

console.log("2" > 1);  // true: "2" is converted to 2, which is greater than 1
console.log("02" > 1); // true: "02" is converted to 2, which is greater than 1

// Special Cases: null vs undefined
// --------------------------------
// Comparisons involving `null` and `undefined` can produce unexpected results.

console.log(null > 0);    // false: null is not greater than 0
console.log(null == 0);   // false: null is not equal to 0
console.log(null >= 0);   // true: null is considered equal to or greater than 0

console.log(undefined == 0); // false: undefined is not equal to 0
console.log(undefined > 0);  // false: undefined is not greater than 0
console.log(undefined < 0);  // false: undefined is not less than 0

// Strict Equality vs Loose Equality
// ---------------------------------
// The strict equality operator (===) checks both value and type, unlike the loose equality operator (==).

console.log("2" === 2); // false: "2" (string) is not equal to 2 (number)
