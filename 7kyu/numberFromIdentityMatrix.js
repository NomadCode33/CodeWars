/*
Given the size n of an identity matrix (I), find the number represented by the identity matrix values as its bits.

Examples:
Identity matrix of size 4:
1 0 0 0
0 1 0 0
0 0 1 0
0 0 0 1
should return 33825

Explanation: 1000_0100_0010_0001 -> 33825

Identity matrix of size 2:
1 0
0 1
should return 9

Explanation: 10_01 -> 1x(2^0) + 1x(2^3) = 9

Limits:
0 < n < 65
length code <= 1024

function solve(n) {
  return 0n;
}
*/

// Answer:
// I have to find the number represented by an identity matrix of size n
// Each diagonal 1 becomes a bit in a BigInt, with position i\*(n+1) for row i
// I loop from i = 0 to n-1, shifting 1n left by i\*(n+1)
// I add each shifted value to the result to set all diagonal bits
// The final BigInt is the number formed by flattening the matrix row by row
function solve(n) {
  let result = 0n;
  for (let i = 0n; i < BigInt(n); i++) {
    result += 1n << (i * (BigInt(n) + 1n)); // 2^(i*(n+1))
  }
  return result;
}