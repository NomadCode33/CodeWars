/*
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
  return [];
};
*/

// Answer:
// I first had to create an empty array to hold the values
// I then did a for loop to get a reversed sequence
// i had to equal n as it was counting down from the number for the initial expression
// For the condition expression, i had to be greater than or equal to 1 since the last number
// needed to be 1
// Then the increment expression needed to go down by 1, hence the i--
// If n > 0, then the i value was pushed into numArray
const reverseSeq = n => {
  let numArray = [];
  for(let i = n; i >= 1; i--) {
    if (n > 0) {
      numArray.push(i);
    }
  }
  
  return numArray;
};