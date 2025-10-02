/*
When provided with a number between 0-9, return it in words. 
Note that the input is guaranteed to be within the range of 0-9.

Input: 1

Output: "One".

If your language supports it, try using a switch statement.

function switchItUp(number){
//Write your own Code!
}
*/

// Answer:
// I used a switch/case statement to solve the problem 
// as it's similar to if/else statements. I need to get 0-9
// returned as numbers. So when case is 0, it will return 0
// I repeated the steps to include every number in the range
// to return the corresponding string to the number
function switchItUp(number){
  switch(number) {
      case 0: return "Zero";
      case 1: return "One";
      case 2: return "Two";
      case 3: return "Three";
      case 4: return "Four";
      case 5: return "Five";
      case 6: return "Six";
      case 7: return "Seven";
      case 8: return "Eight";
      default: return "Nine"
  }
}