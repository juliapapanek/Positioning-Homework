// Smooth scroll it!

// Do it when someone clicks a nav link

  // prevent the standard link operation on click

  // use the href of the link to identify what
  // section to scroll to

  // get that section's top offset

  // use jQuery.animate() to animate the entire HTML document
  // scrollTop to the targetOffset (600 ms)



// MELODY'S SOLUTION
// add class "active" to first href
// $("nav a").on("click", function(e){
//   console.log(e);
//   e.preventDefault();
//
//   var target = $(this).attr("href");
//   console.log(target);
//
//   var targetOffset = $(target).offset().top;
//   console.log(targetOffset);
//
//   $("html").animate ({
//     scrollTop: target
//   }, "slow");
// });





$(document).ready(function(){

var navHeight = $("nav").outerHeight();


$(".slide-section").click(function(event){

var linkHref = $(this).attr("href");
console.log(linkHref);

$("html, body").animate({
  scrollTop: $(linkHref).offset().top - navHeight
}, 600);

$(this).on("click", function(){
  if($(this).hasClass("pink")){
    $(this).removeClass("pink");
  } else {
    $(this).addClass("pink");
  }
});

event.preventDefault();
});



});
