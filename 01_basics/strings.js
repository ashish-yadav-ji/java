// ================================
// Working with Strings in JavaScript
// ================================

// Basic String Operations
// -----------------------
// Defining and working with simple strings.

const name = "hitesh";
const repoCount = 50;

// String Concatenation
// --------------------
// Concatenating strings and variables using the + operator or template literals.

console.log(name + repoCount + " Value");
// Output: "hitesh50 Value" (Concatenates the strings and variables)

console.log(`Hello, my name is ${name} and my repo count is ${repoCount}.`);
// Output: "Hello, my name is hitesh and my repo count is 50."
// Template literals allow for embedding variables directly within the string.

// Working with String Objects
// ---------------------------
// String objects provide additional methods and properties that regular string literals don't.

const gameName = new String('hitesh-hc-com');

// Accessing Characters
// ---------------------
// You can access individual characters in a string using bracket notation.

console.log(gameName[0]); 
// Output: "h" (First character of the string)

// Exploring String Prototype
// --------------------------
// `__proto__` reveals the prototype of the string object, which contains methods and properties.

console.log(gameName.__proto__); 
// Output: String prototype object with all string methods

// Common String Methods
// ---------------------

// Length of the String
console.log(gameName.length); 
// Output: 13 (Total number of characters in the string)

// Convert to Uppercase
console.log(gameName.toUpperCase()); 
// Output: "HITESH-HC-COM" (Converts the entire string to uppercase)

// Character at Specific Index
console.log(gameName.charAt(2)); 
// Output: "t" (Character at index 2)

// Index of a Character
console.log(gameName.indexOf('t')); 
// Output: 2 (First occurrence of 't' in the string)

// Substring Extraction
// --------------------
// `substring(start, end)` extracts characters from start to end index (end not included).

const newString = gameName.substring(0, 4);
console.log(newString); 
// Output: "hite" (Extracts characters from index 0 to 3)

// Slicing a String
// ----------------
// `slice(start, end)` is similar to `substring`, but it also accepts negative indices.

const anotherString = gameName.slice(-8, 4);
console.log(anotherString); 
// Example Output: "" (This slice doesn't return expected results due to the conflicting range)

// Trimming Whitespace
// -------------------
// `trim()` removes whitespace from both ends of a string.

const newStringOne = "   hitesh    ";
console.log(newStringOne); 
// Output: "   hitesh    " (Original string with spaces)

console.log(newStringOne.trim()); 
// Output: "hitesh" (String with leading and trailing spaces removed)

// Working with URLs
// -----------------
// Replacing Parts of a String
// ---------------------------
// `replace(oldValue, newValue)` replaces a specified value with another value in a string.

const url = "https://ashish.com/ashish%20yadav";
console.log(url.replace('%20', '-')); 
// Output: "https://ashish.com/ashish-yadav" (Replaces '%20' with '-')

// Checking for Substring Presence
// -------------------------------
// `includes(value)` checks if a string contains a specified substring.

console.log(url.includes('sundar')); 
// Output: false (Checks if 'sundar' is in the URL, which it is not)

// Splitting a String
// ------------------
// `split(separator)` splits a string into an array of substrings based on the separator.

console.log(gameName.split('-')); 
// Output: ["hitesh", "hc", "com"] (Splits the string into an array using '-' as the separator)

