/*
Write a function which calculates the average of the numbers in a given array.

Note: Empty arrays should return 0.
function findAverage(array) {
  // your code here
  return 0;
}
*/

// Answer:
// To start, we need a conditional returning 0 if there's no array
// If the length of the array is 0, then return 0
// I then used the forEach loop to go through each element and add that to the sum variable
// I also created the avg variable to calculate the average using both sum and the array.length
// array.length signifies the amount of numbers used
// After that I returned the avg
function findAverage(array) {
  if (array.length === 0) {
    return 0;
  }
  
  let sum = 0;
  
  array.forEach((num) => {
    sum += num
  })
  
  const avg = sum / array.length
  return avg;
}