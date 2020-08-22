/*
  Difficulty: Medium
  Write a function that, given a string, returns its longest palindromic
  substring.
  A palindrome is defined as a string that's written the same forward and
  backward. Note that single-character strings are palindromes.You can assume that there will only be one longest palindromic substring.
  
  Sample Input 
  string = "abaxyzzyxf"

  Sample Output 
  "xyzzyx"
*/

/*
Method 1: Generate all possible substrings into a Map, then loop through the Map, checking if its a palindrome and finding the longest palindrome, then return it
TC: O(n^2)
SC: O(n)
*/
function longestPalindromicSubstring(string) {
  let substrings = new Map();
  for (let i = 0; i < string.length; i++) {
    let totalString = "";
    for (let j = i; j < string.length; j++) {
      totalString += string[j];
      substrings.set(totalString, true);
    }
  }

  let longestSubstring = "";

  for (let [k, v] of substrings) {
    if (isPalindrome(k) && k.length > longestSubstring.length) {
      longestSubstring = k;
    }
  }
  return longestSubstring;
}

function isPalindrome(string) {
  let endIdx = string.length - 1;
  for (let i = 0; i < endIdx; i++) {
    if (string[i] !== string[endIdx]) {
      return false;
    }
    endIdx--;
  }
  return true;
}
