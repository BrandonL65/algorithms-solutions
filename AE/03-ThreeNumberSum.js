/*

  Write a function that takes in a non-empty array of distinct integers and an
  integer representing a target sum. The function should find all triplets in
  the array that sum up to the target sum and return a two-dimensional array of
  all these triplets. The numbers in each triplet should be ordered in ascending
  order, and the triplets themselves should be ordered in ascending order with
  respect to the numbers they hold.

  If no three numbers sum up to the target sum, the function should return an
  empty array.

  Sample Input
  array = [12, 3, 1, 2, -6, 5, -8, 6]
  targetSum = 0

  Sample Output 
  [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
*/

// Solution 1  - loop over sorted Array, and have left and right pointers to compare values
function threeNumberSum(arr, targetSum) {
  let allTargetSums = [];

  array.sort((a, b) => a - b);

  for (let i = 0; i < array.length; i++) {
    let leftPointer = i + 1;
    let rightPointer = array.length - 1;
    while (leftPointer < rightPointer) {
      let total = array[i] + array[leftPointer] + array[rightPointer];
      if (total === targetSum) {
        allTargetSums.push([array[i], array[leftPointer], array[rightPointer]]);
        leftPointer++;
        rightPointer--;
      } else if (total < targetSum) {
        leftPointer++;
      } else {
        rightPointer--;
      }
    }
  }
  return allTargetSums;
}
