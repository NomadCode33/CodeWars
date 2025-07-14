/*
Write function RemoveExclamationMarks which removes all 
exclamation marks from a given string.

function removeExclamationMarks(s) {
  return '';
}
*/

// Answer:
// I split s into an array and saved it into the str variable
// I did a for loop starting from the end to the beginning
// if the index of str is an exclaimation point, then I use
// splice to remove that exclaimation point.
// I returned the joined string after
function removeExclamationMarks(s) {
  const str = s.split('');
  
  for(let i = str.length - 1; i > 0; i--) {
    if (str[i] === "!") {
      str.splice(i, 1); 
    }
  }
  return str.join('');
}