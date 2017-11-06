
$(document).ready(function(){

$(document).on("click", "#submit-form", function(event){
  event.preventDefault();

  var firstName = $("#firstname").val();
  var lastName = $("#lastname").val();

  if (firstName === "" || lastName === "") {
    alert("Please enter a first name and a last name");
    return;
  }

  var creditCard = $("#credit-card").val();

  if (creditCard.length !== 16) {
    alert("Please enter a 16 digit credit card number");
    return;
  }

  // var ccNum = parseInt(creditCard);
  if (isNaN(creditCard)){
    alert("Please only a 16 digit number");
    return;
  }

  var expiration = $("#expiration").val();

  if (expiration !== 1) {
    alert("Please enter an expiration date");
    return;
  }

  var cvc = $("#cvc").val();

  if (cvc.length !== 3) {
    alert("Please enter a 3 digit CVC number");
    return;
  }

  if (isNaN(cvc)){
    alert("Please only a 16 digit number");
    return;
  }

});


});



// parseInt() - Takes a string and converts it to an integer OR if it is not a number returns NaN
//
// isNaN() - A function that takes a value and returns true or false based on if the value is NOT a number
//
// .length - A property that gives you the length of a string
