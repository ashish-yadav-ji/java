// ================================
// Working with Numbers in JavaScript
// ================================

// Basic Number Operations
// -----------------------
// Defining and working with simple numbers and Number objects.

const score = 400; 
// A basic number declaration
// console.log(score); // Uncomment to display the value of score

const balance = new Number(100); 
// Creating a Number object
// console.log(balance); // Uncomment to display the balance object

// String Representation of Numbers
// --------------------------------
// `toString()` method converts a number to its string representation.

console.log(balance.toString().length); 
// Output: 3 (Length of the string "100")

// Formatting Numbers with Fixed Decimal Places
// --------------------------------------------
// `toFixed()` method formats a number to a fixed number of decimal places.

console.log(balance.toFixed(2));  
// Output: "100.00" (Formats the number with two decimal places)

// Precision Formatting
// --------------------
// `toPrecision()` method formats a number to a specified precision (total number of digits).

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(4)); 
// Output: "123.9" (Formats the number to four significant digits)

// Locale-Sensitive Formatting
// ---------------------------
// `toLocaleString()` method formats a number according to the locale, adding commas for readability.

const hundreds = 10000000000000;
console.log(hundreds.toLocaleString('en-IN')); 
// Output: "1,00,00,00,00,00,000" (Indian-style grouping of digits)

// ================================
// Working with Math in JavaScript
// ================================

// JavaScript Math Object
// ----------------------
// The Math object provides various mathematical functions and constants.

// console.log(Math); // Uncomment to explore the Math object and its properties

// Common Math Methods
// -------------------
// Absolute Value
console.log(Math.abs(-4)); 
// Output: 4 (Absolute value of -4)

// Rounding Numbers
console.log(Math.round(4.6)); 
// Output: 5 (Rounds to the nearest integer)

// Ceiling and Floor Functions
console.log(Math.ceil(4.2));  
// Output: 5 (Rounds up to the nearest integer)

console.log(Math.floor(4.9)); 
// Output: 4 (Rounds down to the nearest integer)

// Finding Minimum and Maximum
console.log(Math.min(4, 3, 6, 8)); 
// Output: 3 (Finds the minimum value)

console.log(Math.max(4, 3, 6, 8)); 
// Output: 8 (Finds the maximum value)

// Generating Random Numbers
// -------------------------
// `Math.random()` generates a random decimal between 0 (inclusive) and 1 (exclusive).

console.log(Math.random());  
// Example Output: 0.8245 (Random decimal number)

// Random Numbers within a Range
// -----------------------------
// Multiplying `Math.random()` by 10 and adding 1 shifts the range to 1-10.
console.log((Math.random() * 10) + 1);  
// Example Output: 5.4367

// Generating a Random 4-Digit Number
// ----------------------------------
// Generate a random number between 1000 and 9999.

console.log(Math.floor(Math.random() * 9000) + 1000); 
// Example Output: 4827 (A random 4-digit number)

// Generating Random Numbers between a Range
// -----------------------------------------
// To generate a random integer between a minimum and maximum value.

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); 
// Example Output: 17 (Random integer between 10 and 20)
