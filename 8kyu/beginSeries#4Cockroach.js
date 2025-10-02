/*
The cockroach is one of the fastest insects. Write a function which takes 
its speed in km per hour and returns it in cm per second, rounded down 
to the integer (= floored).

For example:

1.08 --> 30
Note! The input is a Real number (actual type is language dependent) 
and is >= 0. The result should be an Integer.

function cockroachSpeed(s) {
  //Good Luck!
}
*/

// Answer:
// First off, we need to make sure that the values inputted are greater than or equal to 0
// Then I returned the rounded down value of speed in cm per second after calculating it
function cockroachSpeed(s) {
  if (s >= 0) {
    return Math.floor(s * (100000 / 3600));
  }
}