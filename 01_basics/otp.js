// ================================
// OTP (One-Time Password) Generator
// ================================

// Function to Generate OTPs
// -------------------------
// This function generates an array of 5 random 4-digit OTPs.

function generateOTPs() {
    let otps = []; // Initialize an empty array to store OTPs

    // Generate 5 OTPs
    for (let i = 0; i < 5; i++) {
        // Generate a random 4-digit number between 1000 and 9999
        let otp = Math.floor(Math.random() * 9000 + 1000);
        otps.push(otp); // Add the generated OTP to the array
    }

    return otps; // Return the array of OTPs
}

// Displaying the Generated OTPs
// -----------------------------
// This line generates 5 OTPs, joins them into a string, and prints them.

console.log("Your OTPs are: " + generateOTPs().join(", "));
// Example Output: "Your OTPs are: 4827, 6291, 1034, 8492, 7623"

// ================================
// Working with Undefined Variables
// ================================

// Undefined Variable Example
// --------------------------
// If a variable is declared but not assigned a value, it is `undefined`.

let email; // Declare a variable without initializing it
console.log('Your email is: ' + email); 
// Output: "Your email is: undefined"
// This demonstrates that the `email` variable is undefined as it has not been assigned a value.
