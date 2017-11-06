// -------------------------------------------------------------------------------
// Part 1 - Variables
// -------------------------------------------------------------------------------

// Create a variable item1 and give it the value "milk".
// Log it to the console using console.log(variableNameHere);
var item1 = "milk";
console.log(item1);

// Create a variable item2 and give it the value "eggs".
// Log it to the console using console.log(variableNameHere);
var item2 = "eggs";
console.log(item2);

// Create a variable item3 and give it the value "cheese".
// Log it to the console using console.log(variableNameHere);
var item3 = "cheese";
console.log(item3);

// -------------------------------------------------------------------------------
// Part 2 - Creating an array
// -------------------------------------------------------------------------------

// SYNTAX IS ON YOUR CHEAT SHEETS!!!!


// 1. Create an array of iceCreamFlavors.
// It should hold the following values:
// 'chocolate', 'vanilla', 'strawberry', and 'rocky road'.
var iceCreamFlavors = ["chocolate", "vanilla", "strawberry", "rocky road"];

// 2. Log the iceCreamFlavors variable to the console - console.log(variableNameHere)
// Be sure to check your console to make sure you see it!!
console.log(iceCreamFlavors);

// 3. Find the length of the iceCreamFlavors array
// and store it in a variable numberFlavors.
var numberFlavors = iceCreamFlavors.length;


// 4. Log the numberFlavors variable to the console - console.log(variableNameHere)
console.log(numberFlavors);

// 5. Now replace 'chocolate' with 'mint chip' - arrayName[itemIndexToReplace] = "new item";
iceCreamFlavors[0] = "mint chip";

// 6. Log the iceCreamFlavors array to the console and check to make sure step #5 worked
console.log(iceCreamFlavors[0]);

// Bonus A: Create a variable currentIndex and set it to 0
var currentIndex = 0;

// Bonus B: Find the item at the currentIndex in the iceCreamFlavors console
// and save it to a variable currentFlavor
var currentFlavor = iceCreamFlavors[currentIndex];



// Bonus C: Log the currentFlavor to the console.
console.log(currentFlavor);

// -------------------------------------------------------------------------------
// TOGETHER
// -------------------------------------------------------------------------------

// 1. Look in the index.html file and locate the element with the id #special

// 2. Update the text of #special to display the third item
// in the iceCreamFlavors array.
$("#special").text(iceCreamFlavors[2]);

// 3. You try! Update the text of #special to display the second item
// in the iceCreamFlavors array.
$("#special").text(iceCreamFlavors[1]);
