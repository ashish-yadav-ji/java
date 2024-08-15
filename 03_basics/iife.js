// ================================
// Immediately Invoked Function Expressions (IIFE)
// ================================

// Named IIFE
// ---------------------------
// Function that logs a fixed message.

(function logDbManager() {
    console.log("DB MANAGER");
})();
// Output: DB MANAGER

// Unnamed IIFE with Parameter
// ---------------------------
// Function that logs a message with a provided name.

(function(name) {
    console.log(`DB MANAGER ${name}`);
})('ashish');
// Output: DB MANAGER ashish
