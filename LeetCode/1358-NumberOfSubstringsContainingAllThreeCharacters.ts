/*
Problem:
1358. Number of Substrings Containing All Three Characters
Difficulty: Medium

Given a string s consisting only of characters a, b and c.

Return the number of substrings containing at least one occurrence of all these characters a, b and c.

Example 1:

Input: s = "abcabc"
Output: 10
Explanation: The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again). 
Example 2:


Input: s = "aaacb"
Output: 3
Explanation: The substrings containing at least one occurrence of the characters a, b and c are "aaacb", "aacb" and "acb". 
Example 3:

Input: s = "abc"
Output: 1
*/

/*
Method 1
*/
function numberOfSubstrings(s: string) {
  let validSubstrings = 0;

  for (let i = 0; i < s.length; i++) {
    let foundA = false;
    let foundB = false;
    let foundC = false;

    for (let j = i; j < s.length; j++) {
      switch (s[j]) {
        case "a":
          foundA = true;
          break;
        case "b":
          foundB = true;
          break;
        case "c":
          foundC = true;
          break;
        default:
          break;
      }

      if (foundA && foundB && foundC) {
        validSubstrings += 1;
        validSubstrings += s.length - j - 1;
        break;
      }
    }
  }
  return validSubstrings;
}
