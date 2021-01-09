/*
First Duplicate Value
Difficulty: Medium


  Given an array of integers between 1 and n ,
  inclusive, where n is the length of the array, write a function
  that returns the first integer that appears more than once (when the array is
  read from left to right).
  In other words, out of all the integers that might occur more than once in the
  input array, your function should return the one whose first duplicate value
  has the minimum index.
  If no integer appears more than once, your function should return
  -1.Note that you're allowed to mutate the input array.

  Sample Input #1
  array = [2, 1, 5, 2, 3, 3, 4]
  Sample Output #1
  2 

*/

function firstDuplicateValue(array: number[]) {
  let frequencies = new Map();

  for (let i = 0; i < array.length; i++) {
    let amountInMap = frequencies.get(array[i]) || 0;

    if (amountInMap > 0) {
      return array[i];
    }

    frequencies.set(array[i], amountInMap + 1);
  }

  return -1;
}
