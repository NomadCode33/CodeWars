/*
Complete the square sum function so that it squares each number passed
into it and then sums the results together.

function squareSum(numbers){

}
*/

// Answer:
// Before adding up the numbers, we must square the numbers first
// The method I used was .map() to easily square the numbers in each element
// After they were squared, I set a sum variable to hold the tally
// I then used a for loop to go through the array to add the square numbers up
function squareSum(numbers){
  let squared = numbers.map(num => Math.pow(num, 2))
  let sum = 0;
  
  for(i = 0; i < squared.length; i++) {
    sum += squared[i];
  }
  return sum;
}