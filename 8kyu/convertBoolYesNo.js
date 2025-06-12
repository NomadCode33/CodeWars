/*
Complete the method that takes a boolean value and return 
a "Yes" string for true, or a "No" string for false.


function boolToWord( bool ){
  //...
}
*/

// Answer:
// Had to use conditionals to solve this problem
// If bool passes in true for the parameter then it returns "Yes"
// If bool passes in false for the parameter then it returns "No"
function boolToWord( bool ){
  if (bool === true) {
    return "Yes";
  } else if (bool === false) {
    return "No";
  }
}