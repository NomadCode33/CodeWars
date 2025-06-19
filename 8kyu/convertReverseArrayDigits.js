/*
Given a random non-negative number, you have to return the digits
of this number within an array in reverse order.

function digitize(n) {
  //code here
}
*/

// Answer:
// The problem required a multi step process to solve
// I first had to convert the number into a string
// Then I had to split the string into an array and reversed it
// Now I had to convert all the strings back into ints
// Using a for loop I converted each element into a int type and pushed
// the values into the newArray
function digitize(n) {
  let strNum = n.toString();
  let numArray = strNum.split('').reverse();
  let newArray = [];
  for(i = 0; i < numArray.length; i++) {
    if (typeof numArray[i] === 'string') {
      newArray.push(Number(numArray[i]));
    }
  }
  
  return newArray;
}