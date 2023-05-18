// index.js - purpose and description here
// Author: Your Name
// Date:


$(document).ready(function() {
  // Find the challenge section and create a button
  var challengeSection = $('.one');
  var challengeButton = $('<button>').text('Challenge');
  var challengeInitialColor = challengeSection.css('background-color');
  var challengeChangedColor = 'yellow';
  var isChallengeColorChanged = false;

  // Add click event handler to the challenge button
  challengeButton.click(function() {
    if (isChallengeColorChanged) {
      challengeSection.css('background-color', challengeInitialColor);
      isChallengeColorChanged = false;
    } else {
      challengeSection.css('background-color', challengeChangedColor);
      isChallengeColorChanged = true;
    }
  });

  // Add the button to the challenge section
  challengeSection.append(challengeButton);

  // Find the problems section and create a button
  var problemsSection = $('.two');
  var problemsButton = $('<button>').text('Problems');
  var problemsInitialColor = problemsSection.css('background-color');
  var problemsChangedColor = 'lightblue';
  var isProblemsColorChanged = false;

  // Add click event handler to the problems button
  problemsButton.click(function() {
    if (isProblemsColorChanged) {
      problemsSection.css('background-color', problemsInitialColor);
      isProblemsColorChanged = false;
    } else {
      problemsSection.css('background-color', problemsChangedColor);
      isProblemsColorChanged = true;
    }
  });

  // Add the button to the problems section
  problemsSection.append(problemsButton);

  // Find the results section and create a button
  var resultsSection = $('.three');
  var resultsButton = $('<button>').text('Results');
  var resultsInitialColor = resultsSection.css('background-color');
  var resultsChangedColor = 'lightgreen';
  var isResultsColorChanged = false;

  // Add click event handler to the results button
  resultsButton.click(function() {
    if (isResultsColorChanged) {
      resultsSection.css('background-color', resultsInitialColor);
      isResultsColorChanged = false;
    } else {
      resultsSection.css('background-color', resultsChangedColor);
      isResultsColorChanged = true;
    }
  });

  // Add the button to the results section
  resultsSection.append(resultsButton);
});
