$(window).on('scroll', function () {
	// Step 1: Google $(window).scrollTop();
	var distanceScrolled = $(window).scrollTop();

	console.log('The distance scrolled is: ' + distanceScrolled);

	// Step 2: Write Rest of JS here
	if (distanceScrolled > 540) {
		$('.main-nav').addClass('scrolled');
	} else {
		$('.main-nav').removeClass('scrolled');
	}

});
