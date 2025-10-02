/*
Write a function that returns the total surface area and volume of a box.

The given input will be three positive non-zero integers: width, height, and depth.

The output will be language dependant, so please check sample tests for the 
corresponding data type, (list, tuple, struct, query, etcetera).

function getSize(width, height, depth)
*/

// Answer:
// I started it off with an empty totals variable of an array
// I then calculated the surface area which is 2 * length * width + 2 * length * height
//  + 2 * width * height
// Then I calculated the volume of the shape which is length * width * height
// Finally, I pushed both values into the totals variable and returned it
function getSize(width, height, depth) {
  let totals = [];
  const surface = (2 * depth * width) + (2 * depth * height) + (2 * width * height);
  const volume = depth * width * height;
  
  totals.push(surface);
  totals.push(volume);
  
  return totals;
}
