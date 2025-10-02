/*
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x){

}
*/

// Answer:
// I needed an empty variable that equaled 1 for multiplication
// Making the variable equal 0 would've made the product 0
// To get all the values multiplied, I looped through a for loop
// For every number, it had to be multiplied by the product in the product variable
function grow(x){
  let product = 1;
  
  for (i = 0; i < x.length; i++) {
    product *= x[i];  
  }
  return product;
}