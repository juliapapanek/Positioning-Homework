// PART 1 - Functions review
// 1. Write a function and name it addMagic
	// Inside the function, log "Magic!" to the console using console.log()

function addMagic(){
  console.log("Magic!");
}

// 2. Call the addMagic function.

addMagic();

$("button").on("click",function(){
  $('h1').text('Hi!');
  $('h1').css('color','red');
  $("h2").addClass("special");
  $("h1").fadeToggle('350');
  $(".fun-list").children().fadeOut("600");
});
