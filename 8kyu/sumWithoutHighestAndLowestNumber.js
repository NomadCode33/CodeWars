/*
Sum all the numbers of a given array ( cq. list ), except the 
highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element 
at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

Input validation
If an empty value ( null, None, Nothing, nil etc. ) is given instead 
of an array, or the given array is an empty list or a list with only 1 element, return 0.

function sumArray(array) {

}
*/

// Answer:
// Before we do anything, we have to first check if the array is null 
// or if the length is less than 1
// Then we have to create an empty sum variable and sort the array
// We have to get rid of the min and max numbers which are on the first and last index respectively
// A for loop is used and started at index 1 and made it less than array.length - 1 (the last index)
// The values in between the first and last index are added into the sum value and returned
function sumArray(array) {
  if (!array || array.length <= 1 || array.length <= 2) {
    return 0;
  }
  
  let sum = 0;
  array.sort((a,b) => a - b);
  
  for(let i = 1; i < (array.length - 1); i++) {
    sum += array[i];
  }
  return sum;
}