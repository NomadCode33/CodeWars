/*
Given a string, you have to return a string in which each 
character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
*/

// Answer:
// This was an interesting problem to solve
// I first set an empty string variable
// Then I ran a for loop through the str passed in the parameter
// I first added the string to the doubleStr variable
// Then I used a conditional statement saying that if the string value
// is equal to the string value, then it adds it a second time
// After everything was doubled, I returned doubleStr
function doubleChar(str) {
  let doubleStr = "";

  for(let i = 0; i < str.length; i++) {
    doubleStr += str[i];
    if (str[i] === str[i]) {
      doubleStr += str[i];
    }
  }
  return doubleStr;
}