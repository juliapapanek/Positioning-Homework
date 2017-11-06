
// -------------------------------------------------------------------------------
// Part 1 - Creating an object
// -------------------------------------------------------------------------------

// SYNTAX IS ON YOUR CHEAT SHEETS!!!!

// 1. Create an object named motorcycle.
// It should contain the following properties and values:
var motorcycle = {
  color: "green",
  maxSpeed: 98,
  make: "Honda",
  model: "CB350 Four",
  year: 1973,
  src: "http://www.motorcyclespecs.co.za/Gallery/Honda%20CB350%2074.jpg"
}
// color - "green"
// maxSpeed - 98
// make - "Honda"
// model - "CB350 Four"
// year - 1973
// src - "http://www.motorcyclespecs.co.za/Gallery/Honda%20CB350%2074.jpg"

// 2. Display the model of the motorcycle in #model using the .text() method.
// Hint: the syntax for this looks like $('yourSelectorHere').text(objectName.propertyName);
$("#model").text(motorcycle.model);
// 3. Update the color property. The new color should be "red"
motorcycle.color = "red";
// 4. Display the color of motorcycle in #color using the .text() method.
$("#color").text(motorcycle.color);
// Bonus: Display the motorcycle src in #moto-image using jQuery's .attr() method.
// Hint: syntax for the attr method: $('elementToUpdate').attr('src', objectName.propertyName);
$("#moto-image").attr("src", motorcycle.src);

// -------------------------------------------------------------------------------
// Part 2 - Creating an array of objects
// -------------------------------------------------------------------------------

// 1. Create an array named scores.
// This array should contain two objects with the following properties/values:

var scores = [
  {
    name: "Suzie",
    score: 55
  },
  {
    name: "Bill",
    score: 60
  }
];
// name: Suzie
// score: 55

// name: Bill
// score:60


// 2. Display the name and score for each player (using the .text() method)
// Refer to the HTML to find where they should be displayed.
$("#player1Name").text(scores[0].name);
$("#player2Name").text(scores[1].name);
$("#player1Score").text(scores[0].score);
$("#player2Score").text(scores[1].score);
