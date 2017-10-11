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



var time = 4.5

if(time>=4 && time<=5) {
  console.log("Your time was average");
}

if else(time>=2 && time<=4){
  console.log("Your time was excellent!");
}

if else(time>5){
  console.log("You need to speed up!");
}

prompt("What was your best marathon time?");
