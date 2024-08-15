// ================================
// JavaScript Array Reduce Method
// ================================

// Example 1: Summing Numbers in an Array
// ---------------------------
// The reduce method is used to accumulate the values in an array.
// It takes a callback function with an accumulator and the current value, and optionally an initial value.

const myNums = [1, 2, 3];

// Using the reduce method to sum the numbers
const myTotal = myNums.reduce(function(acc, curr_val) {
    return acc + curr_val; // Accumulate the sum
}, 0); // Initial value of accumulator is 0

console.log("Total sum of numbers in myNums:", myTotal);

// Output:
// Total sum of numbers in myNums: 6

// Example 2: Calculating Total Price in a Shopping Cart
// ---------------------------
// Suppose you have a shopping cart with items and their prices, and you want to calculate the total price.

let shoppingCart = [
    { itemName: "JavaScript", price: 2999 },
    { itemName: "Python", price: 2499 },
    { itemName: "Java", price: 1999 },
    { itemName: "C++", price: 3499 },
    { itemName: "Ruby", price: 2299 },
    { itemName: "Go", price: 2799 },
    { itemName: "Swift", price: 3199 },
    { itemName: "PHP", price: 1499 },
    { itemName: "TypeScript", price: 2599 },
    { itemName: "Kotlin", price: 2399 }
];

// Using the reduce method to calculate the total price of all items in the shopping cart
let totalPrice = shoppingCart.reduce((acc, item) => {
    return acc + item.price; // Accumulate the total price
}, 0); // Initial value of accumulator is 0

console.log("Total price of items in shoppingCart:", totalPrice);

// Output:
// Total price of items in shoppingCart: 26290
