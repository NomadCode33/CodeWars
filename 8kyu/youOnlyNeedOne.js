/*
You will be given an array a and a value x. 
All you need to do is check whether the provided array contains the value.

a can contain numbers or strings. x can be either.

Return true if the array contains the value, false if not.

function check(a, x) {
  // your code here
}
*/

// Answer:
// Given array a, we need to see if the value x is present
// Using the array method includes(), it returns true or false if x is present
function check(a, x) {
  return a.includes(x);
}