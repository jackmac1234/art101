// index.js - purpose and description here
// Author: Your Name
// Date:

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

function sortUserName(userName) {
  // split the array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  // sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  // join back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  //  userName.toLower().split("").sort().join("")
  return nameSorted;
}

// adding button
var button = document.getElementById('submit-button');
button.addEventListener('click', function() {
  console.log("We got here.");
  inputValue = document.getElementById('user-name').value;
  var sortedName = sortUserName(inputValue);
  console.log("Results", sortedName);
  document.getElementById("output").innerHTML = sortedName;
});
