/*

  Write a function that takes in an array of integers and returns a sorted
  version of that array. Use the Bubble Sort algorithm to sort the array.
  If you're unfamiliar with Bubble Sort, we recommend watching the Conceptual
  Overview section of this question's video explanation before starting to code.

  Sample Input 
  array = [8, 5, 2, 9, 5, 6, 3]

  Sample Output 
  [2, 3, 5, 5, 6, 8, 9]
*/

/*
Method 1: Nested loop
TC: O(n^2);
SC: O(1)
- have an endIdx initially pointing to end of array. Everything after the endIdx is SORTED
- have an isSorted boolean just in case the array is already sorted prematurely, to eliminate unnecessary loops 
- while endIdx > 0 and isSorted is false, we loop from 0 to endIdx, and swap values if array[i] < array[i+1]
*/

function bubbleSort(array) {
  let endIdx = array.length - 1;
  let isSorted = false;

  while (endIdx > 0 && !isSorted) {
    isSorted = true;
    for (let i = 0; i <= endIdx; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        isSorted = false;
      }
    }
    endIdx--;
  }
  return array;
}

const swap = (arr, idxOne, idxTwo) => {
  let firstVal = arr[idxOne];
  arr[idxOne] = arr[idxTwo];
  arr[idxTwo] = firstVal;
};
