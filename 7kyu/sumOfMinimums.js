/*
Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

Note: You will always be given a non-empty list containing positive values.

function sumOfMinimums(arr) {
  // your code here
}
*/

// Answer:
// I first created a variable of minValues to hold the minimum values of each array
// What is coming in are a collection of arrays so I need a for loop
// Through each array, I push the minimum value using Math.min()
// Then I created the sum variable and reduced the minValues array to 1 value
// Lastly, I returned the values of sum
function sumOfMinimums(arrays) {
  let minValues = [];
  
  for(let i = 0; i < arrays.length; i++) {
    minValues.push(Math.min(...arrays[i]));
  }

  const sum = minValues.reduce((acc, cur) => acc + cur, 0);
  return sum;
}