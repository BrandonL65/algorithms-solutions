/* 
  Difficulty: Easy
  Write a function that takes in a non-empty array of distinct integers and an
  integer representing a target sum. If any two numbers in the input array sum
  up to the target sum, the function should return them in an array, in any
  order. If no two numbers sum up to the target sum, the function should return
  an empty array.

  Sample Input:  
  array  = [3, 5, -4, 8, 11, 1, -1, 6]
  targetSum = 10

  Sample Output: 
  [-1, 11]
*/

//Solution 1: Nested Loop
//TC: O(n^2)
//SC: O(1)
function twoNumberSum(arr, targetSum) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetSum) {
        return [arr[i], arr[j]];
      }
    }
  }
  return [];
}

//Solution 2: Map out array, and see if any "required" num is present
//TC: O(n)
//SC: O(n)
function twoNumberSum2(arr, targetSum) {
  let arrayNumberMap = new Map();

  //fill the map
  arr.forEach((value) => {
    arrayNumberMap.set(value, true);
  });

  for (let [k, v] of arrayNumberMap) {
    let currentNum = k;
    let neededNum = targetSum - currentNum;
    if (arrayNumberMap.has(neededNum) && neededNum !== currentNum) {
      console.log([k, neededNum]);
      return [k, neededNum];
    }
  }
}

//Solution 3: Have a left and right pointer that go towards eachother
//TC: O(nlogn)
//SC: O(1)
function twoNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let leftPointer = 0;
  let rightPointer = array.length - 1;

  while (leftPointer < rightPointer) {
    let currentSum = array[leftPointer] + array[rightPointer];
    if (currentSum === targetSum) {
      return [array[leftPointer], array[rightPointer]];
    } else if (currentSum < targetSum) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }
  return [];
}
