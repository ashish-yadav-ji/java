// ================================
// Array Operations in JavaScript
// ================================

// Declaring and Manipulating Arrays
// ---------------------------
// Demonstrating various methods to modify arrays.

const myArray = [0, 1, 2, 3, 4, 5];
// `const` is used because we do not intend to reassign the array, though we can still modify its content.

myArray.push(7);
// Adds the value 7 to the end of the array.

myArray.pop();
// Removes the last value from the array.

myArray.unshift(9);
// Adds the value 9 to the beginning of the array.

myArray.shift();
// Removes the first value from the array.

console.log(myArray.includes(5)); 
// Checks if the value 5 exists in the array. Outputs: true or false

console.log(myArray.indexOf(5)); 
// Finds the index of the value 5 in the array. Outputs the index or -1 if not found

let newArray = myArray.join();
// Converts the array values to a string, separated by commas.

console.log(newArray); 
// Displays the string representation of the array.

console.log(typeof newArray); 
// Outputs: 'string' (Type of newArray)

// Slice & Splice Methods
// ----------------------------
// Demonstrating the difference between `slice` and `splice` methods.

let heroes = ['Saktiman', 'Thor', 'Iron Man', 'Spider Man', 'Hulk']; 
// Original array

console.log('A', heroes); 
// Outputs the original array: A [ 'Saktiman', 'Thor', 'Iron Man', 'Spider Man', 'Hulk' ]

let heroes1 = heroes.slice(1, 3);
// Slices the array from index 1 to 3 (not inclusive of end index).

console.log(heroes1); 
// Outputs the sliced portion: [ 'Thor', 'Iron Man' ]

console.log('B', heroes); 
// Displays the original array, unchanged: B [ 'Saktiman', 'Thor', 'Iron Man', 'Spider Man', 'Hulk' ]

let heroes2 = heroes.splice(1, 3);
// Splices the array from index 1, removing 3 items. Modifies the original array.

console.log(heroes2); 
// Outputs the spliced portion: [ 'Thor', 'Iron Man', 'Spider Man' ]

console.log('C', heroes); 
// Displays the modified original array: C [ 'Saktiman', 'Hulk' ]

// ================================
// Summary
// ================================
// - `push` and `pop` are used to add/remove elements from the end of an array.
// - `unshift` and `shift` are used to add/remove elements from the beginning of an array.
// - `includes` checks for the existence of a value, and `indexOf` finds the index of a value.
// - `join` converts an array to a string.
// - `slice` creates a new array from a portion of the original, while `splice` modifies the original array by adding/removing elements.
