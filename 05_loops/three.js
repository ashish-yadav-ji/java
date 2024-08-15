// ================================
// JavaScript For...Of Loop Examples
// ================================

// Iterating Over an Array
// ---------------------------
// Looping through each number in an array and logging it.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const num of arr) {
    console.log(num);
}

// Output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

// Iterating Over a String
// ---------------------------
// Looping through each character in a string and logging it.

let greetings = "hello world";

for (const greet of greetings) {
    console.log(`Each character is: ${greet}`);
}

// Output:
// Each character is: h
// Each character is: e
// Each character is: l
// Each character is: l
// Each character is: o
// Each character is:  
// Each character is: w
// Each character is: o
// Each character is: r
// Each character is: l
// Each character is: d

// Iterating Over a Map
// ---------------------------
// Looping through each key-value pair in a Map and logging them.

let map = new Map();
map.set('in', "India");
map.set('us', "America");
map.set('au', "Australia");  // Corrected the key for Australia

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

// Output:
// in :- India
// us :- America
// au :- Australia

// Iterating Over an Object (Incorrect Example)
// ---------------------------
// The `for...of` loop does not work directly with objects. Use `for...in` for objects.

const myObj = {
    game1: 'nfs',
    game2: 'spiderman'
};

// This will throw an error because `for...of` does not work with objects directly
// for (const my of myObj) {
//     console.log(myObj[my]);
// }

// Correct approach using `for...in`
for (const key in myObj) {
    if (myObj.hasOwnProperty(key)) {
        console.log(`${key} :- ${myObj[key]}`);
    }
}

// Output:
// game1 :- nfs
// game2 :- spiderman
