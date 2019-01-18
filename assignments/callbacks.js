// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/

// Question #1
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
}

// Solution Version 1
function getLength(arr, cb) {
  return cb(arr.length)
}

getLength(items, function(length) {
  console.log(length)
})

// Solution Version 2
function displayLength(arr) {
  console.log(arr.length)
}

function getLength(arr, cb) {
  return cb(arr)
}

getLength(items, displayLength)



// Question #2
function last(arr, cb) {
  // last passes the last item of the array into the callback.
}

// Solution
function last(arr, cb) {
  return cb(arr[arr.length-1])
}

last(items, function (item) {
  console.log(item)
})

// Question #3
function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}

// Solution
function sumNums(x, y, cb) {
  const sum = x + y
  return cb(sum)
}

sumNums(164, 320, function(answer) {
  console.log(answer)
})

// Question #4
function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
}

// Solution
function multiplyNums(x, y, cb) {
  const product = x * y
  return cb(product)
}

multiplyNums(324, 875, function (answer) {
  console.log(answer)
})

// Question #5
function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

// Solution
function contains(item, list, cb) {
  return cb(list.includes(item))
}

contains('yo-yo', items, function(item) {
  console.log(item)
})

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
