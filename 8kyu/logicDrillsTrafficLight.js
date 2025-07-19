/*
You're writing code to control your town's traffic lights. 
You need a function to handle each change from green, to yellow, 
to red, and then to green again.

Complete the function that takes a string as an argument representing 
the current state of the light and returns a string representing the 
state the light should change to.

For example, when the input is green, output should be yellow.

function updateLight(current) {
  
  //your code here!

}
*/

// Answer:
// I used conditionals to solve this
// If current is equal to green, it's yellow
// If current is equal to yellow, it's red
// If current is equal to red, it's green
function updateLight(current) {
  if (current === "green") {
    return "yellow";
  } else if (current === "yellow") {
    return "red";
  } else {
    return "green";
  }
}