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

$(document).ready(function() {
  // Add click event to the button
  $('#action').click(function() {
    // Make the AJAX call
    $.ajax({
      url: "https://api.chucknorris.io/jokes/random",
      type: "GET",
      dataType: "json",
      success: function(data) {
        // Convert data to a string
        var jsonString = JSON.stringify(data.value);


        // Put the output in the output div
        $('#output').text(jsonString);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log("Error:", textStatus, errorThrown);
      }
    });
  });
});
