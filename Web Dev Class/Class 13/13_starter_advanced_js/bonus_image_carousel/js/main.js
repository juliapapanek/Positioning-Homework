// GLOBAL VARIABLES -------

// The images array should hold 6 objects. Refer to the
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
	},

];

// Set a variable for the current position(index) and give it an initial value of 0
var currentIndex = 0;


// EVENTS ---------

// Listen for click events on the next and previous buttons
$('#next').on('click', function () {
	console.log(currentIndex);

	// Update the current position
	if (currentIndex === images.length - 1) {
		currentIndex = 0;
	} else {
		currentIndex += 1;
	}

	// Update the src attribute of the image to the url that's stored within the
	// src property for the object at the currentIndex in the array

	// Display the amount of likes for the current image in the #votes element.

	// Display the caption for the current image in the #caption element.


});

$('#prev').on('click', function () {
	console.log(currentIndex);

	// Update the current position
	if (currentIndex === 0) {
		currentIndex = images.length - 1;
	} else {
		currentIndex -= 1;
	}

	// Update the src attribute of the image to the url that's stored within the
	// src property for the object at the currentIndex in the array

	// Display the amount of likes for the current image in the #votes element.

	// Display the caption for the current image in the #caption element.

});



// Hook up functionality for the #upvote and #downvote buttons.
