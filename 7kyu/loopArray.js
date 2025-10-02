/*
Write a function loopArr that loops array in a specified direction by some number of steps.

By "looping array" it means removing elements from start and adding them to end of array 
one-by-one (if direction is "left") or removing from end and adding them to start one by-one 
(if direction is "right").

Function should accept three arguments:

array - non-empty array of elements of any type;
direction - 'left' or 'right' - tells how to loop array;
steps - number of steps to loop array (less or equal to array size);
Examples:

loopArr([1, 5, 87, 45, 8, 8], 'left', 2);
should produce result: [87, 45, 8, 8, 1, 5]

loopArr([1, 5, 87, 45, 8, 8], 'right', 2);
should produce result: [8, 8, 1, 5, 87, 45]

function loopArr(arr, direction, steps) {

}
*/

// Answer:
// I created conditionals signifying what to do if directions are left or right
// The for loop starts off at index 0 and loops up to the amount of steps provided
// If right, it pops off the last value and unshifts it to the beginning of the array
// If left, it shifts off the first value and pushes it to the end of the array
function loopArr(arr, direction, steps) {
  if (direction === "right") {
    for(let i = 0; i < steps; i++) {
      let last = arr.pop();
      console.log(last);
      arr.unshift(last);
    }
    return arr;
  } else {
    for(let i = 0; i < steps; i++) {
      let first = arr.shift();
      console.log(first);
      arr.push(first);
    }
    return arr;
  }
}