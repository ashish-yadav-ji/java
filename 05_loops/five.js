// ================================
// JavaScript forEach Method Examples
// ================================

// Iterating Over an Array of Strings
// ---------------------------
// Using `forEach` with a traditional function expression to log each item in the array.

let coding = ["js", "ruby", "cpp", "python", "kotlin"];

// Using a traditional function expression
coding.forEach(function(item) {
    console.log(item);
});

// Using an arrow function
coding.forEach((val) => {
    console.log(val);
});

// Output:
// js
// ruby
// cpp
// python
// kotlin

// Function with Parameters in `forEach`
// ---------------------------
// Demonstrates using `forEach` with a function that has access to item, index, and array.

function printMe(item, index, arr) {
    console.log(`Item: ${item}, Index: ${index}, Array: ${arr}`);
}

coding.forEach(printMe);

// Output:
// Item: js, Index: 0, Array: js,ruby,cpp,python,kotlin
// Item: ruby, Index: 1, Array: js,ruby,cpp,python,kotlin
// Item: cpp, Index: 2, Array: js,ruby,cpp,python,kotlin
// Item: python, Index: 3, Array: js,ruby,cpp,python,kotlin
// Item: kotlin, Index: 4, Array: js,ruby,cpp,python,kotlin

// Iterating Over an Array of Objects
// ---------------------------
// Using `forEach` to log a specific property of each object in an array.

let mycode = [
    {
        languagename: "java",
        languagefile: "js",
    },
    {
        languagename: "python",
        languagefile: "py",
    },
    {
        languagename: "ruby",
        languagefile: "rb",
    },
    {
        languagename: "kotlin",
        languagefile: "kt",
    }
];

mycode.forEach((item) => {
    console.log(item.languagefile);
});

// Output:
// js
// py
// rb
// kt
