/*
  Difficulty: Easy
  The Fibonacci sequence is defined as follows: the first number of the sequence
  is 0, the second number is 1, and the nth number is the sum of the (n - 1)th
  and (n - 2)th numbers. Write a function that takes in an integer n and returns the nth Fibonacci number.
  Important note: the Fibonacci sequence is often defined with its first two
  numbers as F0 = 0 and F1 = 1. For the purpose of
  this question, the first Fibonacci number is F0; therefore,
  getNthFib(1) is equal to F0, getNthFib(2)
  is equal to F1, etc..

  Sample Input 
  n=2 
  Sample Output 
  1

  Sample Input # 2 
  n=6
  Sample Output #2
  5
*/

/*
Method 1 - Recursion with base case of n===1 and n===2
TC: O(2n)
SC: O(n)
*/
function getNthFib(n) {
  if (n === 1) {
    return 0;
  }
  if (n === 2) {
    return 1;
  }
  let smallerFib = getNthFib(n - 2);
  let biggerFib = getNthFib(n - 1);
  return smallerFib + biggerFib;
}

/*
Method 2 - iterative solution
TC: O(n)
SC: O(1)
*/
function getNthFib2(n) {
  // Write your code here.
  let smallerFib = 0; //fibonacci for number 1
  let biggerFib = 1; //fibonacci for number 2

  if (n === 1) {
    return smallerFib;
  }
  if (n === 2) {
    return biggerFib;
  }

  for (let i = 3; i < n; i++) {
    let currentSmallerFib = smallerFib;
    smallerFib = biggerFib;
    biggerFib = biggerFib + currentSmallerFib;
  }

  return smallerFib + biggerFib;
}

/*
Method 3 - Memoization, keeping track of previous calculation values to save runtime 
TC: O(n)
SC: O(n)
*/

function createMemo() {
  let cache = { 1: 0, 2: 1 };
  return function queryCache(num) {
    if (cache[num] !== undefined) {
      return cache[num];
    } else {
      cache[num] = cache[num - 1] + cache[num - 2];
      return cache[num];
    }
  };
}
let myMemo = createMemo();

function getNthFib3(n) {
  // Write your code here.

  for (let i = 0; i <= n; i++) {
    let result = myMemo(i);
    if (i === n) {
      return result;
    }
  }
}
