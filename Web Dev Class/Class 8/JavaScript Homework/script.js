// Create a prompt that asks the user what their best marathon time was.
// If their time was between 4 to 5 hours, alert the user that their time was average.
// if the time was between 2 to 4 hours, alert the user that their time was excellent.
// If the time was greater than 5 hours, alert the user that they need to speed up!

//when user enters time in prompt
  //if time is great than or equal to 4 and less than or equal to 5
    //alert time was average
  //if else time is greater than or equal to 2 and less than or equal to 4
    //alert time was excellent
  //if else time is greater than 5
    //alert user needs to speed up

var time = prompt("What was your best marathon time?");


if (time>=4 && time<=5) {
  alert("Your time was average");
 }

else if (time>=2 && time<=4){
   alert("Your time was excellent!");
 }

else (time>5){
    alert("You need to speed up!");
  }
