// ================================
// Array Operations in JavaScript
// ================================

// Declaring Arrays
// ---------------------------
// Creating arrays for Marvel and DC heroes.

let marvelHeros = ['Thor', 'Ironman', 'Spiderman'];
let dcHeros = ['Superman', 'Flash', 'Batman'];

// Concatenating Arrays
// ---------------------------
// Merging Marvel and DC heroes into a single array.

let allHeros = marvelHeros.concat(dcHeros);
// `concat` returns a new array that is a combination of the two arrays.
console.log(allHeros); 
// Output: [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

// Spread Operator
// ---------------------------
// Using the spread operator to achieve the same result as `concat`.

let newHeros = [...marvelHeros, ...dcHeros];
// `...` spreads the elements of each array into a new array.
console.log(newHeros); 
// Output: [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

// Flat Method
// ---------------------------
// Flattening a nested array into a single array.

let number = [1, 2, 3, [3, 4], 5, [6, 7, [7, 8]]];
let flattenedArray = number.flat(Infinity);
// `flat(Infinity)` flattens the array to any depth.
console.log(flattenedArray); 
// Output: [1, 2, 3, 3, 4, 5, 6, 7, 7, 8]

// Array.from and Array.isArray
// ---------------------------
// Converting a string into an array and checking if a value is an array.

console.log(Array.isArray("Ashish"));  
// Checks if the provided value is an array. Output: false

console.log(Array.from("Ashish"));  
// Converts a string into an array of its characters. Output: [ 'A', 's', 'h', 'i', 's', 'h' ]

// Array.of
// ---------------------------
// Creating an array from a set of elements.

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); 
// `Array.of` creates a new array with the provided elements. Output: [ 100, 200, 300 ]

// ================================
// Summary
// ================================
// - `concat` and the spread operator (`...`) merge arrays into a new array.
// - `flat` flattens nested arrays into a single array.
// - `Array.from` converts iterable objects like strings into arrays.
// - `Array.of` creates a new array from a set of values.
