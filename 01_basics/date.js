// ================================
// Working with Dates in JavaScript
// ================================

// Creating a New Date Object
// --------------------------
// `new Date()` creates a new Date object representing the current date and time.

let myDate = new Date();

// Displaying Date Information
// ---------------------------
// Various methods can be used to display different parts of the date.

// 1. Convert to Readable Date String
console.log(myDate.toDateString()); 
// Example Output: "Wed Aug 07 2024"
// Converts the date portion of the Date object to a human-readable format.

// 2. Convert to ISO String
console.log(myDate.toISOString());  
// Example Output: "2024-08-07T09:35:03.505Z"
// Returns the date and time in ISO 8601 format, which is a standard way of representing dates in a string.

// 3. Convert to Full String Representation
console.log(myDate.toString());  
// Example Output: "Wed Aug 07 2024 15:05:32 GMT+0530 (India Standard Time)"
// Displays the full date, time, and time zone information as a string.

// 4. Convert to Time String
console.log(myDate.toTimeString());  
// Example Output: "15:06:12 GMT+0530 (India Standard Time)"
// Returns the time portion of the Date object in a readable format including time zone.

// 5. Convert to Locale Date String
console.log(myDate.toLocaleDateString());  
// Example Output: "7/8/2024"
// Converts the date to a string based on the local date format (e.g., DD/MM/YYYY).

// Checking the Type of the Date Object
// ------------------------------------
// Date objects are of type "object" in JavaScript.

console.log(typeof myDate);  
// Output: "object"

// Creating a Specific Date
// ------------------------
// The Date constructor can be used to create a date with specific values. 
// The format is: new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
// Note: The monthIndex is zero-based, so 0 corresponds to January.

let newDate = new Date(2023, 0, 15); // January 15, 2023
console.log(newDate.toDateString()); 
// Example Output: "Sun Jan 15 2023"

// Getting Specific Date Components
// --------------------------------
// You can retrieve specific parts of the date, such as the month, day, year, etc.

console.log(myDate.getMonth() + 1);  
// Example Output: 8
// The `getMonth()` method returns the month index (0 for January, 11 for December), 
// so we add 1 to get the actual month number.


// ================================
// Additional Details on JavaScript Dates
// ================================

// 1. Epoch Time
// -------------
// JavaScript dates are based on a time value that is the number of milliseconds since 
// January 1, 1970, 00:00:00 UTC (known as the Unix Epoch).
console.log(myDate.getTime()); 
// Output: Number of milliseconds since the Unix Epoch

// 2. Setting Date Components
// --------------------------
// You can modify specific parts of a date using methods like `setFullYear`, `setMonth`, etc.
myDate.setFullYear(2025);
console.log(myDate.toDateString()); 
// Output: Modified date, year set to 2025

// 3. UTC Dates
// ------------
// JavaScript also provides methods for working with UTC dates. 
// These methods are similar to the local date methods but consider the time in UTC.
console.log(myDate.getUTCMonth() + 1);  
// Example Output: 8
// `getUTCMonth()` returns the month based on the UTC time.

console.log(myDate.toUTCString());  
// Example Output: "Wed, 07 Aug 2024 09:35:03 GMT"
// Converts the date to a string in UTC format.

// 4. Parsing Date Strings
// -----------------------
// You can create a date object from a date string using `Date.parse()` or by passing a date string to the `Date` constructor.
let parsedDate = new Date(Date.parse("2024-08-07T09:35:03.505Z"));
console.log(parsedDate.toDateString()); 
// Output: "Wed Aug 07 2024"

// 5. Date Arithmetic
// ------------------
// You can perform arithmetic operations on dates, such as adding or subtracting days.
let tomorrow = new Date();
tomorrow.setDate(myDate.getDate() + 1);
console.log(tomorrow.toDateString()); 
// Output: Date of the next day

