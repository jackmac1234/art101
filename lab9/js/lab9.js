// index.js - Lab 9: Javascript for the Web
// Author: John McCarthy
// Date: May 10, 2023

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

// Assign variable outputEl to getElementById()
var outputEl = document.getElementById("output");
console.log("outputEl: ", outputEl);

// Assign variable new1El to a new element with document.createElement
var new1El = document.createElement("info");

// Say "something new.""
new1El.innerHTML = "Something new.";
new1El.id = "new-one";

// Assign variable new2El to a new element with document.createElement 
var new2El = document.createElement("info");
new1El.id = "new-two";

// Say "something else.""
new2El.innerHTML = "Something else.";

// Append both new elements 
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

// Change the css attributes 
new1El.style.color = "green";
new2El.style.color = "red";
outputEl.style.border = "dashed 5px pink";
outputEl.style.backgroundColor = "black";








