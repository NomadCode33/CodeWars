/*
Your classmates asked you to copy some paperwork for them. 
You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. 
If n < 0 or m < 0 return 0.

function paperwork(n, m) {
  
}
*/

// Answer:
// This answer involved some simple arithmetic in just mutliplying n * m
// It mutliplies both the number of students to the number of paperwork for each student
// However, we have take account a case to prevent having negative papers
// You can't have negative papers lest that ruins the calculation so
// (n < 0 || m < 0) prevents that from happening
function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0;
  } else {
    return n * m;
  }
}