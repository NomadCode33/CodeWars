/*
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

function findNeedle(haystack) {
  // your code here
}
*/

// Answer:
// Even though we know that 'needle' is in the haystack, we also need to 
// make sure it's in the array we're looking at
// A conditional checks to see if 'needle' is in the haystack
// If it is, then we return the index location of 'needle' using .indexOf()
function findNeedle(haystack) {
  if (haystack.includes('needle')) {
    return `found the needle at position ${haystack.indexOf('needle')}`
  }
}