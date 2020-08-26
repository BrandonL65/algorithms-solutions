/*

  You're given an array of integers where each integer represents a jump of its
  value in the array. For instance, the integer 2 represents a jump
  of two indices forward in the array; the integer -3 represents a
  jump of three indices backward in the array.
  If a jump spills past the array's bounds, it wraps over to the other side. For
  instance, a jump of -1 at index 0 brings us to the last index in
  the array. Similarly, a jump of 1 at the last index in the array brings us to
  index 0.
  Write a function that returns a boolean representing whether the jumps in the
  array form a single cycle. A single cycle occurs if, starting at any index in
  the array and following the jumps, every element in the array is visited
  exactly once before landing back on the starting index.

  Sample Input 
  array = [2, 3, 1, -4, -4, 2]

  Sample Output 
  true 
*/

/*
Method 1 - Using a mirroring array to keep track of indexes visited with trackerArr
TC: O(n)
SC: O(n)
*/

const singleCycleCheck = (array: number[]) => {
  let trackerArr = new Array(array.length).fill(false);
  let currentIdx = 0;
  let counter = 0;

  while (counter < array.length) {
    let valueToTraverse = (array[currentIdx] + currentIdx) % array.length; //this will tell us the total amount we will travel, minus any overflow
    //if we traverse to the right
    if (valueToTraverse >= 0) {
      if (trackerArr[valueToTraverse] === true) {
        return false;
      } else {
        trackerArr[valueToTraverse] = true;
        currentIdx = valueToTraverse;
      }
    }
    //if we traverse to left
    else {
      // we normalize the modulo-ed value to be one between 0 and array.length - 1, removing the negative and making it easier to work with
      valueToTraverse = valueToTraverse + array.length;
      if (trackerArr[valueToTraverse] === true) {
        return false;
      } else {
        trackerArr[valueToTraverse] = true;
        currentIdx = valueToTraverse;
      }
    }
  }
  return currentIdx === 0;
};

/*
Method 2 - Similar with method 1, but without the tracker arr, we save on space complexity
TC: O(n)
SC: O(1)
*/
export function hasSingleCycle(array: number[]) {
  // Write your code here.
  let indexTraversing = 0;
  let counterIdx = 0;
  while (counterIdx < array.length) {
    if (counterIdx > 0 && indexTraversing === 0) {
      return false;
    }
    let howManyToJump =
      (array[indexTraversing] + indexTraversing) % array.length;
    if (howManyToJump >= 0) {
      indexTraversing = howManyToJump;
    } else {
      howManyToJump = howManyToJump + array.length;
      indexTraversing = howManyToJump;
    }
    counterIdx++;
  }
  return indexTraversing === 0;
}
