// Write your pseudo code here! HAPPY CODING!!

$(document).ready(function(){

$("#showModal").on("click", function(event){
  event.preventDefault();
  $(".modal-background").css("display", "flex").show();
});

$("#close").on("click", function(){
  $(".modal-background").hide();
})

});

// Another option with display: flex; in css instead of display: none;
// $(".modal-background").hide();
