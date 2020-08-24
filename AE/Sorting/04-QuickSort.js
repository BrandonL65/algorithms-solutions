/*
  Difficulty: Hard
  Write a function that takes in an array of integers and returns a sorted
  version of that array. Use the Quick Sort algorithm to sort the array.
  If you're unfamiliar with Quick Sort, we recommend watching the Conceptual
  Overview section of this question's video explanation before starting to code.

  Sample Input 
  array = [8, 5, 2, 9, 5, 6, 3]

  Sample Output 
  [2, 3, 5, 5, 6, 8, 9]
*/

/*
Method 1 - QuickSort
TC: Best/Average: O(nlogn), Worst: O(n^2)
SC: Best/Average/Worst: O(logn)

-Make pivot the last index of the array, this is the digit that will be in order at the end of the loop.
-Have a pointer called swapIndex at the left side of array, and loop using i once.
- If array[i] < array[pivot], you swap swapIndex and i, and increment i.
- At the end, do one final swap of swapIndex and pivot, then you have one in order.
- Divide the remaining array into two halves, leftHalf and rightHalf.
- Call quickSortHelper on both sides of the array, with the base case being array.length - 1, return array
- function will return [...leftHalf, array[swapIndex], ...rightHalf]
*/
function quickSort(array) {
  // Write your code here.
  return quickSortHelper(array);
}
function quickSortHelper(array) {
  if (array.length <= 1) {
    return array;
  }

  let pivot = array.length - 1;
  let swapIndex = 0;
  for (let i = 0; i < pivot; i++) {
    if (array[i] < array[pivot]) {
      swap(array, i, swapIndex);
      swapIndex++;
    }
  }
  swap(array, swapIndex, pivot);
  let leftSide = quickSortHelper(array.slice(0, swapIndex));
  let rightSide = quickSortHelper(array.slice(swapIndex + 1));
  console.log(array, leftSide, rightSide);
  return [...leftSide, array[swapIndex], ...rightSide];
}

const swap = (arr, idxOne, idxTwo) => {
  let firstVal = arr[idxOne];
  arr[idxOne] = arr[idxTwo];
  arr[idxTwo] = firstVal;
};
