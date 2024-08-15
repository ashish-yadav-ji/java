// ================================
// JavaScript Execution Context Phases
// ================================

// 1) Global Execution Context
// ---------------------------
// During the global execution context, the following is set up:
//      Global Execution
//          |
//          V
//       [ this ]
// This sets up the global `this` context, which typically refers to the global object (window in browsers, global in Node.js).

// 2) Memory Phase
// ---------------
// In the memory phase, the JavaScript engine allocates memory and sets up the initial state for variables and functions.
// Memory Phase
// -------------
//  val1 -> undefined          // `val1` is declared but not initialized
//  val2 -> undefined          // `val2` is declared but not initialized
//  addNum -> definition       // `addNum` is a function and its definition is available
//  result1 -> undefined       // `result1` is declared but not initialized
//  result2 -> undefined       // `result2` is declared but not initialized

// 3) Execution Phase
// -------------------
// In the execution phase, the code is executed and variables are assigned their values.
// Execution Phase
// ---------------
//  val1 -> 10                 // `val1` is assigned the value 10
//  val2 -> 5                  // `val2` is assigned the value 5
//  addNum -> new variable environment + execution thread
//  result1 -> 15 (addNum(val1, val2))  // `addNum` is called with `val1` and `val2`, resulting in 15
//  result2 -> 12 (addNum(10, 2))      // `addNum` is called with 10 and 2, resulting in 12
