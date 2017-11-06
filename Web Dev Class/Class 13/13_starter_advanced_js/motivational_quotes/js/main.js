// 1. Create a variable indexNumber and give it a value of 0
var indexNumber = 0;
// 2. Create an array motivationalQuotes. It should store the following 3 strings:
// "You can do it!"
// "You're a JavaScript Ninja"
// "Keep going!"
var motivationalQuotes = ["You can do it!", "You're a Javascript Ninja", "Keep going!"]

// This setInterval will run every 3 seconds:
setInterval(function () {
  if (indexNumber < 2) {
    indexNumber += 1;
  } else {
    indexNumber === 0;
  }
	// If the indexNumber is less than 2
		// Add one to the indexNumber variable using +=
	// Else
		// Set the indexNumber variable to 0

	// Update the text of .quote to the quote at the current index number
$(".quote").text(motivationalQuotes[indexNumber]);

var changingColors = ["black", "green", "pink"]
$("body").css("background", changingColors[Math.floor((Math.random() * 3))]);

}, 3000);
