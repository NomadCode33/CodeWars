/*
Write a function that takes an array of words and smashes them together
into a sentence and returns the sentence. You can ignore any need to 
sanitize words or add punctuation, but you should add spaces between 
each word. Be careful, there shouldn't be a space at the beginning or
the end of the sentence!

function smash (words) {
  
}
*/

// Answer:
// I started with a variable with an empty string to hold the values in the array
// The quotes must be closed in order to not have unnecessary spaces
// I used a for loop to loop through the array and add the word to sentence
// While still on the same index in the loop, the if statement sees that if i (the current index)
// Is less than the last index with the final word (words.length - 1), then add a space
// It continues until the last word is put down
// Since the last index can't be less than itself, it doesn't add the space
function smash (words) {
  let sentence = ''; 
  for(i = 0; i < words.length; i++) {
    sentence += words[i];
    if (i < words.length - 1) {
      sentence += ' '; //adds spaces between words
    }
  }
  return sentence;
}