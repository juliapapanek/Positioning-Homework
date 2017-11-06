// GLOBAL VARIABLES -------

// The images array should hold 6 objects. Refer to the cheatsheet
var images = [
	{
		src: "images/image_1.jpg"
	},
	{
		src: "images/image_2.jpg"
	},
	{
		src: "images/image_3.jpg"
	},
	{
		src: "images/image_4.jpg"
	},
	{
		src: "images/image_5.jpg"
	},
	{
		src: "images/image_6.jpg"
	}

];

// Set a variable for the current position(index) and give it an initial value of 0
var indexNumber = 0;


// Every 3 seconds this code will run

setInterval(function () {
	console.log(indexNumber);

	// Update the current position
	if (indexNumber < 5) {
		indexNumber += 1;
	} else {
		indexNumber = 0;
	}

	// Update the src attribute of the image to the url that's stored within the
	// src property for the object at the indexNumber in the array
	// Hint: to update the src: $('yourSelectorHere').attr('src', arrayName[indexNumber].propertyName)
$("#image-to-vote-on").attr("src", images[indexNumber].src);


}, 3000);
