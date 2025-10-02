/*
I'm new to coding and now I want to get the sum of two arrays... 
Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.


*/

// Answer:
// The goal is to add two arrays together
// I used reduce to get the arrays down to one value by adding all the numbers together
// Then I returned the added value of the two arrays to get the sum of both
function arrayPlusArray(arr1, arr2) {
  let arrOneValue = arr1.reduce((acc, cur) => acc + cur, 0);

  let arrTwoValue = arr2.reduce((acc, cur) => acc + cur, 0);

  return arrOneValue + arrTwoValue;
}