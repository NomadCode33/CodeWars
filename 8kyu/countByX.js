/*
Create a function with two arguments that will return an array of the 
first n multiples of x.

Assume both the given number and the number of times to count will 
be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).

Examples
x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
x = 2, n = 5  --> [2,4,6,8,10]

function countBy(x, n) {
  let z = [];

  return z;
}
*/

// Answer:
// I first had to make sure that an empty array was created to hold the values
// I formulated a for loop to have x start off as the base number, then in the 
// conditional statement to multiply x and n to end off at the specific multiple of x
// Then in the increment expression to go up by the multiple of x
// All the values are pushed into z and returned
function countBy(x, n) {
  let z = [];
  
  for(let i = x; i <= (x*n); i += x) {
    z.push(i);
  }

  return z;
}