$(document).ready(function(){

// $("a").on("click", function(event){
//   event.preventDefault();
//  });
//
// $("li > a").on("click", function(){
//   if ($(this).hasClass("active")){
//     $("#primary-nav").slideUp("slow", "swing");
//   } else {
//     $("#primary-nav").slideDown();
//   }
// });

$("#primary-nav > .international").on("click", function(event){
  event.preventDefault();
  $("#primary-nav > .international").siblings().removeClass("active");
  $("#primary-nav > .international").toggleClass("active");
  if($("primary-nav > .international").hasClass("active")){
    $(".drop .international").slideUp();
  } else {
    $(".drop .politics").hide();
    $(".drop .business").hide();
    $(".drop .technology").hide();
    $(".drop .culture").hide();
    $(".drop .blogs").hide();
    $(".drop .international").show();
    $(".drop .international").slideDown();
  }
});


});
