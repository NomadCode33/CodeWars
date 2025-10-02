/*
Given a month as an integer from 1 to 12, return to which 
quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; 
month 6 (June), is part of the second quarter; and month 11 (November), 
is part of the fourth quarter.

Constraint:

1 <= month <= 12

const quarterOf = (month) => {
  // Your code here
  
}
*/

// Answer:
// We need to see which month corresponds to which quarter of the year
// Months 1-3 is quarter 1
// Months 4-6 is quarter 2
// Months 7-9 is quarter 3
// And months 10-12 is quarter 4
// Using the the conditional statement, if months is less than or equal
// to the corresponding month and category, then it returns the appropriate quarter
const quarterOf = (month) => {
  if (month <= 3) {
    return 1;
  } else if (month <= 6) {
    return 2;
  } else if (month <= 9) {
    return 3;
  } else {
    return 4;
  } 
}