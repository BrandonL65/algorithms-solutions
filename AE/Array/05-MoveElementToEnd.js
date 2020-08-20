/*
  Difficulty: Medium
  You're given an array of integers and an integer. Write a function that moves
  all instances of that integer in the array to the end of the array and returns
  the array.

  The function should perform this in place (i.e., it should mutate the input
  array) and doesn't need to maintain the order of the other integers.

  Sample Input 
  array = [2, 1, 2, 2, 2, 3, 4, 2]
  toMove=2

  SampleOutput 
  [1, 3, 4, 2, 2, 2, 2, 2] 
*/

/*
Method 1: Have an index keeping track of end of array, and keep swapping when you find something equal to the integer 
TC: O(n)
SC: O(1)
*/
function moveElementToEnd(array, toMove) {
  let arrayEndIdx = array.length - 1;
  let i = 0;

  while (i < arrayEndIdx) {
    if (array[i] === toMove) {
      let currentValue = array[i];
      array[i] = array[arrayEndIdx];
      array[arrayEndIdx] = currentValue;
      arrayEndIdx--;
      i--;
    }
    i++;
  }
  return array;
}
