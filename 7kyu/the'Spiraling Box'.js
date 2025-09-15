/*
Given two positive integers m (width) and n (height), fill a two-dimensional 
list (or array) of size m-by-n in the following way:

(1) All the elements in the first and last row and column are 1.

(2) All the elements in the second and second-last row and column are 2, 
excluding the elements from step 1.

(3) All the elements in the third and third-last row and column are 3, 
excluding the elements from the previous steps.

And so on ...

Examples
Given m = 5, n = 8, your function should return

[[1, 1, 1, 1, 1],
 [1, 2, 2, 2, 1],
 [1, 2, 3, 2, 1],
 [1, 2, 3, 2, 1],
 [1, 2, 3, 2, 1], 
 [1, 2, 3, 2, 1],
 [1, 2, 2, 2, 1],
 [1, 1, 1, 1, 1]]
Given m = 10, n = 9, your function should return

[[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
 [1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
 [1, 2, 3, 3, 3, 3, 3, 3, 2, 1], 
 [1, 2, 3, 4, 4, 4, 4, 3, 2, 1], 
 [1, 2, 3, 4, 5, 5, 4, 3, 2, 1], 
 [1, 2, 3, 4, 4, 4, 4, 3, 2, 1], 
 [1, 2, 3, 3, 3, 3, 3, 3, 2, 1], 
 [1, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]
 
function createBox(m, n) {
  
}
*/

// Answer:  
// I need to fill an m-by-n grid with concentric layers of numbers  
// Each layer k starts at distance k from the border and fills inward  
// The value at any (row, col) = min distance to any edge + 1  
// So I calculate distances to top, bottom, left, right edges  
// Then assign the minimum distance + 1 for each cell in the grid  
function createBox(m, n) {
  let result = [];

  for (let row = 0; row < n; row++) {
    let line = [];
    for (let col = 0; col < m; col++) {
      let layer = Math.min(row, n - 1 - row, col, m - 1 - col) + 1;
      line.push(layer);
    }
    result.push(line);
  }

  return result;
}