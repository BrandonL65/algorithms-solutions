/*
  Levenshtein Distance

  Difficulty: Medium


  Write a function that takes in two strings and returns the minimum number of
  edit operations that need to be performed on the first string to obtain the
  second string.
  There are three edit operations: insertion of a character, deletion of a
  character, and substitution of a character for another.

  Sample Input
  str1 = "abc";
  str2 = "yabd";

  Sample Output 
  2, insert "y", and substitute "c" for "d"
*/

/*
  Method 1
  TC: O(nm), where n is length of str1, m is length of str2
  SC is same as TC 
  
*/
const levenshteinDistance = (str1: string, str2: string) => {
  let changesNeededTracker: number[][] = [];

  changesNeededTracker[0] = [0]; //base case, we are comparing " " to " "

  for (let i = 0; i < str1.length; i++) {
    changesNeededTracker[i + 1] = [changesNeededTracker[i][0] + 1];
  }

  for (let i = 0; i < str2.length; i++) {
    changesNeededTracker[0][i + 1] = changesNeededTracker[0][i] + 1;
  }

  for (let c = 1; c <= str1.length; c++) {
    for (let r = 1; r <= str2.length; r++) {
      if (str1[c - 1] === str2[r - 1]) {
        changesNeededTracker[c][r] = changesNeededTracker[c - 1][r - 1];
      } else {
        let smallestPreviousNeighbor = Math.min(
          changesNeededTracker[c - 1][r],
          changesNeededTracker[c][r - 1],
          changesNeededTracker[c - 1][r - 1]
        );
        changesNeededTracker[c][r] = smallestPreviousNeighbor + 1;
      }
    }
  }

  //return the last element in the 2d array , furthest bottom right
  return changesNeededTracker[changesNeededTracker.length - 1][
    changesNeededTracker[changesNeededTracker.length - 1].length - 1
  ];
};
