/*
Your task is to make two functions ( max and min, or maximum and 
minimum, etc., depending on the language ) that receive a list of
integers as input, and return the largest and lowest number in 
that list, respectively. Each function returns one number.

Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5
Notes
You may consider that there will not be any empty arrays/vectors.

var min = function(list){
    
    return list[0];
}

var max = function(list){
    
    return list[0];
}
*/

// Answer:
// To simply find the minimum and maximum in the list I did this one simple thing,
// I used the Math.min() and Math.max() to find those values
// Even though it was easy using only these Math functions won't do it alone since they
// are looking for a single value and can't search through arrays normally.
// However, by using ...list, it ensures that it will look through the entire array
// to find the min and max values
var min = function(list){
    return Math.min(...list);
}

var max = function(list){
    return Math.max(...list);
}