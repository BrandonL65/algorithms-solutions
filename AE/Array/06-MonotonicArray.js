/*
  Difficulty: Medium
  Write a function that takes in an array of integers and returns a boolean
  representing whether the array is monotonic.

  An array is said to be monotonic if its elements, from left to right, are
  entirely non-increasing or entirely non-decreasing.

  Sample Input 
  array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]

  Sample Output 
  true 
*/

/*
Method 1: Have a variable that compares the first value in arr to last value, and assign it "increasing" or "decreasing"
TC: O(n)
SC: O(1)
-- Have variable to check array[0] with array[array.length-1]
-- loop through array
-- if value is increasing and we ever find a value that is less than prev value, isMonotonic becomes false
-- if value is decreasing and we ever find a value that is greater than previous value, is Monotonic becomes false 
*/
function isMonotonic(array) {
  let increasingOrDecreasing =
    array[0] < array[array.length - 1] ? "increasing" : "decreasing";
  let isMonotonic = true;
  for (let i = 0; i < array.length; i++) {
    if (increasingOrDecreasing === "increasing") {
      if (array[i] < array[i - 1]) {
        isMonotonic = false;
      }
    } else {
      if (array[i] > array[i - 1]) {
        isMonotonic = false;
      }
    }
  }
  return isMonotonic;
}
