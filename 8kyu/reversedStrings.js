/*
Complete the solution so that it reverses the string passed into it

function solution(str){

}
*/

// Answer:
// In order to reverse the string, I had to turn the string into an array
// To turn the string into an array, I used .split() to separate them by spaces
// .reverse() to flip the elements of the array of str in place
// Then I used .join() to put them back together by a space
function solution(str){
  return str.split('').reverse().join('');
}

console.log(solution(str));