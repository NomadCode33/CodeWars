/*
The year is 2060, and Tim is a domestic robot within a UK household. He often 
hears the humans philosophising thus - "Beer before wine, you'll be fine; Wine before 
beer, oh dear." He needs your help in testing this logic for himself.

You will be given an array of numbers, each value representing the alcoholic percentage 
of a certain drink. Using the following set of rules, write a function that can give an 
accurate outcome for the sequence of drinks.

Drinks:

Any value equal to or less than 8 represents beer / Beer <= 8

Any value over 15 represents liquor / Liquor > 15

Any other value (so, more than 8, but less than or equal to 15), represents wine / 8 < Wine <= 15

Outcome:

If wine does not precede beer, and there's no instance of liquor, return "Fine".

If wine does not precede beer, but liquor IS present, return "Wonky robot".

If wine DOES precede beer, but there is no instance of liquor, return "Oh dear".

And if wine does precede beer, and liquor IS present, then return "Poor robot".

Example:

  let arr = [2.5, 4, 6, 8, 14]
  thirstyRobot(arr) should return "Fine"

  let arr = [2.5, 40, 6, 8, 14, 6]
  thirstyRobot(arr) should return "Poor robot"
Notes:

Only positive numbers will be passed into the function.

function thirstyRobot(arr){
  // happy coding!   

}
*/

// Answer:
// I set the initial states of seenWine, wineBeforeBeer, and hasLiquor variables all equal to false
// I looped the arr using for of(values) and not for in(index) and plugged in drink into the
// alcoholType helper function to generate the return values for the types of alcohol we're working with
// I then used conditonals to see if there are any instances of wine, liquor, and whether if wine was before beer
// After the loop concluded, I then used conditonals to fulfill the specified parameters
function thirstyRobot(arr) {
    let seenWine = false;
    let wineBeforeBeer = false;
    let hasLiquor = false;

    for (let drink of arr) {
      let type = alcoholType(drink);

      if (type === "Wine") {
        seenWine = true;
      } else if (type === "Liquor") {
        hasLiquor = true;
      }

      if (type === "Beer" && seenWine === true) {
        wineBeforeBeer = true;
      }
    }

    // The ! makes it opposite from initial assignment
    // So if the variable was set to false, then with the ! it becomes true
    if (!wineBeforeBeer && !hasLiquor) {
        return "Fine";
    } else if (!wineBeforeBeer && hasLiquor) {
        return "Wonky robot";
    } else if (wineBeforeBeer && !hasLiquor) {
        return "Oh dear";
    } else {
        return "Poor robot";
    }
}

// It does the logic of turning values into different alcohol types
// If number is less than or equal to 8, then it's "Beer"
// If number is greater than 8 and less than or equal to 15, then it's "Wine"
// If number is greater than 15, then it's Liquor
function alcoholType(num) {
  if (num <= 8) {
    return "Beer";
  } else if (num > 8 && num <= 15) {
    return "Wine";
  } else {
    return "Liquor";
  }
}