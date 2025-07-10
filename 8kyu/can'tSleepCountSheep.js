/*
If you can't sleep, just count sheeps!!

Task:
Given a non-negative integer, 3 for example, return a string 
with a murmur: "1 sheep...2 sheep...3 sheep...". Input will 
always be valid, i.e. no negative integers.

var countSheep = function (num){
  //your code here
}
*/

// Answer:
// I first created a variable that holds an empty string to hold string values
// I used a for loop to loop through the values starting from 1 to the cap of 
// the num parameter passed in
// I used an if statement that if num > 0 then it adds a sheep to the sheep variable
// This is so that negative numbers can go through
var countSheep = function (num){
  let sheep = "";
  for(let i = 1; i <= num; i++) {
    if (num > 0) {
      sheep += `${i} sheep...`
    }
  }
  return sheep;
}