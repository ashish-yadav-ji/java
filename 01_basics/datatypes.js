"use strict"; // Enforce strict mode for better coding practices

// ================================
// JavaScript Data Types and Basics
// ================================

// Basic Operations
// ----------------
// JavaScript can perform basic operations such as addition.

console.log(3 + 3); // 6: Adding two numbers
console.log("Hitesh"); // Outputs the string "Hitesh"

// Declaring Variables
// -------------------
// Using `let` to declare variables in JavaScript. Variables can store different data types.

let name = "hitesh";    // String type
let age = 18;           // Number type
let isLoggedIn = false; // Boolean type
let state;              // Undefined type (no value assigned)

// Understanding JavaScript Data Types
// -----------------------------------
// JavaScript supports various data types. Here are some examples:

// Number Type
// ------------
// Numbers in JavaScript can represent integers or floating-point numbers.
console.log(typeof 42); // "number"

// BigInt Type
// -----------
// BigInt is used for very large integers.
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber); // "bigint"

// String Type
// -----------
// Strings are sequences of characters enclosed in quotes.
console.log(typeof name); // "string"

// Boolean Type
// ------------
// Booleans represent logical values: true or false.
console.log(typeof isLoggedIn); // "boolean"

// Null Type
// ---------
// Null is a special value representing "no value".
console.log(typeof null); // "object" (This is a quirk in JavaScript; null is actually a primitive type)

// Undefined Type
// --------------
// Undefined means a variable has been declared but not assigned a value.
console.log(typeof undefined); // "undefined"

// Symbol Type
// -----------
// Symbols are unique and immutable values used as object keys.
let sym = Symbol("unique");
console.log(typeof sym); // "symbol"

// Object Type
// -----------
// Objects are collections of key-value pairs.
let user = {
    name: "Hitesh",
    age: 18,
    isLoggedIn: false
};
console.log(typeof user); // "object"
