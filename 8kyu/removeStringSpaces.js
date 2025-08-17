/*
Write a function that removes the spaces from the string, then return the resultant string.

function noSpace(x){

}
*/

// Answer:
// To get everything together with no spaces, split() and join()
// are needed. Split() creates an array at every space, join()
// allows us to bring the arrays together with no separator.

function noSpace(x){
    return x.split(' ').join('');
}