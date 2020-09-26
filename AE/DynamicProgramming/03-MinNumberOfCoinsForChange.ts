/*
  Min Number Of Coins For Change

  Difficulty: Medium

  Given an array of positive integers representing coin denominations and a
  single non-negative integer n representing a target amount of
  money, write a function that returns the smallest number of coins needed to
  make change for (to sum up to) that target amount using the given coin
  denominations.
  Note that you have access to an unlimited amount of coins. In other words, if
  the denominations are [1, 5, 10], you have access to an unlimited
  amount of 1s, 5s, and 10s.
  If it's impossible to make change for the target amount, return -1.

  Sample Input 
  n=7
  denoms = [1,5,10]

  Sample Output 
  3, 2x1 + 1x5
*/

/*
Method 1
TC: O(n*d);
SC: O(n)

First, we create an array that tracks the number of coins needed for each coin total. The coin total will be expressed by the array index. For example,
array of index 3 will hold the min coins needed for a total of 3. We initialize the first idx, 0, to 0, because there are 0 ways to sum to 0 coins. 

We then loop through all the denoms, and for each denom, we loop through our array. If the denom value is less than the idx, the array[idx] will
become the min of what it is currently, or the index of idx-denom+1. 

We choose idx-denom+1 because it we subtract the current Denom, which is 1 coin, and we find whatever is left over, which is the value at idx idx-denom.
*/

function minNumberOfCoinsForChange(n: number, denoms: number[]) {
  let minNumberTracker: number[] = new Array(n + 1).fill(Infinity);
  minNumberTracker[0] = 0;

  for (let i = 0; i < denoms.length; i++) {
    let currentDenom = denoms[i];

    for (let amount = 0; amount < minNumberTracker.length; amount++) {
      if (currentDenom < amount) {
        minNumberTracker[amount] = Math.min(
          minNumberTracker[amount],
          minNumberTracker[amount - currentDenom] + 1
        );
      }
    }
  }

  let minNumberOfCoinsNeededForTarget =
    minNumberTracker[minNumberTracker.length - 1];
  if (minNumberOfCoinsNeededForTarget === Infinity) {
    return -1;
  }
  return minNumberOfCoinsNeededForTarget;
}
