/*
  Difficulty: Easy
  Write a function that takes in an array of at least three integers and,
  without sorting the input array, returns a sorted array of the three largest
  integers in the input array.
  The function should return duplicate integers if necessary; for example, it
  should return [10, 10, 12] for an input array of
  [10, 5, 9, 10, 12].

  Sample Input 
  array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]

  Sample Output 
  [18, 141, 541]
*/

/*
Method 1 - recursively
TC: O(n)
SC: O(1)
*/

export function findThreeLargestNumbers(array: number[]) {
  let firstLargest = null;
  let secondLargest = null;
  let thirdLargest = null;

  for (let i = 0; i < array.length; i++) {
    if (firstLargest === null || array[i] > firstLargest) {
      thirdLargest = secondLargest;
      secondLargest = firstLargest;
      firstLargest = array[i];
    } else if (secondLargest === null || array[i] > secondLargest) {
      thirdLargest = secondLargest;
      secondLargest = array[i];
    } else if (thirdLargest === null || array[i] > thirdLargest) {
      thirdLargest = array[i];
    }
  }
  return [thirdLargest, secondLargest, firstLargest];
}
