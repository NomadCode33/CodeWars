/*
Very simple, given a number (integer / decimal / both depending
on the language), find its opposite (additive inverse).

function opposite(number) {
  //your code here
}
*/

// Answer:
// To get the opposite, I had to use logical reasoning to solve it
// The first if statement is asking whether the number that's passed in is positive
// hence why it's equal to number. If positve then it should return a 
// negative number to get the inverse. The else if statement has the same 
// premise, but slightly different. If the number passed in is equal to a negative 
// number (-number), then it should return a negative number for the inverse. The inverse
// of a negative number is a positive number, so it returns positive.
function opposite(number) {
  if (number === number) {
    return -number
  } else if (number === -number) {
    return -number
  }
}