/*
Four Number Sum
Difficulty: Hard


  Write a function that takes in a non-empty array of distinct integers and an
  integer representing a target sum. The function should find all quadruplets in
  the array that sum up to the target sum and return a two-dimensional array of
  all these quadruplets in no particular order.
  If no four numbers sum up to the target sum, the function should return an
  empty array.

  Sample Input
  array = [7, 6, 4, -1, 1, 2]
  targetSum = 16

  Sample Output
  [[7, 6, 4, -1], [7, 6, 1, 2]] 
  // the quadruplets could be ordered differently
*/

/*
Method 1, Have three loops inside eachother, so the runtime is O(n^3);
TC: O(n^3)
SC: O(n)
*/

const fourNumberSum = (array: number[], targetSum: number) => {
  array.sort((a, b) => a - b);

  let answer: Array<Array<number>> = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let leftPointer = j + 1;
      let rightPointer = array.length - 1;

      while (leftPointer < rightPointer) {
        let total =
          array[i] + array[j] + array[leftPointer] + array[rightPointer];
        if (total === targetSum) {
          answer.push([
            array[i],
            array[j],
            array[leftPointer],
            array[rightPointer],
          ]);
          leftPointer++;
          rightPointer--;
        } else if (total < targetSum) {
          leftPointer++;
        } else {
          rightPointer--;
        }
      }
    }
  }
  return answer;
};
