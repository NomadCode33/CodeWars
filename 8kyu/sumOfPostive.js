/*
You get an array of numbers, return the sum of all of the positives ones.

Note
If there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  // TODO
}
*/

// Answer:
// To go through the array I have to do a for loop
// I also need an empty variable in order to hold the sum of numbers from the array
// In the for loop I started the loop at index 0 and made it go up to the array length (arr.length)
// When going through the loop if checks the value (arr[i]) to see if it's greater than or equal to 0
// If it's a positive number then it adds the value
// It's repeats the process for every value in the array

function positiveSum(arr) {
  let sum = 0;
  for(i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      sum += arr[i];
    }
  }
  return sum;
}