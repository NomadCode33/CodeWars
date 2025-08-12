/*
We need a function that can transform a string into a number.
What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a 
perfectly valid representation of an integral number.

const stringToNumber = function(str){
  // put your code here
  return null;
}
*/

// Answer:
// I simply converted the string into a number using Number(str)
const stringToNumber = function(str){
  return Number(str);
}