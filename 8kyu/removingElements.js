/*
Take an array and remove every second element from the array. 
Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr){
  //your code here
}
*/

// Answer:
// We need to remove every second element from the array
// The best way to do that is through the filter method
// Each 2nd element is always at an odd index
// So filter needs to take the even indexes and return them
function removeEveryOther(arr){
  let filter = arr.filter((n,i) => i % 2 === 0);
  return filter;
}