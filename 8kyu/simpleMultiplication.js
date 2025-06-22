/*
This kata is about multiplying a given number by eight if it is 
an even number and by nine otherwise.

function simpleMultiplication(number) {
    // your code........
}
*/

// Answer:
// Used conditionals to solve the problem
// If the number is even, hence (number % 2 === 0), the number is multipled by 8
// If not even, then it's multiplied by 9
function simpleMultiplication(number) {
    if (number % 2 === 0) {
      return number * 8;
    } else {
      return number * 9
    }
}