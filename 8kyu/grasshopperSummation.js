/*
Write a program that finds the summation of every number from 1 to 
num (both inclusive). The number will always be a positive integer 
greater than 0. Your function only needs to return the result, 
what is shown between parentheses in the example below is how you 
reach that result and it's not part of it, see the sample tests.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

var summation = function (num) {
  // Code here
}
*/

// Answer:
// I first created an empty variable named sum to hold the values
// A for loop was created, and I made the conditionExpression equal to num
// as we are calculating the sum of the numbers going up to the cap of num
// Each iteration is added to sum which is then returned
var summation = function (num) {
  let sum = 0;
  
  for(i = 1; i <= num; i++) {
    sum += i;
  }
  
  return sum;
}