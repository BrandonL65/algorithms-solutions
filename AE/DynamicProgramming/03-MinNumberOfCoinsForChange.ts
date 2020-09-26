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
