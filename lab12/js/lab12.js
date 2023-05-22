// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Function
function sortingHat(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "Boston Bruins"
  }
  else if (mod == 1) {
    return "Chicago Blackhawks"
  }
  else if (mod == 2) {
    return "Seattle Kraken"
  }
  else if (mod == 3) {
    return "Edmonton Oilers"
  }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var team = sortingHat(name);
  newText = "<p>You have been drafted by the " + team + "</p>";
  document.getElementById("output").innerHTML = newText;

})