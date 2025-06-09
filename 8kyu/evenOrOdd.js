/*
Create a function that takes an integer as an argument and returns
"Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {

}
*/

// Answer:
// In order to get even and odd numbers I had to use the modulus(%).
// For (number % 2 === 0), it's saying that if the remainder is 0
// then it's an even number and outputs "Even". For odd numbers I had to do the opposite.
// If the remainder is not 0, then it's an odd number and outputs "Odd"
function evenOrOdd(number) {
  if (number % 2 === 0) {
    return `Even`;
  } else if (number % 2 !== 0) {
    return `Odd`;
  }
}

evenOrOdd(2);
evenOrOdd(3);