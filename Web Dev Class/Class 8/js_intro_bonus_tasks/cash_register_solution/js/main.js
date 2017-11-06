// Write your JavaScript here!
var amountDueToCustomer = 120;
var cashRegisterAmount = 60;
var safeAmount = 30;


if (amountDueToCustomer <= cashRegisterAmount) {
	console.log("Take your cash. Have a nice day.");
} else if (amountDueToCustomer <= cashRegisterAmount + safeAmount) {
	console.log("Please wait while I go to the safe.");
} else {
	console.log("Please wait while I go to the bank.");
	var withdrawalAmount = amountDueToCustomer - (cashRegisterAmount + safeAmount);
	console.log("Withdraw $" + withdrawalAmount);

}
