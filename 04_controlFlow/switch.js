// ================================
// Switch Statement Example
// ================================

// Using switch to handle different month cases

const month = "march";

switch (month) {
    case "jan":
        console.log("January");  // Executes if month === "jan"
        break;
    case "feb":
        console.log("February"); // Executes if month === "feb"
        break;
    case "march":
        console.log("March");    // Executes if month === "march"
        break;
    case "april":
        console.log("April");    // Executes if month === "april"
        break;
    default:
        console.log("Default case match");  // Executes if none of the above cases match
        break;
}

