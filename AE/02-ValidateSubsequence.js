/*
  A subsequence of an array is a set of numbers that aren't necessarily adjacent
  in the array but that are in the same order as they appear in the array. For
  instance, the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4], and so do the numbers 
  [2, 4]. Note
  that a single number in an array and the array itself are both valid
  subsequences of the array.

  Sample Input 
  array  = [5, 1, 22, 25, 6, -1, 8, 10]
  sequence = [1, 6, -1, 10]

  Sample Output
  true

*/

/*
Solution 1 - Have Index counting sequence
TC: O(n)
SC: O(1)
*/
function validateSubsequence(arr, sequence) {
  let sequenceIdx = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === sequence[sequenceIdx]) {
      sequenceIdx++;
    }
  }
  return sequenceIdx === sequence.length;
}

/*
Solution 2 - shift sequence array
TC: O(n)
SC: O(1)
*/
function validateSubsequence2(arr, sequence) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === sequence[0]) {
      sequence.shift();
    }
  }
  return sequence.length === 0;
}
