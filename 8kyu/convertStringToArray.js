/*
Write a function to split a string and convert it into an array of words.

function stringToArray(string){

	// code code code

}
*/

// Answer:
// To solve this I used the .split() method and used the space
// delimiter (' ') to space them out into an array of separate words
function stringToArray(string){
    return string.split(' ');
}