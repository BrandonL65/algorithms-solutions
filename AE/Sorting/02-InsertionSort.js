/*
  Difficulty: Easy
  Write a function that takes in an array of integers and returns a sorted
  version of that array. Use the Insertion Sort algorithm to sort the array.
  If you're unfamiliar with Insertion Sort, we recommend watching the Conceptual
  Overview section of this question's video explanation before starting to code.

  Sample Input 
  array = [8, 5, 2, 9, 5, 6, 3]

  Sample Output 
  [2, 3, 5, 5, 6, 8, 9]
*/

/*
Method 1 - Insertion Sort
TC: O(n^2)
SC: O(1)
- Insertion Sort works by having a loop and a nested loop. For each outer loop, you loop from the outer loop index back to 0, and "insert" the value
- Therefore, everything behind the current outer loop index is sorted. You "insert"/swap the values of the inner loop until you encounter a value that is less than the inner loop array[idx]
- Then, you would know that every value after that is smaller. 
https://visualgo.net/bn/sorting
*/

function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j >= 0 && array[j] < array[j - 1]; j--) {
      if (array[j] < array[j - 1]) {
        let prevValue = array[j - 1];
        array[j - 1] = array[j];
        array[j] = prevValue;
      }
    }
  }
  return array;
}
