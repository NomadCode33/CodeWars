/*
Given an array of integers your solution should find the smallest integer.

function findSmallestInt(arr) {
  //your code here
  return 0;
}

*/

// Answer:
// We need to find the number in the array that is the smallest integer
// But how can we do that with an array full of numbers with the Math.min()
// only taking two arguments? There is a workaround to that. To solve this
// we use ...arr. It says to take a look at all the series numbers in the variable
// This allows Math.min() to see all the numbers in the array and return the smallest integer
function findSmallestInt(arr) {
  return Math.min(...arr);
}