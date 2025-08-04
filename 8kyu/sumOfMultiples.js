/*
Find the sum of all multiples of n below m

Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples

Examples
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"

function sumMul(n,m){
//your idea here
}
*/

// Answer:
// Before going into the loop, I do a check to see if m is less than or equal to 0
// Then I created a sum variable set to 0 to add the numbers from the for loop below
// I make i equal to n, have the loop be less than m, and have the increments go up by n
// In the for loop it will add the value of i in the sum variable and return sum
function sumMul(n,m){
  if (m <= 0) {
    return 'INVALID';
  }
  
  let sum = 0;
  for(let i = n; i < m; i += n) {
    sum += i;
  }
  return sum;
}