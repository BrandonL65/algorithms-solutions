/*
  Difficulty: Easy
  Write a function that takes in a non-empty string and that returns a boolean
  representing whether the string is a palindrome.
  A palindrome is defined as a string that's written the same forward and
  backward. Note that single-character strings are palindromes.

  Sample Input 
  string = "abcdcba"

  Sample Output 
  true 
*/

/*
Method 1 - loop front front to end, and have an index at the end. Compare both front and end, and STOP when front === end
TC: O(n)
SC: O(1)
*/
function isPalindrome(string) {
  // Write your code here.
  let endIdx = string.length - 1;
  for (let i = 0; i < endIdx; i++) {
    if (string[i] !== string[endIdx]) {
      return false;
    }
    endIdx--;
  }
  return true;
}

/*
Method 2 -- loop from front to end of string and have an index at the end that increments forward, compare both front and end 
TC: O(n)
SC: O(1)
*/
function isPalidrome2(string) {
  let endIdx = string.length - 1;
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[endIdx]) {
      return false;
    }
    endIdx--;
  }
  return true;
}

/*
Method 3 -- create the reverse string, and compare the original string with the reversed string
TC: O(n)
SC: O(n)
*/
function isPalindrome3(string) {
  let reversedString = [];
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString.push(string[i]);
  }
  return string === reversedString.join("");
}
