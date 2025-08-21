/*
Write a function that takes an array of numbers and returns
the sum of the numbers. The numbers can be negative or non-integer.
If the array does not contain any numbers then you should return 0.

function sum (numbers) {
  return 0
}
*/

// Answer:
// I just did the usual for adding arrays using the sum variable to hold the sum value
// and using the for loop to cycle through the array to add up the values. This time
// however we have a caveat to return 0 if the array if empty. I used the if condition
// stating that if the length of the array if 0, then it should return 0

function sum(numbers) {
    let sum = 0;
    for(i = 0; i < numbers.length; i++) {
        if (numbers.length === 0) {
            return 0;
        } else {
            sum += numbers[i];
        }
    }
    return sum;
}