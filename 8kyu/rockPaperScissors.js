/*
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
};
*/

// Answer:
// Using conditionals, I made sure that the respective player won
// If either player chose rock & scissors, paper & paper, and scissors & paper
// then the respective player will win
// If they tied, then the else statement would return "Draw" since it doesn't 
// match either statement in the if and else if statements
const rps = (p1, p2) => {
  if ((p1 === "rock" && p2 === "scissors") ||
    (p1 === "paper" && p2 === "rock") ||
    (p1 === "scissors" && p2 === "paper")) {
    return 'Player 1 won!';
  } else if ((p2 === "rock" && p1 === "scissors") ||
    (p2 === "paper" && p1 === "rock") ||
    (p2 === "scissors" && p1 === "paper")) {
    return 'Player 2 won!';
  } else {
    return `Draw!`;
  }
};