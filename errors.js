// Fix the error in the snackSelection code snippet first

const snackSelection = 'Pretzels';

if (snackSelection === 'Pretzels') {
  console.log("That'll be $1, please!");
}
//added the === instead of the =

// Once the code above this line is fixed you'll be able to see the error from the code below

function first () {
  second();
}
//line 13
function second () {
  third();
}
//line 17
function third(){
  console.log("Now I am a function!");
}
first();
//line 20