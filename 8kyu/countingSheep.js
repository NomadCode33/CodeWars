/*
Consider an array/list of sheep where some sheep may be missing 
from their place. We need a function that counts the number of 
sheep present in the array (true means present).

function countSheeps(sheep) {
  // TODO
}
*/

// Answer:
// I had to get the true values, which represented sheeps present.
// I looped through the array using the for loop and used a conditional
// statement saying that if sheep[i] is equal to true, keep a tally on it
// that tally is saved on the trueCount variable in the variable

function countSheeps(sheep) {
  let trueCount = 0;

  for(i = 0; i < sheep.length; i++) {
    if (sheep[i] === true) {
        trueCount += 1;
    }
  }
  return trueCount;
}
