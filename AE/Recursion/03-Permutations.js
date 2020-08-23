/*
  Difficulty: Medium
  Write a function that takes in an array of unique integers and returns an
  array of all permutations of those integers in no particular order.
  If the input array is empty, the function should return an empty array.

  Sample Input
  array = [1,2,3]

  Sample Output 
  [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]

*/

/*
Method 1 - recursively 
Upper Bound: O(n^2*n!) time | O(n*n!) space
Roughly: O(n*n!) time | O(n*n!) space
*/
function getPermutations(array) {
  let permutations = [];
  getPermutationsHelper(array, [], permutations);
  return permutations;
}

function getPermutationsHelper(array, permutation, allPermutations) {
  if (array.length < 1 && permutation.length >= 1) {
    allPermutations.push(permutation);
    return;
  }

  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i];
    let currentPermutation = [...permutation, currentNum];
    let leftOverArray = [...array.slice(0, i), ...array.slice(i + 1)];
    getPermutationsHelper(leftOverArray, currentPermutation, allPermutations);
  }
}
