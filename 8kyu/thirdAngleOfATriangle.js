/* 
You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.
*/

// Answer:
// The total degrees of a triangle is 180 degrees
// To get the third angle I had to add up the 2 angles
// and subtract them by 180. 
function otherAngle(a, b) {
  const twoAngles = a + b;
  const finalAngle = 180 - twoAngles;
  
  return finalAngle;
}