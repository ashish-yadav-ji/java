// ================================
// Nested Functions and Function Declarations
// ================================

// Example of Nested Functions
// ---------------------------
// Demonstrating how nested functions can access variables from their parent function.

function one() {                        // Parent function
    const name = 'Ashish';              // Variable in parent function

    function two() {                    // Child function
        const website = "YouTube";      // Variable in child function
        console.log(name);              // Child function can access the parent's variable
    }
    // console.log(website);            // Parent function cannot access the child's variable
    two();                             // Calling the child function
}
// one();                              // Uncomment to run the parent function

// Example with Conditional Statements
// ---------------------------
// Demonstrating variable scope within nested conditional blocks.

if (true) {
    const username = "Ashish";          // Variable in outer block
    if (username === "Ashish") {
        const website = "YouTube";      // Variable in inner block
    }
    // console.log(website);            // Outer block cannot access inner block variable
}
// console.log(username);               // Outer block can access variable declared in its scope

// Function Declarations vs. Function Expressions
// ---------------------------
// Demonstrating the difference between function declarations and function expressions.

addOne(5);                            // Function call before function declaration
// Function declarations are hoisted, meaning they are available before their declaration.
function addOne(num) {
    return num + 1;
}

addTwo(5);                            // Function call before function expression
// Function expressions are not hoisted, so they must be declared before they are used.
const addTwo = function(num) {
    return num;
}
// Uncommenting the above line will result in an error because `addTwo` is used before its declaration.

