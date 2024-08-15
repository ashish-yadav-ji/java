// ================================
// JavaScript For...In Loop Examples
// ================================

// Iterating Over Object Properties
// ---------------------------
// Looping through each key in an object and logging the key and its value.

let myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by Apple'
};

for (const key in myObject) {
    if (myObject.hasOwnProperty(key)) {  // Ensure the property is not inherited
        console.log(`${key} shortcut is for ${myObject[key]}`);
    }
}

// Output:
// js shortcut is for JavaScript
// cpp shortcut is for C++
// rb shortcut is for Ruby
// swift shortcut is for Swift by Apple

// Iterating Over Array Indices
// ---------------------------
// Looping through the indices of an array and logging the elements.

let obj = ['js', 'ruby', 'python', 'cpp'];

for (const key in obj) {
    console.log(`Index ${key}: ${obj[key]}`);
}

// Output:
// Index 0: js
// Index 1: ruby
// Index 2: python
// Index 3: cpp

// Iterating Over Map (Incorrect Example)
// ---------------------------
// The `for...in` loop does not work with `Map` objects. Use `for...of` instead.

let map = new Map();
map.set('in', "India");
map.set('us', "America");
map.set('au', "Australia");  // Corrected key

console.log(map);

for (const key in map) {
    console.log(key, map[key]);  
}

// Output: (This will not produce the expected results)
// The `for...in` loop does not iterate over `Map` entries correctly. Instead, use `for...of`
// Correct approach with `for...of`:
// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }
