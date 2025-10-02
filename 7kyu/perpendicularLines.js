/* You are given an input (n) which represents the amount of lines you are given.
Your job is to figure out what is the maximum amount of perpendicular bisectors
you can make using these lines.
function maxBisectors(n) {
  return 0;
}
*/

// Answer:
// I have to find the maximum number of perpendicular pairs, which is n
// I splits those two lines in two groups: one group vertical and one group horizontal
// Group sizes are k and n-k, pairs = k * (n-k)
// Product k * (n-k) is largest when k is close to n/2.
// So I split the lines as evenly as possible using Math.floor(n * n / 4)
function maxBisectors(n) {
  return Math.floor(n * n / 4);
}

/*
Solutions

Solution #1
const maxBisectors = (n) => n ** 2 / 4 | 0;

Solution #2
const maxBisectors = n =>
  Math.floor(n ** 2 / 4)

Solution #3
function maxBisectors(n) {
  if (n > 1) {
    return Math.ceil(n/2) * Math.floor(n/2);
  }
  return 0;
}

Solution #4
function maxBisectors(n) {
  return ~~(n/2)*Math.ceil(n/2);
}

Solution #5
const maxBisectors = n => (n - Math.ceil(n / 2)) * Math.ceil(n / 2);


Solution #6
function maxBisectors(n) {
  return (n - (n >> 1)) * (n >> 1);
}


Solution #7
function maxBisectors(n) {
  let a = ~~(n / 2);
  return Math.pow(a, 2) + (n % 2 !== 0 ? a : 0)
}

Solution #8
function maxBisectors(n) {
  const average = Math.floor(n/2);
  return (n - average) * average ;
}

Solution #9
function maxBisectors(n) {
  if(n==0 || n==1){return 0}
  let x=n/2
  if (x==Math.floor(x)){
    return x*x
  }else {
    return  (x+0.5)*(x-0.5)
  }
  return 0;
}

Solution #10
const maxBisectors = nrL => Math.ceil(nrL/2) * parseInt(nrL/2)

Solution #11
function maxBisectors(n) {
  let curr = 0, total = 0;
  for (let i = 0; i <= n; i += 2, curr++) {
    total += curr;
    if (i + 1 <= n) total += curr;
  }
  return total;
}

Solution #12
const maxBisectors = (n) => n ** 2 >>> 2;

Solution #13
function maxBisectors(n) {
  return (n - (n >> 1)) * (n >> 1);
}

Solution #14
function maxBisectors(n) {
   if (n < 2) return 0; // Нельзя создать перпендикуляр
  const h = Math.floor(n / 2);
  const v = Math.ceil(n / 2);
  return h * v;
}

Solution #15
maxBisectors=n=>~~(n/2)*~~(++n/2)
*/