//========= IIFE - Immediately Invoked Function Expressions ==========//
// Example 1 - Using the ! unary operator to declare the code as a function expression
!function helloWorld() {
  console.log(`Hello World`)
}(); //Used to immediately execute the program
//NOTE: IIFE cannot be re-used

// Example 2: Classical way of writing IIFE - enclosing the function expression inside parentheses
// Variation 1
(function () {
  console.log(`Hello World`) 
}()); //invoked inside the function expression

// Variation 2
(function () {
  console.log(`Hello World`)
})(); //invoked outside the function expression
// NOTE: Both variations produce the same result.

// Example 3: Using IIFE to return a value to a variable
let answer = (function () {
  return `Sending this message to a variable`
})();

console.log(answer);

// Example 4: Passing parameters to IIFEs
(function repeatMySelf (str, times) {
  for (let i = 0; i < times; i++) {
    console.log(str)
  }
})('dog', 8);

