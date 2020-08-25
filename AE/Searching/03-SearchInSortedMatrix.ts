/*
  Difficulty: Medium
  You're given a two-dimensional array (a matrix) of distinct integers and a
  target integer. Each row in the matrix is sorted, and each column is also sorted; the
  matrix doesn't necessarily have the same height and width.
  Write a function that returns an array of the row and column indices of the
  target integer if it's contained in the matrix, otherwise
  
  Sample Input 
  array = [
  [1, 4, 7, 12, 15, 1000],
  [2, 5, 19, 31, 32, 1001],
  [3, 8, 24, 33, 35, 1002],
  [40, 41, 42, 44, 45, 1003],
  [99, 100, 103, 106, 128, 1004],
  ]
  target = 44

  Sample Output 
  [3,3]
*/

/*
Method 1: Loop through each array, and do binary search 
TC and SC are what I think, they could be wrong
TC: (nlogn)
SC: O(1)
- Loop through every array, and check if target >= first element of array
- if target IS greater, then do binary search on that single array, to see if the target lies within
*/
type Range = [number, number];
export function searchInSortedMatrix(
  matrix: number[][],
  target: number
): Range {
  for (let i = 0; i < matrix.length && target >= matrix[i][0]; i++) {
    let rowStart = 0;
    let rowEnd = matrix[i].length - 1;
    while (rowStart <= rowEnd) {
      let middleIdx = Math.floor((rowStart + rowEnd) / 2);
      if (target === matrix[i][middleIdx]) {
        return [i, middleIdx];
      } else if (target > matrix[i][middleIdx]) {
        rowStart = middleIdx + 1;
      } else {
        rowEnd = middleIdx - 1;
      }
    }
  }
  return [-1, -1];
}

/*
Method 2 - Better method, increments either row/column 
TC:O(n+m)
SC: O(1)
- We start at Row 0, last Element, which is the top right 
- If target > that element, we know that we can eliminate the whole row since those values are all smaller
- if target < that element, we know we can eliminate that whole column under it since those values are all bigger
*/
type Range2 = [number, number];
export function searchInSortedMatrix2(
  matrix: number[][],
  target: number
): Range2 {
  // Write your code here.
  let startRow = 0;
  let startCol = matrix[0].length - 1;
  while (startRow < matrix.length && startCol >= 0) {
    let valueAt = matrix[startRow][startCol];
    if (valueAt === target) {
      return [startRow, startCol];
    } else if (valueAt > target) {
      startCol = startCol - 1;
    } else {
      startRow = startRow + 1;
    }
  }
  return [-1, -1];
}
