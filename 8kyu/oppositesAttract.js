/*
Timmy & Sarah think they are in love, but around where they live, 
they will only know once they pick a flower each. If one of the 
flowers has an even number of petals and the other has an odd number
of petals it means they are in love.

Write a function that will take the number of petals of each flower 
and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
  // moment of truth
}
*/

// Answer:
// I use the modulo operator (%) to check if one flower is even and the other is odd.
// An even number has no remainder when divided by 2 (num % 2 === 0); odd numbers do not.
// To check compatibility, I used:
// (flower1 % 2 === 0 && flower2 % 2 !== 0) || (flower1 % 2 !== 0 && flower2 % 2 === 0)
// This ensures one flower is even and the other is odd—meaning they’re in love.

function lovefunc(flower1, flower2){
  if ((flower1 % 2 !== 0 && flower2 % 2 === 0) ||
     (flower1 % 2 === 0 && flower2 % 2 !== 0)) {
    return true;
  } else {
    return false;
  }
}