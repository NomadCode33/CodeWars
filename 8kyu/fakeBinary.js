/*
Given a string of digits, you should replace any digit below 
5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string

function fakeBin(x){

}
*/

// Answer:
// I first had to split the string array and later converted it to Number using map
// Using the for loop, I looped through every index of the array
// If the number is greater than or equal to 5, then the number is reassigned to 1
// If less than 5, the number is reassigned to 0
// I then converted the numArray into a String and joined the array back together
// Then I reassigned the value of strArray to the numArray and returned the string values
function fakeBin(x){
  let strArray = x.split('');
  let numArray = strArray.map(Number);
  console.log(numArray);
  
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] >= 5) {
      numArray[i] = 1; 
      console.log(numArray)
    } else {
      numArray[i] = 0;
    }
  }
  
  numArray = numArray.map(String).join('');
  strArray = numArray;
  console.log(strArray);
  
  return strArray;
}
