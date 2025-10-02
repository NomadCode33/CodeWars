/*
It's pretty straightforward. Your goal is to create a function
that removes the first and last characters of a string.
You're given one parameter, the original string.
You don't have to worry about strings with less than two characters.

function removeChar(str){
 //You got this!

};
*/

// Answer:
// I had to turn the string into an array using split()
// To remove the first and last characters, we do that by array manipulation
// That means targeting from index 1 and targeting the array.length = 1 to skip the last index
// Slice is needed to target the strings that I need
// After all that, I used join to put them back together
function removeChar(str){
 return str.split('').slice(1, -1).join('');
};
