/*
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
function bmi(weight, height) {
  return "";
}
*/

// Answer:
// I first calculated the bmi
// Then I used conditonals to compare the bmi to see if it fits the 
// criteria of the weight class
function bmi(weight, height) {
  const bmi = weight / (height**2);
  
  if (bmi <= 18.5) {
    return "Underweight";
  } else if (bmi <= 25.0) {
    return "Normal";
  } else if (bmi <= 30.0) {
    return "Overweight";
  } else {
    return "Obese";
  }
}