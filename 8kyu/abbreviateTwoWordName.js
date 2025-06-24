/*
Write a function to convert a name into initials. 
This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

function abbrevName(name){

    // code away

}
*/

// Answer:
// I put the name parameter into the splitName variable and used .split()
// I split the string of name using the delimeter of space, causing the name to split into 2 separate words
// The first name is on index 0, and the last name is on index 1
// To get the initals I had to select index 0 on both words to grab the first string
// I returned the initials using .toUpperCase() to make sure they are capitalized
function abbrevName(name){
  let splitName = name.split(' ');
  
  return `${splitName[0][0].toUpperCase()}.${splitName[1][0].toUpperCase()}`

}