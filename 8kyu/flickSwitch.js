/*
Create a function that always returns True/true for every item in a given list.
However, if an element is the word 'flick', switch to always returning the opposite boolean value.

Examples
['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
Notes
"flick" will always be given in lowercase.
A list may contain multiple flicks.
Switch the boolean value on the same element as the flick itself.

function flickSwitch(arr){
  return [];
}
*/

// Answer:
// I first had to have a check on whether if the array has elements in it
// Then I created a boolean variable with an empty variable
// After I created a toggle variable and set it to true
// I made a for loop and if the element is flick, then it toggles to false
function flickSwitch(arr){
  if (arr.length === 0) {
    return [];
  }
  
  const boolean = [];
  let toggle = true;
  for(let i = 0; i < arr.length; i++) {
    // If flick, swtich toggle
    if (arr[i] === 'flick') {
      toggle = !toggle;
    }
    boolean.push(toggle)
  }
  return boolean;
}