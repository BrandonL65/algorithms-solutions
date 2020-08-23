/*

  Write a function that takes in an array of unique integers and returns its
  powerset.
  The powerset P(X) of a set X is the set of all
  subsets of X. For example, the powerset of [1,2] is
  [[], [1], [2], [1,2]].  Note that the sets in the powerset do not need to be in any particular order.

  Sample Input 
  array = [1, 2, 3]
  
  Sample Output 
  [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]
*/

/*
Method 1: iteratively, the easier solution to wrap one's head around
TC:  O(n*2^n)
SC: O(n*2^n)
*/
function powerset(array) {
  let allSubsets = [[]];

  for (let i = 0; i < array.length; i++) {
    let totalSubsetsLength = allSubsets.length;
    for (let j = 0; j < totalSubsetsLength; j++) {
      let currentSubsetValue = allSubsets[j];
      let newSubset = currentSubsetValue.concat(array[i]); //concat returns a NEW array, instead of modifying original one
      allSubsets.push(newSubset);
    }
  }
  return allSubsets;
}
