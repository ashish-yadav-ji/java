// Data Types Summary

// There are two main types of data types in JavaScript:

// 1. Primitive Data Types
// These include:
// - String
// - Number
// - Boolean
// - Null
// - Undefined
// - Symbol
// - BigInt

// 2. Non-Primitive (Reference) Data Types
// These include:
// - Arrays
// - Objects
// - Functions

// Examples:

// Array
let heroes = ["Saktiman", "Thanos", "Thor", "Loki", "Dr. Strange", "Dr. Banner", "Iron Man"];
console.log(heroes);

// Object
let myObj = {
    name: "Ashish",
    age: 17,
    study: "Sanskriti University"
};
console.log(myObj);

// Function
let greet = function() {
    console.log("Hello everyone");
};
greet();

// Determine the type of variables
console.log(typeof greet); // Output: function

// Return Type of Variables in JavaScript
// 1) Primitive Data Types
// - Number => 'number'
// - String => 'string'
// - Boolean => 'boolean'
// - Null => 'object' (Note: This is a historical quirk in JavaScript)
// - Undefined => 'undefined'
// - Symbol => 'symbol'
// - BigInt => 'bigint'

// 2) Non-Primitive Data Types
// - Arrays => 'object'
// - Functions => 'function'
// - Objects => 'object'
