/*
In this kata you have to find whether same elements of the string are grouped together.

Example

Input	Output
112233	true
11223311	false

Explanation
In first example same elements are grouped together: (11)(22)(33), hence it should return true
In the second example there are two different groups of 1's: (11)2233(11), hence it should return false

const isConsecutive = (str) => {
//Let's do it...
}
*/

// Answer:
// If the string length is less than or equal to 1, I return true.
// I then created a seen variable to track numbers whose groups have already appeared.
// I also created a prev variable to serve as a bookmark for the previous value.
// I loop through the string and create a current variable to track the value at each step.
// If the numbers are the same, the loop keeps going; if they are different, I check seen.
// If current is already in seen, I return false; if not, I add prev to seen and update prev.
// After the loop, I add the final prev value to seen and return true.
const isConsecutive = (str) => {
  if (str.length <= 1) {
    return true;
  }

  const seen = new Set();
  let prev = str[0];

  for(let i = 1; i < str.length; i++) {
    const current = str[i];

    if (current !== prev) {
      if (seen.has(current)) {
        return false;
      }
      seen.add(prev);
      prev = current;
    }
  }
  seen.add(prev);
  return true;
}