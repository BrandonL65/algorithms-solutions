/*
  Difficulty: Medium

  Write a function that takes in an array of positive integers and returns the
  maximum sum of non-adjacent elements in the array.
  If a sum can't be generated, the function should return 0.
  
  Sample Input
  array = [75, 105, 120, 75, 90, 135]

  Sample Output
  330, which is 75+120+135
*/

/*
Method 1 - Using an array to keep track of largest
TC: O(n)
SC: O(n)
- Have an array of same length as input arr that tracks the largest values over time 
- Iterate through original array. If i is 0, that corresponding value is just array[i].
- If i is 1, then its the bigger value of array[i] and max[i-1], aka the biggest value of the two
- For every other i value, the corresponding value at same idx in the max arr is the Math.max value of max[i-1] or max[i-2] + array[i];
- At the end, return the value at the last idx of MaxArray, since that value is the largest generated from non corresponding elements
*/

const maxSubsetSumNoAdjacent = (arr: number[]) => {
  if (arr.length < 1) {
    return 0;
  }

  let maxTracker: number[] = new Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      maxTracker[i] = arr[i];
      continue;
    } else if (i === 1) {
      maxTracker[i] = Math.max(arr[i], maxTracker[i - 1]);
      continue;
    } else {
      maxTracker[i] = Math.max(maxTracker[i - 1], maxTracker[i - 2] + arr[i]);
    }
  }

  return maxTracker[maxTracker.length - 1];
};
