/*
Non-Constructible Change
Difficulty: Easy


  Given an array of positive integers representing the values of coins in your
  possession, write a function that returns the minimum amount of change (the
  minimum sum of money) that you cannot create. The given coins can have
  any positive integer value and aren't necessarily unique (i.e., you can have
  multiple coins of the same value).
  For example, if you're given coins = [1, 2, 5], the minimum
  amount of change that you can't create is 4. If you're given no
  coins, the minimum amount of change that you can't create is 1.
  
  Sample Input
  coins = [5, 7, 1, 1, 2, 3, 22]

  Sample Output
  20
  
*/

/*
Method 1
TC: O(nlogn)
SC: O(1)

coins = [1,2,3,5,13]

loop through and see possible coins made: 
1
2 3 
3 4 5 6
5 6 7 8 9 10 11
13 <- problem coin, we cannot make 12 yet...
*/

function nonConstructibleChange(coins: number[]) {
  coins.sort((a, b) => a - b);

  let currentPossibleChange = 0;
  for (let coin of coins) {
    if (coin > currentPossibleChange + 1) {
      return currentPossibleChange + 1;
    }
    currentPossibleChange += coin;
  }

  return currentPossibleChange + 1;
}
