$(document).ready(function(){

$("body").hide();
$("body").fadeIn(2000);

$("p").on("mouseenter",function(event){
  event.preventDefault();
  $("p").addClass("yellow");
});

$("p").on("mouseleave",function(event){
  event.preventDefault();
  $("p").removeClass("yellow");
});

// OR
// $(this).css("background-color:yellow")


$("h2").on("click",function(){
  $(this).animate({
    "opacity":"0.25",
    "margin-left":"20px"
  }, 400, "swing", function(){
    $(".speech").animate({
      "opacity": "0.5"
    });
  });
});

$("#switcher-default").on("click",function(){
  $("body").css("font-size", "60%");
});

$("#switcher-large").on("click",function(){
  $("body").css("font-size", "100%");
});

$("#switcher-small").on("click",function(){
  $("body").css("font-size", "30%");
});

});
