// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

// Solution
function myName () {
  const firstName = 'Wilfred'

  function myFirstName () {
    console.log(`My first name is ${firstName}`)
    const lastName = 'Morgan'

    function myLastName () {
      console.log(`My last name is ${lastName}`)

      function myFullName() {
        console.log((`My full name is ${firstName} ${lastName}`))
      } //myFullName()
      myFullName()
    }//myLastName()
    myLastName()
  }//myFirstName
  myFirstName()
}//myName()

myName()

// ==== Challenge 2: Create a counter function ====
//const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
//};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// Solution
const counter = function () {
  let count = 0
  return function increment () {
    count++
    console.log(count)
  } 
}

const newCounter = counter()
newCounter()

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
