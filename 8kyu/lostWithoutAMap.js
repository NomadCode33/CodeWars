/*
Given an array of integers, return a new array with each value doubled.

function maps(x){
}
*/ 

// Answer
// To get the array of the numbers doubled
// I made newArray to hold the values and used a for loop to 
// cycle through all the values of the array and multipied them by 2.
// The new values are pushed into newArray and returned

function maps(x){
  let newArray = [];
  for(i = 0; i < x.length; i++) {
    newArray.push(x[i] * 2);
  }
  return newArray
}