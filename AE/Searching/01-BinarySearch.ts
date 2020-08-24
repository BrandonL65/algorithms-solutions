/*
  Difficulty: Easy
  Write a function that takes in a sorted array of integers as well as a target
  integer. The function should use the Binary Search algorithm to determine if
  the target integer is contained in the array and should return its index if it
  is, otherwise 
  If you're unfamiliar with Binary Search, we recommend watching the Conceptual
  Overview section of this question's video explanation before starting to code.

  Sample Input 
  array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]
  target = 33

  Sample Output 
  3
*/

/*
Method 1 - Recursively 
TC: O(logn)
SC: O(logn)
- Have a helper function that keeps checking if the middle of Math.floor(left+right)/2 is equal to the target. If it is, return the middle Index
- The base case is that if left > right, then the target is not in the array, and return -1
- If target > middle or < middle, we return binarySearchHelper with the updated left and right
*/
export function binarySearch(array: number[], target: number): number {
  // Write your code here.
  let answer: number = binarySearchHelper(array, target, 0, array.length - 1);
  return answer;
}

const binarySearchHelper = (
  arr: number[],
  target: number,
  left: number,
  right: number
): number => {
  if (left > right) {
    return -1;
  }

  let middleIdx = Math.floor((left + right) / 2);
  if (arr[middleIdx] === target) {
    return middleIdx;
  } else if (arr[middleIdx] < target) {
    return binarySearchHelper(arr, target, middleIdx + 1, right);
  } else {
    return binarySearchHelper(arr, target, left, middleIdx - 1);
  }
};

/*
Method 2 - Iteratively
TC: O(logn)
SC: O(1)
- Very similar to the recursive method, but instead of recursively calling the function, we simply update left and right within our while loop
*/

export function binarySearch2(array: number[], target: number): number {
  let answer = binarySearchHelper2(array, target, 0, array.length - 1);
  return answer;
}

const binarySearchHelper2 = (
  array: number[],
  target: number,
  left: number,
  right: number
) => {
  while (left <= right) {
    let middleIndex = Math.floor((left + right) / 2);
    let middleValue = array[middleIndex];
    if (middleValue === target) {
      return middleIndex;
    } else if (middleValue < target) {
      left = middleIndex + 1;
    } else {
      right = middleIndex - 1;
    }
  }
  return -1;
};
