/*
Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, 
he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return 
the number of litres Nathan will drink, rounded down.

function litres(time) {
  return 0;
}
*/

// Answer:
// To get the number of litres Nathan drinks, I must multiply time and 0.5.
// To get the number rounded down, I had to use Math.floor(). Math.round()
// only rounds the number to the nearest whole number since any number .5 or
// up rounds up. Floor forces it down, even if any number is 0.5
function litres(time) {
  return Math.floor(time * 0.5);
}