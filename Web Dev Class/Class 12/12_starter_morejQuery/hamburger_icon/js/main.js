// When the user clicks on the hamburger-icon
$('.hamburger-icon').on('click', function (e) {
  e.preventDefault();

  // Use jQuery to toggle the active class on the hamburger-icon that was clicked
  $(this).toggleClass('active');
});