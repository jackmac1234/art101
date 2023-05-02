// index.js - purpose and description here
// Author: John McCarthy
// Date: April 27, 2023

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

// Define Variables
myTransport = ["skateboard", "car", "bike", "bus"];

// Create an Object for My Main Ride
myMainRide = {
  make: "Buick",
  model: "Enclave",
  color: "Black",
  year: 2014,
  age: function() {
    return 2022 - this.year;
  }
}

// Output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "<\pre>");
