// index.js - Lab 8 Anon Functions and Callbacks
// Author: John McCarthy
// Date: May 8, 2023

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();

//function
function getTotal(x){
  return (x + 2);
}

//test function
console.log("What is 2 + 2? ", getTotal(2));
console.log("What is 5 + 2? ", getTotal(5));

//create array
array = [1, 2, 3, 4, 5]
console.log("My array", array);

var result = array.map(getTotal);
// should return [3, 4, 5, 6, 7]
console.log("Adding every item in array by 2", result);

var result = array.map(function(x){
  return x + 0;
})
//should return [1, 2, 3, 4, 5]
console.log("Adding every item in array by nothing!:", result);
