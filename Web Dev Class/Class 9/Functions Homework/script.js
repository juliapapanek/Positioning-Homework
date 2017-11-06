
function toFahrenheit(celcius){
  var f = celcius * (9/5) + 32;
  return f;
}

console.log(toFahrenheit(50));

function toCelcius(fahrenheit){
  var c = (fahrenheit - 32) * (5/9);
  return c;
}

console.log(toCelcius(100));

function toCircumference(radius){
  var c = 2 * Math.PI * radius;
  return c;
}

console.log(toCircumference(50));

function pythagoreanTheorem(a, b){
  var answer = Math.sqrt((a * b) + (b * b));
  return answer;
}

 console.log(pythagoreanTheorem(30, 50));

 // Bonus Homework Assignment

  for (var i = 1; i < 21; i++) {
    if ((i % 2) !== 0){
      console.log(i + " is odd");
   }
   else {
     console.log(i +" is even");
   }
 }


i=0;
while (i < 20){
  i++;
  if((i % 2) !==0){
    console.log(i + " is odd");
  }
  else {
    console.log(i +" is even");
  }
}
