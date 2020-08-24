/*
  Difficulty: Easy
  Write a function that takes in an array of integers and returns a sorted
  version of that array. Use the Selection Sort algorithm to sort the array.

  If you're unfamiliar with Selection Sort, we recommend watching the Conceptual
  Overview section of this question's video explanation before starting to code.

  Sample Input 
  array = [8, 5, 2, 9, 5, 6, 3]

  Sample Output
  [2, 3, 5, 5, 6, 8, 9]
*/

/*
Method 1 - Selection sort
TC: O(n^2)
SC: O(1)
- Selection Sort works by having a nested loop that both runs to the end of the array
- For each iteration of the nested loop, you find the smallest element smaller than the current idx value of the outer loop
- At the end of the inner loop, you swap the element at outer loop with the smallest element smaller it 
*/

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let smallestValue = array[i];
    let smallestValueIdx = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < smallestValue) {
        smallestValue = array[j];
        smallestValueIdx = j;
      }
    }
    let currentValue = array[i];
    array[i] = array[smallestValueIdx];
    array[smallestValueIdx] = currentValue;
  }
  return array;
}
