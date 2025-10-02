/*
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2){
  //Code
  return 0;
}
*/

// Answer:
// To solve this, I had to use conditional statements
// If operation is equal to +.-,*, or / then it does the respective
// operation. + for add, - for subtract, * for multiplication, and / for division
function basicOp(operation, value1, value2){
  if (operation === "+") {
    return value1 + value2;
  } else if (operation === '-') {
    return value1 - value2;
  } else if (operation === '*') {
    return value1 * value2;
  } else if (operation === '/') {
    return value1 / value2;
  } else {
    return 0;
  }
}