/*
Three Number Sort
Difficulty: Medium


  You're given an array of integers and another array of three distinct
  integers. The first array is guaranteed to only contain integers that are in
  the second array, and the second array represents a desired order for the
  integers in the first array. For example, a second array of
  [x, y, z] represents a desired order of
  [x, x, ..., x, y, y, ..., y, z, z, ..., z] in the first array.
  Write a function that sorts the first array according to the desired order in
  the second array.
  The function should perform this in place (i.e., it should mutate the input
  array), and it shouldn't use any auxiliary space (i.e., it should run with
  constant space: O(1) space).
  Note that the desired order won't necessarily be ascending or descending and
  that the first array won't necessarily contain all three integers found in the
  second array—it might only contain one or two.
  
  Sample Input
  array = [1, 0, 0, -1, -1, 0, 1, 1]
  order = [0, 1, -1]

  Sample Output
  [0, 0, 0, 1, 1, 1, -1, -1]
*/

/*
Method 1 - Given answer, good TC and SC, but not as scalable for 4 num sort, 5 num sort, etc
TC: O(n)
SC: O(1)
*/

const threeNumberSort = (array: number[], order: number[]) => {
  let firstInOrder = order[0];
  let secondInOrder = order[1];

  let currentIdxToSwap = 0;

  for (let i = currentIdxToSwap; i < array.length; i++) {
    if (array[i] === firstInOrder) {
      let temp = array[currentIdxToSwap];
      array[currentIdxToSwap] = array[i];
      array[i] = temp;
      currentIdxToSwap++;
    }
  }

  for (let i = currentIdxToSwap; i < array.length; i++) {
    if (array[i] === secondInOrder) {
      let temp = array[currentIdxToSwap];
      array[currentIdxToSwap] = array[i];
      array[i] = temp;
      currentIdxToSwap++;
    }
  }

  return array;
};

/*
Method 2 - My preferred answer
TC: O(n)
SC: O(n);
*/

const currentIdxToSwap2 = (array: number[], order: number[]) => {
  let occurrencesOfNums = new Map();
  let answer: number[] = [];

  for (let i = 0; i < order.length; i++) {
    if (!occurrencesOfNums.has(order[i])) {
      occurrencesOfNums.set(order[i], 0);
    }
  }

  for (let i = 0; i < array.length; i++) {
    let currentAmountOfOccurrence = occurrencesOfNums.get(array[i]);
    occurrencesOfNums.set(array[i], ++currentAmountOfOccurrence);
  }

  for (let i = 0; i < order.length; i++) {
    let amountOfOccurrences = occurrencesOfNums.get(order[i]);
    let newArrayOfOccurrenceAmount = new Array(amountOfOccurrences).fill(
      order[i]
    );
    answer.push(...newArrayOfOccurrenceAmount);
  }

  return answer;
};
