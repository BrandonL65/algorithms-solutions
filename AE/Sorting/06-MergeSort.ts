/*

  Write a function that takes in an array of integers and returns a sorted
  version of that array. Use the Merge Sort algorithm to sort the array.
  If you're unfamiliar with Merge Sort, we recommend watching the Conceptual
  Overview section of this question's video explanation before starting to code.

  Sample Input 
  array = [8, 5, 2, 9, 5, 6, 3]

  Sample Output 
  [2, 3, 5, 5, 6, 8, 9]
*/

/*
Method 1: Merge Sort
TC: O(nlogn)
SC: O(nlogn)
- Have a helper method called mergeSortHelper that has a base case of if array.length <= 1, return the array 
- Split the array into two halves, and call mergeSortHelper on both of them
- Have a function called merge that merges both halves of the arrays that had mergeSortHelper called on
- The merge function sorts the two arrays it receives as parameters
- mergeSortHelper should return merge(leftHalf, rightHalf)
*/

function mergeSort(array: number[]) {
  let answer = mergeSortHelper(array);
  return answer;
}

const mergeSortHelper = (array: number[]) => {
  if (array.length <= 1) {
    return array;
  }

  let leftHalf: number[] = mergeSortHelper(array.slice(0, array.length / 2));
  let rightHalf: number[] = mergeSortHelper(array.slice(array.length / 2));

  return merge(leftHalf, rightHalf);
};

const merge = (arrOne: number[], arrTwo: number[]) => {
  let arrOneIdx = 0;
  let arrTwoIdx = 0;
  let sorted: number[] = [];

  while (arrOneIdx < arrOne.length && arrTwoIdx < arrTwo.length) {
    if (arrOne[arrOneIdx] < arrTwo[arrTwoIdx]) {
      sorted.push(arrOne[arrOneIdx]);
      arrOneIdx++;
    } else {
      sorted.push(arrTwo[arrTwoIdx]);
      arrTwoIdx++;
    }
  }

  if (arrOneIdx < arrOne.length) {
    sorted.push(...arrOne.slice(arrOneIdx));
  }
  if (arrTwoIdx < arrTwo.length) {
    sorted.push(...arrTwo.slice(arrTwoIdx));
  }
  return sorted;
};
