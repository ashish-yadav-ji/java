// ================================
// Singleton and Object Literals in JavaScript
// ================================

// Defining an Object Literal
// ---------------------------
// Creating a user object with various properties and methods.

const jsUser = {
    name: "Ashish",
    "full Name": "Ashish Yadav",
    age: 17,
    location: "Mathura",
    email: "ashish@gmail.com",
    isLoggedIn: false,
    lostLoginDays: ['Monday', 'Saturday']
};

console.log(jsUser);
// Display the entire object.

console.log(jsUser.age);
// Access a specific property using dot notation.

console.log(jsUser["full Name"]);
// Access a property with spaces using bracket notation.

// Updating Object Properties
// ---------------------------
// Demonstrating how to update and freeze object properties.

jsUser.email = 'ashishchatgpt.com';
// Update the email property.

Object.freeze(jsUser);
// Prevents further modifications to the object.

jsUser.email = "ashishmicro.com"; 
// Attempting to update the email property after freezing. This will not work.

console.log(jsUser.email);
// Output: 'ashishchatgpt.com'

// Adding Methods to Objects
// ---------------------------
// Adding and invoking methods on the object.

jsUser.greeting = function() {
    console.log(`Hello JS user, ${this.name}`);
};

jsUser.greetingtwo = function() {
    console.log("Hello JS user");
};

jsUser.greeting();
// Output: Hello JS user, Ashish

jsUser.greetingtwo();
// Output: Hello JS user

// Merging Objects
// ---------------------------
// Combining two objects into one.

const tinderUser = {
    name: "Ashish",
    id: "123",
    isLoggedIn: false
};

let regularUser = {
    name: "Ram",
    email: {
        firstEmail: "ram@.com",
        secondEmail: "ram@gmail.com"
    }
};

// Combining two objects using spread syntax
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

const obj3 = {...obj1, ...obj2};
// Output: {1: "a", 2: "b", 3: "c", 4: "d"}

console.log(obj3);
// Display the merged object.

// Object Utility Methods
// ---------------------------
// Demonstrating useful methods for objects.

console.log(tinderUser);
// Display the tinderUser object.

console.log(Object.keys(tinderUser));
// Output: ['name', 'id', 'isLoggedIn']
// Get the keys of the object.

console.log(Object.values(tinderUser));
// Output: ['Ashish', '123', false]
// Get the values of the object.

console.log(Object.entries(tinderUser));
// Output: [['name', 'Ashish'], ['id', '123'], ['isLoggedIn', false]]
// Get the key-value pairs of the object.

console.log(tinderUser.hasOwnProperty("isLoggedIn"));
// Output: true
// Check if the specified property exists in the object.

// Destructuring Objects
// ---------------------------
// Extracting specific properties from an object.

const course = {
    name: "JS Hindi",
    fees: 999,
    courseInstructor: "Ashish Yadav"
};

const { courseInstructor: instructor } = course;
// Destructure courseInstructor from the course object and rename it to instructor.

console.log(instructor);
// Output: 'Ashish Yadav'
