// Write your JavaScript here!

var moneyCustomerNeeds = 100;

var cashRegisterAmount = 10;

var safeAmount = 30;

var withdrawAmount = 60;

if(cashRegisterAmount>=100) {
  console.log("Have a nice day");
}

else if(cashRegisterAmount<100 && cashRegisterAmount+safeAmount>=100) {
  console.log("Please wait while I go to the safe");
 }

else if(cashRegisterAmount+safeAmount<100) {
  console.log("Please wait while I go to the bank");
   alert("Withdraw $" + withdrawAmount);
 }
