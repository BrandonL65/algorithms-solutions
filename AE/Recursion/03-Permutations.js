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
- create permutations [] to hold all permutations generated, plus a helper fn that calculates the permutations 
- the helper fn accepts the array to pick permutations from, the current generated permutation, and the array of all permutations to push on
- the base case is if the array's length < 1, and the current permutation array is longer than length 1, we push the current permutation to the all permutations array
- for each index of array, we pick that as the "next" value to slap onto our permutation, and we generate the leftover array. Then we call the same fn onto the leftover arr.
- so if we have [1,2,3], we will first pick 1, left with [2,3] and call the fn again on that, then we pick 2, left with [1,3], then 3 with [1,2], etc.
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
