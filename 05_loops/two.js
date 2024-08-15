// ================================
// JavaScript While and Do-While Loops
// ================================

// Simple While Loop
// ---------------------------
// Looping while the index is less than or equal to 10.

let index = 0;
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index++;
}

// Output:
// Value of index is 0
// Value of index is 1
// ...
// Value of index is 10

// While Loop Iterating Over an Array
// ---------------------------
// Looping through an array and logging each element.

let myArray = ['flash', 'batman', 'superman'];
let arr = 0;

while (arr < myArray.length) {
    console.log(`Value of array element is ${myArray[arr]}`);
    arr++;
}

// Output:
// Value of array element is flash
// Value of array element is batman
// Value of array element is superman

// Do-While Loop
// ---------------------------
// Loop that executes at least once, then continues while the condition is true.

let score = 1;
do {
    console.log(`Score is: ${score}`);
    score++;
} while (score <= 10);

// Output:
// Score is: 1
// Score is: 2
// ...
// Score is: 10


// ================================
// Additional JavaScript While and Do-While Loop Examples
// ================================

// While Loop with User Input Simulation
// ---------------------------
// Simulate a scenario where you keep asking for input until a correct value is given.

let userInput = "";
const correctInput = "JavaScript";

while (userInput !== correctInput) {
    userInput = "JavaScript";  // Simulate getting user input
    console.log(`User input: ${userInput}`);
}

// Output:
// User input: JavaScript

// While Loop for Counting Down
// ---------------------------
// Loop that counts down from 10 to 1.

let countdown = 10;

while (countdown > 0) {
    console.log(`Countdown at: ${countdown}`);
    countdown--;
}

// Output:
// Countdown at: 10
// Countdown at: 9
// ...
// Countdown at: 1

// While Loop with Complex Condition
// ---------------------------
// Loop that continues as long as either of two conditions is true.

let condition1 = true;
let condition2 = false;
let attempts = 0;

while (condition1 || condition2) {
    console.log(`Attempt number: ${attempts}`);
    attempts++;

    // Simulate changing conditions
    if (attempts === 3) {
        condition1 = false;
    }
    if (attempts === 5) {
        condition2 = false;
    }
}

// Output:
// Attempt number: 0
// Attempt number: 1
// Attempt number: 2
// Attempt number: 3
// Attempt number: 4

// Do-While Loop with Random Number Generation
// ---------------------------
// Generate random numbers until you get a specific number.

let randomNumber;
do {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(`Generated number: ${randomNumber}`);
} while (randomNumber !== 7);

// Output:
// Generated number: (will vary until 7 is generated)

// Do-While Loop with Early Exit
// ---------------------------
// A loop that exits early based on a condition.

let Score = 1;
let maxScore = 10;

do {
    console.log(`Current score: ${Score}`);
    if (Score >= 5) {
        console.log("Reached the threshold, exiting early.");
        break;  // Exit loop when score reaches 5 or more
    }
    Score++;
} while (Score <= maxScore);


// Output:
// Current score: 1
// Current score: 2
// ...
// Current score: 5
// Reached the threshold, exiting early.

