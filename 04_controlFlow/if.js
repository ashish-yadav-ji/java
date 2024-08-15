// ================================
// Conditional Statements and Variable Scope
// ================================

// Example of Simple Conditional Statements
// ---------------------------
// Checking temperature and printing messages based on its value.

const temperature = 41;

if (temperature === 40) {
    console.log("Temperature is exactly 40");
} else {
    console.log("Temperature is not 40");
}

// Example of Variable Scope
// ---------------------------
// Demonstrating how variables are scoped within conditional blocks.

const score = 200;

if (score > 100) {
    let power = "fly";  // `power` is scoped to this block
    console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`);

// Example of Chained Conditional Statements
// ---------------------------
// Checking balance and printing messages based on its range.

const balance = 1000;

if (balance < 500) {
    console.log("Balance is greater than 500");
    console.log("Balance check complete");
} else if (balance < 500) {
    console.log("Balance is less than 500");
} else if (balance < 750) {
    console.log("Balance is less than 750 but greater than or equal to 500");
} else if (balance < 900) {
    console.log("Balance is less than 900 but greater than or equal to 750");
} else {
    console.log("Balance is greater than or equal to 1000");
}

// Example of Boolean Logic
// ---------------------------
// Checking various conditions using logical operators.

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard ) {
    console.log("Allow to buy course");
} else {
    console.log("Conditions not met for course purchase");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
} else {
    console.log("User not logged in");
}

// merge both condition like this 

if ((userLoggedIn && debitCard) && (loggedInFromGoogle || loggedInFromEmail)) {
    console.log("Allow to buy course and User logged in");
} else if (userLoggedIn && debitCard) {
    console.log("Allow to buy course, but user not logged in");
} else if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in, but conditions not met for course purchase");
} else {
    console.log("Conditions not met for course purchase and User not logged in");
}
