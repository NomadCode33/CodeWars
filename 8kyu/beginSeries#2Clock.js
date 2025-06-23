/*
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.
function past(h, m, s){
  //#Happy Coding! ^_^
}
*/

// Answer:
// I simply found the conversion to milliseconds for each time value
// Once I did that I inputted the appropriate time value to the respective formula
// Hours: hours * 60 * 60 * 1000;
// Minutes: minutes * 60 * 1000;
// Seconds: number of seconds * 1000;
function past(h, m, s){
  const milliHours = h * 60 * 60 * 1000;
  const milliMinutes = m * 60 * 1000;
  const milliSeconds = s * 1000;
  
  return milliHours + milliMinutes + milliSeconds;
}