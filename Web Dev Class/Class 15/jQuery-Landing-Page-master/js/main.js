$(document).ready(function(){


  // - Step 1: Add the class "affix" to the nav element when the scroll distance reaches past 50 pixels.
  // .addClass()
  // .scrollTop()
  // var scrollDistance = $(window).scrollTop();
  // if the scroll distance is greater than 50 then grab the navigation and add the class of affix, else grab the navigation and remove the class of affix

$(window).scroll(function(){

  var scrollPosition = $(this).scrollTop();

  if (scrollPosition > 50) {
    $("#mainNav").addClass("affix", 500);
  } else {
    $("#mainNav").removeClass("affix", 500);
  }
});


// - Step 2: When the navbar links are clicked, animate a page scroll down to that anchor.
// Reference lab (smooth scroll) where we scrolled to the different sections
// Target href in anchor tags with .attr()

var navHeight = $("#mainNav").outerHeight();

$(".page-scroll").click(function(event){

  var linkHref = $(this).attr("href");

  $("html, body").animate({
    scrollTop: $(linkHref).offset().top - navHeight
  }, 1000);

  event.preventDefault();
});


// - Step 3: Use Bootstrap scrollspy to change the navbar links on scroll.
// Link in slack channel - via javascript section on link (position relative has already been done for you)
// go into HTML and figure out how you can target the navigation

// $('body').scrollspy({ target: '#navbar-example' })

// Step 4

new WOW().init();

});
