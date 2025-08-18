/*
In this simple assignment you are given a number and have to make it negative. 
But maybe the number is already negative?

Notes
- The number can be negative already, in which case no change is required.
- Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

function makeNegative(num) {
  // Code?
}
*/

// Answer:
// We only need to get negative numbers from the positive numbers that we input
// 0 and negative numbers can just be returned as is
// So if num > 0, then we return a negative number in it's place
function makeNegative(num) {
  if (num > 0) {
    return -num;
  } else {
    return num;
  }
}