/*
  Difficulty: Easy
  Write a function that takes in a "special" array and returns its product sum.
  A "special" array is a non-empty array that contains either integers or other
  "special" arrays. The product sum of a "special" array is the sum of its
  elements, where "special" arrays inside it are summed themselves and then
  multiplied by their level of depth.
  The depth of a "special" array is how far nested it is. For instance, the
  depth of [] is 1; the depth of the inner array in
  [[]] is 2; the depth of the innermost array in
  [[[]]] is 3
  Therefore, the product sum of [x, y] is x + y; the
  product sum of [x, [y, z]] is x + 2 * (y + z); the
  product sum of [x, [y, [z]]] is x + 2 * (y + 3z).

  Sample Input 
  array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
  Sample Output 
  12, calculated as: 5 + 2 + 2 * (7 - 1) + 3 + 2 * (6 + 3 * (-13 + 8) + 4)
*/

/*
Method 1 - recursion 
TC: O(n) - n is the number of elements in arr
SC: O(d) - d is the greatest depth of the "special" arrays
- have a helper fn that takes in arr, idx, total, and mult 
- when the array ends, return the current multiple * accumulated total
- if you do NOT encounter another array, simply recursively call the function on the next index, and add the total with the value of arr[idx], and keep same mult 
- if you encounter another array, then call this fn recursively, but with arr[idx], idx=0, total=0, and mult+1
- after the inner recursion resolves, return the outer recursive function with the sum of the inner array as the new total
*/
function productSum(array) {
  return productSumHelper(array);
}

const productSumHelper = (arr, idx = 0, total = 0, mult = 1) => {
  if (arr[idx] === undefined) {
    return mult * total;
  }
  if (Array.isArray(arr[idx])) {
    let innerArrSum = productSumHelper(arr[idx], 0, 0, mult + 1);
    return productSumHelper(arr, idx + 1, total + innerArrSum, mult);
  } else {
    let newTotal = total + arr[idx];
    return productSumHelper(arr, idx + 1, newTotal, mult);
  }
};

/*
Method 2 - Same methodology as method 1, but without the idx parameter, instead slicing the left element of the array away instead
TC: O(n)
SC: O(d)
*/

function productSum(array) {
  // Write your code here.
  return calcProductSum(array);
}

const calcProductSum = (arr, total = 0, mult = 1) => {
  if (arr.length < 1) {
    return mult * total;
  }

  if (Array.isArray(arr[0])) {
    let valueOfArray = calcProductSum(arr[0], 0, mult + 1);
    let newTotal = valueOfArray + total;
    return calcProductSum(arr.slice(1), newTotal, mult);
  } else {
    let newTotal = total + arr[0];
    return calcProductSum(arr.slice(1), newTotal, mult);
  }
};
