// ================================
// Arrow Functions and `this` Context
// ================================

// Example with Method in Object
// ---------------------------
// Function as a method in an object. Uses `this` to access object properties.

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website`);  // Uses `this` to access the object's properties
        console.log(this);  // Logs the entire object
    }
}

user.welcomeMessage();  
// Output:
// hitesh, welcome to the website
// { username: 'hitesh', price: 999, welcomeMessage: [Function: welcomeMessage] }

// Updating the username
user.username = "sam";
user.welcomeMessage();  
// Output:
// sam, welcome to the website
// { username: 'sam', price: 999, welcomeMessage: [Function: welcomeMessage] }

// Example with `this` in Regular Function
// ---------------------------
// Function that logs `this.username`. `this` refers to the global object or `undefined` in strict mode.

function chai() {
    let username = "hitesh";
    console.log(this.username);  // Logs `undefined` if in strict mode, or `global` object property if not
}

chai();  
// Output: undefined (if in strict mode)
// or [global object property, which is usually `undefined`]

// Example with `this` in Function Expression
// ---------------------------
// Function expression that logs `this.username`. The `this` context is similar to the regular function.

const chaiFunc = function () {
    let username = "hitesh";
    console.log(this.username);  // Similar behavior to the regular function
}

chaiFunc();  
// Output: undefined (if in strict mode)
// or [global object property, which is usually `undefined`]

// Example with Arrow Function
// ---------------------------
// Arrow functions do not have their own `this`; they inherit `this` from their lexical scope.

const chaiArrow = () => {
    let username = "hitesh";
    console.log(this);  // Logs the `this` from the enclosing lexical scope (likely the global object or module scope)
}

chaiArrow();  
// Output: [global object or module scope]

// Arrow Function for Adding Two Numbers
// ---------------------------
// Arrow function with multiple lines.

const addTwo = (num1, num2) => {
    return num1 + num2;
}

// Arrow function with implicit return (single expression).

const addTwoImplicit = (num1, num2) => num1 + num2;

// Arrow function returning an object literal.
// Note: Parentheses are needed around the object literal to avoid ambiguity.

const addTwoObject = (num1, num2) => ({ username: "hitesh" });

console.log(addTwoObject(3, 4));  
// Output: { username: 'hitesh' }

// Array Method Example
// ---------------------------
// Example of using `forEach` with an array.

const myArray = [2, 5, 3, 7, 8];

myArray.forEach(item => console.log(item));  
// Output:
// 2
// 5
// 3
// 7
// 8
