/*
You were camping with your friends far away from home, but when it's time
to go back, you realize that your fuel is running out and the nearest pump
is 50 miles away! You know that on average, your car runs on about 25 miles per gallon.
There are 2 gallons left.

Considering these factors, write a function that tells you if it is possible
to get to the pump or not.

Function should return true if it is possible and false if not.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
};
*/

// Answer:
// We need to compare whether the amount of gas left is able to make it to the pump
// I did a conditional seeing if the mpg and fuelLeft multiplied is greater than or equal
// to the distanceToPump. mpg and fuelLeft is the indicator to see whether we make it. If
// it's less than distanceToPump then the car stops.
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (mpg * fuelLeft >= distanceToPump) {
    return true;
  } else {
    return false;
  }
};