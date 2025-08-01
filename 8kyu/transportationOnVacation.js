/*
After a hard quarter in the office you decide to get 
some rest on a vacation. So you will book a flight for you
and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around 
in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 
7 or more days, you get $50 off your total. Alternatively, if 
you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).
function rentalCarCost(d) {
  // Your solution here
}
*/

// Answer:
// Solving this requires conditional statements
// If 7 or more days, then $50 is subtracted from the total (d * 40) - 50
// If 3 or more days, then $20 is subtracted from the total (d * 40) - 20
// If not either of these deals, then calulate the total normally (d * 40)
function rentalCarCost(d) {
  if (d >= 7) {
    return (d * 40) - 50;
  } else if (d >= 3) {
    return (d * 40) - 20;
  } else {
    return d * 40;
  }
}