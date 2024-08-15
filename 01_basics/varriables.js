// ================================
// var,let,const Information in JavaScript
// ================================

// Declaring Account Variables
// ---------------------------
// Using const, let, and var to declare variables with different scopes and mutability.

const accountId = 144553; 
// `const` is used for variables that should not be reassigned. Attempting to reassign will cause an error.

let accountEmail = "hitesh@google.com";
// `let` is used for variables that may be reassigned later.

var accountPassword = "12345";
// `var` is function-scoped and should generally be avoided in modern JavaScript due to potential issues with block scope.

accountCity = "Jaipur"; 
// Global variable without declaration (not recommended), typically avoided by declaring with let/const.

let accountState; 
// `let` can also declare variables without initialization. It will be `undefined` until assigned.

// Updating Account Information
// ----------------------------
// Demonstrating the mutability of variables declared with let and var.

accountEmail = "hc@hc.com";
accountPassword = "21212121";
accountCity = "Bengaluru";

// Trying to reassign a `const` variable will result in an error.
// accountId = 2; // Uncommenting this line will throw an error since `accountId` is a constant.

console.log(accountId); 
// Output: 144553 (Displays the constant account ID)

// Avoiding var
// ------------
// It's generally preferred not to use `var` due to issues with block scope and functional scope.

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
// Outputs the current state of all variables in a table format for easier visualization.
/*
Example Output:
┌───────────────┬──────────────┐
│ (index)       │     Values   │
├───────────────┼──────────────┤
│    (0)        │     144553   │
│    (1)        │ "hc@hc.com"  │
│    (2)        │  "21212121"  │
│    (3)        │ "Bengaluru"  │
│    (4)        │  undefined   │
└───────────────┴──────────────┘
*/

// ================================
// Summary
// ================================
// - `const` is ideal for values that should not change after their initial assignment.
// - `let` allows reassignment and is block-scoped, making it safer for variable declaration compared to `var`.
// - `var` has functional scope and can lead to unintended consequences due to its scope behavior, so it's best to avoid it in modern code.
