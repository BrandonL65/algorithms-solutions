/*

  Write a function that takes in an n x m two-dimensional array (that can be
  square-shaped when n == m) and returns a one-dimensional array of all the
  array's elements in spiral order.

  Spiral order starts at the top left corner of the two-dimensional array, goes
  to the right, and proceeds in a spiral pattern all the way until every element
  has been visited.

  Sample Input 
  array  = [
  [1,   2,  3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10,  9,  8, 7],
]


  Sample Output 
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
*/

/*
Method 1 - traverse ever decreasing perimeter
TC: O(n)
SC: O(n)
-- Have 4 variables tracking the perimeter values of the rectangle 
-- while startCol <= endCol && startRow <= endRow... loop
-- push values into answer [] from upper perimeter, right perimeter, bottom perimeter, and left perimeter
-- increment/decrement all 4 variables for the inner perimeter next loop
--handle edge case for when there is just 1 single column or 1 single row
*/
function spiralTraverse(array) {
  // Write your code here.
  let startCol = 0;
  let endCol = array[0].length - 1;
  let startRow = 0;
  let endRow = array.length - 1;

  let answer = [];

  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++) {
      answer.push(array[startRow][i]);
    }
    for (let i = startRow + 1; i <= endRow; i++) {
      answer.push(array[i][endCol]);
    }
    for (let i = endCol - 1; i > startCol; i--) {
      answer.push(array[endRow][i]);
    }
    for (let i = endRow; i > startRow; i--) {
      if (startCol === endCol) {
        break;
      }
      answer.push(array[i][startCol]);
    }
    startCol++;
    endCol--;
    startRow++;
    endRow--;
  }
  return answer;
  //REMOVE 1
  //REMOVE 2
}
