/*
Given a set of numbers, return the additive inverse of each. 
Each positive becomes negatives, and the negatives become positives.
[1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
[1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
[] --> []
You can assume that all values are integers. Do not mutate the input array.

function invert(array) {
   return ;
}
*/

// Answer:
// I used the forEach method to cycle through the array by each element
// Since forEach doensn't return a new array, I created the inverted variable
// It's empty so it holds the inverted values of the array since the forEach pushes them into
// the inverted variable
function invert(array) {
  let inverted = [];
  array.forEach((num) => {
     inverted.push(-num)
   });

  return inverted
}