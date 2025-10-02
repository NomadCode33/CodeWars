/*
You are given the length and width of a 4-sided polygon. 
The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

Example(Input1, Input2 --> Output):

6, 10 --> 32
3, 3 --> 9
Note: for the purposes of this kata you will assume that it is a square 
if its length and width are equal, otherwise it is a rectangle.

const areaOrPerimeter = function(l , w) {
  // Return your answer
};
*/

// Answer:
// We know that a shape is a square if both the length and width are equal to each other
// Using a conditonal, if l is equal to w, then you multiply them to get the square
// else you add all the sides of a rectangle together to get the perimeter.
const areaOrPerimeter = function(l , w) {
  if (l === w) {
    return l * w;
  } else {
    return l + l + w + w;
  }
};