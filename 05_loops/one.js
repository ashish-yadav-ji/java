// ================================
// JavaScript For Loops
// ================================

// Simple For Loop
// ---------------------------
// Looping from 0 to 10 and checking for a specific value.

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element === 5) {
        console.log("5 is the best number");
        // Break or continue can be used here if needed
    }
    console.log(element);
}

// Output:
// 0
// 1
// 2
// 3
// 4
// 5 is the best number
// 5
// 6
// 7
// 8
// 9
// 10

// Note: The following line will throw an error because `element` is not defined outside the block.
// console.log(element);

// Nested For Loops
// ---------------------------
// Demonstrates nested loops by multiplying values from 1 to 10.

for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`Inner loop value ${j} and inner loop ${i}`);
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// Output: (The output will display the multiplication table for numbers 1 to 10)

// Iterating Over an Array
// ---------------------------
// Looping through an array and logging each element.

let myArray = ["flash", "batman", "superman"];
console.log(`Array length: ${myArray.length}`);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

// Output:
// Array length: 3
// flash
// batman
// superman

// Break and Continue in Loops
// ---------------------------
// Demonstrates the use of break and continue statements.

// Break Example
// ---------------------------
// This loop will stop when the value 5 is detected.

for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log(`Detected 5`);
        break;  // Stops the loop when index is 5
    }
    console.log(`Value of index is ${index}`);
}

// Output:
// Value of index is 1
// Value of index is 2
// Value of index is 3
// Value of index is 4
// Detected 5

// Continue Example
// ---------------------------
// This loop will skip the iteration when the value 5 is detected but continue with the loop.

for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log(`Detected 5`);
        continue;  // Skips the rest of the loop body for this iteration and continues with the next iteration
    }
    console.log(`Value of index is ${index}`);
}

// Output:
// Value of index is 1
// Value of index is 2
// Value of index is 3
// Value of index is 4
// Detected 5
// Value of index is 6
// ...
// Value of index is 20
