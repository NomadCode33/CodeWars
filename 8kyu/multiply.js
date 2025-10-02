/* 
This code does not execute properly. Try to figure out why.

function multiply(a, b){
  a * b;
}
*/

// Answer:
// Though the function was correct it wasn't returned
// There was no variable nor console.log() to save the value to output on the console
// By putting a return it was able to read the value properly
function multiply(a, b){
  return a * b;
}

console.log(multiply(1,1));
console.log(multiply(2,1));
console.log(multiply(2,2));
console.log(multiply(3,5));
console.log(multiply(5,0));
console.log(multiply(0,5));
console.log(multiply(0,0));