// ================================
// Conditional Statements and Operators
// ================================

// Example of Checking Falsy Values
// ---------------------------
// Demonstrates how different values are interpreted in a conditional statement.

const userEmail = [];

if (userEmail) {
    console.log("Got user email");  // This will be executed because an empty array is truthy.
} else {
    console.log("Don't have user email");
}

// Explanation: In JavaScript, falsy values include:
// - false
// - 0
// - -0
// - BigInt(0n)
// - ""
// - null
// - undefined
// - NaN

// Truthy values include:
// - true
// - Non-zero numbers (e.g., 1, -1, 3.14)
// - Non-empty strings (e.g., "0", "false", "hello")
// - Arrays (e.g., [], [1, 2, 3])
// - Objects (e.g., {}, {key: 'value'})
// - Functions (e.g., function() {})

// Example of Checking Array Length
// ---------------------------
// Demonstrates how to check if an array is empty.

if (userEmail.length === 0) {
    console.log("Array is empty");  // This will be executed because `userEmail` is an empty array.
}

// Example of Checking Object Keys
// ---------------------------
// Demonstrates how to check if an object is empty.

const emptyObj = {};


if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");  // This will be executed because `emptyObj` has no keys.
}

// Example of Nullish Coalescing Operator (??)
// ---------------------------
// Demonstrates the use of the nullish coalescing operator to provide default values.

let val1;
// val1 = 5 ?? 10;       // This would be 5
// val1 = null ?? 10;    // This would be 10
// val1 = undefined ?? 15; // This would be 15
val1 = null ?? 10 ?? 20; // This will be 10, as the first non-null/undefined value

console.log(val1); // Output: 10

// Example of Ternary Operator
// ---------------------------
// Demonstrates the use of the ternary operator for conditional statements.

const iceTeaPrice = 100;
iceTeaPrice <= 80 
    ? console.log("Less than or equal to 80") 
    : console.log("More than 80");  // This will be executed because 100 is more than 80
