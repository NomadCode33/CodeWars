/*
There was a test in your class and you passed it. Congratulations!

But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return true if you're better, else false!

Note:
Your points are not included in the array of your class's points. Do not forget them when calculating the average score!

function betterThanAverage(classPoints, yourPoints) {
  // Your code here
}
*/

// Answer:
// I first need to get the average of points from the class
// I created the sum variable to hold the sum value
// I then used the forEach method to go through the array to add values in sum
// Then I got calculated the average from the sum and the length of the classPoints array
// Finally, I compared if yourPoints is greater than the average
function betterThanAverage(classPoints, yourPoints) {
  let sum = 0;
  
  classPoints.forEach((num) => {
    sum += num;
  })

  let avg = sum / classPoints.length;
  
  if (yourPoints > avg) {
    return true;
  } else {
    return false;
  }
}