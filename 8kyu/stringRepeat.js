/*
Write a function that accepts a non-negative integer n and a string s 
as parameters, and returns a string of s repeated exactly n times.

function repeatStr (n, s) {
  return '';
}
*/

// Answer:
// To get this answer, I have to do something similar to when I want to
// add multiple integers into a variable. I first created str variable that
// is empty so the string values can be put in. The for loop starts at 1 with
// conditionExpression being less than or equal to n to be repeated a certain 
// number of times. I then add s to the str variable, and it repeats till the n
// hits the cap.


function repeatStr(n, s) {
    let str = '';
    for(i = 1; i <= n; i++) {
        str += s;
    }
    return str;
}

console.log(repeatStr(3, "*"))