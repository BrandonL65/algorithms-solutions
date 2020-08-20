/*

  Write a function that takes in two non-empty arrays of integers, finds the
  pair of numbers (one from each array) whose absolute difference is closest to
  zero, and returns an array containing these two numbers, with the number from
  the first array in the first position.
  You can assume that there will only be one pair of numbers with the smallest
  difference.

  Sample Input 
  arrayOne = [-1, 5, 10, 20, 28, 3]
  arrayTwo = [26, 134, 135, 15, 17]

  Sample Output 
  [28,26]
*/

/*
/Method 1 -- using a map and nested loop to do all available comparisons
TC: O(n^2)
SC: O(n)
--generate a new Map();
-- for each value of arr1, loop thru arr2 keeping track of the smallest absolute difference value from arr1 and arr2
-- set the value in map of arr1value -> [arr2index, arr2smallestdifferencevalue];
-- loop thru map and find smallest difference in map
*/

const smallestDifference = (arrayOne, arrayTwo) => {
  let mapOfValues = new Map();

  for (let i = 0; i < arrayOne.length; i++) {
    let smallestDifference = Math.abs(arrayOne[i] - arrayTwo[0]);
    let smallestDifferenceIdx = 0;
    for (let j = 0; j < arrayTwo.length; j++) {
      let absDifference = Math.abs(arrayOne[i] - arrayTwo[j]);
      if (absDifference < smallestDifference) {
        smallestDifference = absDifference;
        smallestDifferenceIdx = j;
      }
    }
    mapOfValues.set(arrayOne[i], [
      arrayTwo[smallestDifferenceIdx],
      smallestDifference,
    ]);
  }

  let smallestPair = [];
  let smallestPairValue = null;
  for (let [k, v] of mapOfValues) {
    if (smallestPairValue === null || v[1] < smallestPairValue) {
      smallestPair = [k, v[0]];
      smallestPairValue = v[1];
    }
  }
  return smallestPair;
};

/*
Method 2
TC: O(nlogn + mlogm)
SC: O(1)
--sort both arrays, and have pointers at beginning of both
--while arrayOnePointer < arrayOne.length and arrayTwoPointer < arrayTwo.length, find the difference of both
-- if new difference < current smallest difference, then set the new one as current
-- iterate the pointer pointing to the smallest of the two values 
*/
const smallestDifference2 = (arrayOne, arrayTwo) => {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let arrayOnePointer = 0;
  let arrayTwoPointer = 0;

  let smallestDifferencePair = [];
  let smallestDifference = null;

  while (
    arrayOnePointer < arrayOne.length &&
    arrayTwoPointer < arrayTwo.length
  ) {
    let firstVal = arrayOne[arrayOnePointer];
    let secondVal = arrayTwo[arrayTwoPointer];
    let difference = Math.abs(firstVal - secondVal);
    if (smallestDifference === null || difference < smallestDifference) {
      smallestDifferencePair = [firstVal, secondVal];
      smallestDifference = difference;
    }
    if (firstVal < secondVal) {
      arrayOnePointer++;
    } else {
      arrayTwoPointer++;
    }
  }
  return smallestDifferencePair;
};
