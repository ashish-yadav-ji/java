// ================================
// Functions in JavaScript
// ================================

// Simple Function Example
// ---------------------------
// Function that prints each letter of "Ashish".

function sayMyName() {
    console.log("a");
    console.log("s");
    console.log("h");
    console.log("i");
    console.log("s");
    console.log("h");
}
// Output:
// a
// s
// h
// i
// s
// h

// Function with Parameters and Return Value
// ---------------------------
// Function that adds two numbers and returns the result.

function addTwo(a, b) {
    return a + b;
}

const result = addTwo(2, 3);
console.log("result:", result);  
// Output: result: 5

// Function with Default Parameters
// ---------------------------
// Function that uses a default value if no argument is provided.

function loginUser(username = "ashish") {  // Default value: "ashish"
    if (!username) {
        console.log("Please enter your username");  // Message if no value is provided
    } else {
        return `${username} just logged in`;  // Returns a message with the provided username
    }
}

console.log(loginUser("sammu"));  
// Output: sammu just logged in

// Function with Rest Parameters
// ---------------------------
// Function that takes a variable number of arguments and returns them in an array.

function calculateCartPrice(...num1) {
    return num1;
}

console.log(calculateCartPrice(200, 400, 600));  
// Output: [200, 400, 600]

// Function with Object Parameter
// ---------------------------
// Function that accepts an object and logs its properties.

const user = {
    username: "ashish",
    price: 199,
};

function handleObject(anyObj) {
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);
}

handleObject(user);  
// Output: Username is ashish and price is 199

handleObject({
    username: "sam",
    price: 399
});
// Output: Username is sam and price is 399

// Function with Array Parameter
// ---------------------------
// Function that returns the second value from an array.

const myNewArray = [200, 300, 400, 500];

function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));  
// Output: 300

console.log(returnSecondValue([200, 400, 500]));  
// Output: 400
