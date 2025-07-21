/*
Given an array of integers as strings and numbers, 
return the sum of the array values as if all were numbers.

Return your answer as a number.

function sumMix(x){

}
*/

// Answer:
// I need to make sure that all elements in the array are numbers
// So I used the map() method and converted everything to numbers using Number()
// Then, in order to get one sum value, I used the reduce() method
// It adds up the current value and accumulator together starting from 0 
function sumMix(x){
  const numArray = x.map(Number);
  const sum = numArray.reduce((acc, c) => acc + c, 0);
  return sum;
}