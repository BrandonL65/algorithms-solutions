/*
  Number Of Ways To Make Change
  Difficulty: Medium


  Given an array of distinct positive integers representing coin denominations and a
  single non-negative integer n representing a target amount of
  money, write a function that returns the number of ways to make change for
  that target amount using the given coin denominations.
  Note that an unlimited amount of coins is at your disposal.

  Sample Input
  n=6
  denoms=[1,5]

  Sample Output 
  2, which is 1x1 + 1x5, and 1x6
*/

/*
  Method 1
  TC: O(n*d), where d is the # of denominations 
  SC: O(n)
*/

export function numberOfWaysToMakeChange(n: number, denoms: number[]) {
  //initialize the array we use as tracker. Each index is the total, and the
  //value is the # of ways we can make to that total
  let ways: number[] = new Array(n + 1).fill(0);

  //initialize our base case. # of ways to make 0 is 1 way
  ways[0] = 1;

  //iterate through all the denominations
  for (let i = 0; i < denoms.length; i++) {
    let currentCoin = denoms[i];

    //iterate through our ways array
    for (let j = 1; j < ways.length; j++) {
      //if currentCoin is less than the current idx, which is the value we want to add up to,
      if (currentCoin <= j) {
        ways[j] = ways[j] + ways[j - currentCoin];
      }
    }
  }

  return ways[ways.length - 1];
}
