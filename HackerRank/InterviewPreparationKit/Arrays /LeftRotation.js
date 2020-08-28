/*
https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem
*/

/*
My Solution 
TC: O(1)
SC: O(n)?
- Find out how many times you do "total rotations". A total rotation means that the whole array got rotated completely once, and that is how many times 
  the length of the array goes into the # of rotations.
- The amount leftover, or incomplete rotations, is basically # of rotations - # of complete rotations
For example, imagine if array was [1,2,3,4], and d= 9. You would do two whole rotations, with 1 left over. Therefore, the leftOver is basically 9- (2*array.length)
- Slice the array at the spot of leftOver rotations, and move that portion to the end, resulting in the final array
*/
function rotLeft(a, d) {
  let numberOfWholeRotations = Math.floor(d / a.length);
  let leftOverRotations = d - numberOfWholeRotations * a.length;

  let arrayWithValuesToShift = a.slice(0, leftOverRotations);
  let finalArray = a.slice(leftOverRotations).concat(arrayWithValuesToShift);
  return finalArray;
}
