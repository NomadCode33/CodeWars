/*
A hero is on his way to the castle to complete his mission. 
However, he's been told that the castle is surrounded with a couple 
of powerful dragons! each dragon takes 2 bullets to be defeated, our 
hero has no idea how many bullets he should carry.. Assuming he's 
gonna grab a specific given number of bullets and move forward to 
fight another specific given number of dragons, will he survive?

Return true if yes, false otherwise :)
*/

// Answer:
// We know that it takes 2 bullets to slay 1 dragon
// If the hero has enough bullets to get through all the dragons then he survives
// We use a conditonal multiplying dragons by 2 to see if the hero is enough bullets
// to get through
function hero(bullets, dragons){
  if (bullets >= (dragons * 2)) {
    return true;
  } else {
    return false;
  }
}