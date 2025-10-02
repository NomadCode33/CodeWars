/*
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

function areYouPlayingBanjo(name) {
  // Implement me
  return name;
}
*/

// Answer:
// The first thing I did was turn name into an array using .split()
// I put it into the variable nameArray so I can access the array at any time
// I used conditional statements to see if index 0 of nameArray (nameArray[0]) is 
// equal to 'R' or 'r'. If it equals to either of them, then it returns `${name} plays banjo`.
// If it doesn't then it returns `${name} does not play banjo`.
function areYouPlayingBanjo(name) {
  const nameArray = name.split('');
  if (nameArray[0] === 'R' || nameArray[0] === 'r') {
    return `${name} plays banjo`;
  } else {
    return `${name} does not play banjo`;
  }
}