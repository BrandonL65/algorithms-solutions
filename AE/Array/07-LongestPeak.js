/*
  Difficulty: Medium
  Write a function that takes in an array of integers and returns the length of
  the longest peak in the array.
  A peak is defined as adjacent integers in the array that are strictly 
  increasing until they reach a tip (the highest value in the peak), at which
  point they become 
  For example, the integers 1, 4, 10, 2 form a peak, but the
  integers 4, 0, 10 don't and neither do the integers
  1, 2, 2, 0. Similarly, the integers 1, 2, 3 don't
  form a peak because there aren't any strictly decreasing integers after the
  3.

  Sample Input 
  array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]

  Sample Output 
  6 // 0, 10, 6, 5, -1, -3
*/

/*
Method 1 - record all peaks, then for each peak, loop left and loop right to find # of decreasing/increasing on each side 
TC: O(n)
SC: O(n)
-- have a map to track peaks and their -> index 
-- loop through array once and find all peaks 
-- loop through map and for each peak, loop the left until you find an increasing/equal value, and record the # of values before you found an increasing/equal value
-- also loop the right until you find a decreasing/equal value, and record the # of values before you found that decreasing/equal value 
*/

function longestPeak(array) {
  let peaks = new Map();

  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
      peaks.set(array[i], i);
    }
  }

  let longestPeak = 0;
  for (let [k, v] of peaks) {
    let leftLength = 0;
    let rightLength = 0;
    //left of peak
    for (let i = v - 1; i >= 0; i--) {
      if (array[i] >= array[i + 1]) {
        break;
      } else {
        leftLength++;
      }
    }
    //right of peak
    for (let i = v + 1; i < array.length; i++) {
      if (array[i] >= array[i - 1]) {
        break;
      } else {
        rightLength++;
      }
    }
    let total = 1 + leftLength + rightLength;
    if (total > longestPeak) {
      longestPeak = total;
    }
  }
  return longestPeak;
  //rm comment
}
