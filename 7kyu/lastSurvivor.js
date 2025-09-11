/*
You are given a string of letters and an array of numbers.
The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
After each removal the size of the string decreases (there is no empty space).
Return the only letter left.

Example:

let str = "zbk", arr = [0, 1]
    str = "bk", arr = [1]
    str = "b", arr = []
    return 'b'
Notes
The given string will never be empty.
The length of the array is always one less than the length of the string.
All numbers are valid.
There can be duplicate letters and numbers.

function lastSurvivor(letters, coords) {

}
*/

// Answer:
// I first split the string to make it easier for array work and created a while loop
// The while loop will keep on going as long as the array length is greater than 0
// I made a variable of index holding the shifted value of coords that was taken off
// I used the splice method as template inputting the index value to be removed
// The process repeats until there are no values in coords, leaving one string left
// The string was joined together and returned
function lastSurvivor(letters, coords) {
  let string = letters.split('');
  
  while (coords.length > 0) {
    let index = coords.shift();
    string.splice(index, 1);
  }

  return string.join('');;
}