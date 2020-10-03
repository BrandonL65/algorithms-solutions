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
  - We initialize a 2D number array to keep track of the changes needed to build up the string
  - We also initialize the 2D array to use an extra space, for example, if string 1 is "abc", it will actually be seen as " abc", if str2 is "yabd", it will become " yabd"
  - Essentially, pretend there is an extra space at the beginning, and that will become our base case when we populate the first element of the 2D array.
  - We populate the first element of the array with 0, since we are technically comparing the first char of both strings, which we set to be " ", an empty string each 
  - We then populate the columns of the array with the length of str1, with each successive column having +1 from the previous column
  - We do the same, populating the first row of the arr with the length of str2, with each successive row having +1 from the previous row 
  - We loop through each "area", or cell in between, and compare the corresponding str1[column] with str2[row]. If they are the same, we use arr[c-1][r-1].
  - If they are different, we take the smallest of the previous neighbors, and we add 1 to it. 
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
