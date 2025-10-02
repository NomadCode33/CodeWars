/*
All of the animals are having a feast! Each animal is bringing 
one dish. There is just one rule: the dish must start and end 
with the same letters as the animal's name. For example, the 
great blue heron is bringing garlic naan and the chickadee is 
bringing chocolate cake.

Write a function feast that takes the animal's name and dish 
as arguments and returns true or false to indicate whether 
the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and 
that each has at least two letters. beast and dish may contain 
hyphens and spaces, but these will not appear at the beginning 
or end of the string. They will not contain numerals.

function feast(beast, dish) {
//your function here
}
*/

// Answer:
// Using a conditonal I had to compare letters to see if they are equal
// Before doing that, I created variables for the first and last letters for beast and dish
// if the first letters and last letters of beast and dish are equal, then it returns true
function feast(beast, dish) {
  const beastFirstLetter = beast[0];
  const dishFirstLettter = dish[0];
  const beastLastLetter = beast[beast.length - 1];
  const dishLastLettter = dish[dish.length - 1];

  if (beastFirstLetter === dishFirstLettter && beastLastLetter === dishLastLettter) {
    return true;
  } else {
    return false;
  }
}