/*
  Difficulty: Easy
  Given a non-empty string of lowercase letters and a non-negative integer
  representing a key, write a function that returns a new string obtained by
  shifting every letter in the input string by k positions in the alphabet,
  where k is the key.
  Note that letters should "wrap" around the alphabet; in other words, the
  letter 

  Sample Input 
  string = "xyz"
  key = 2

  Sample Output 
  "zab"
*/

/*
Method 1: Use char unicodes, and find out if the unicode+key >= 122, which is the key of "z". 
TC: O(n)
SC: O(n)
--unicode for "a" is 97 and unicode for "z" is 122
*/

function caesarCipherEncryptor(string, key) {
  let timesWrapped = key % 26;

  let finalString = "";
  for (let i = 0; i < string.length; i++) {
    let finalShift = string[i].charCodeAt() + timesWrapped;
    if (finalShift > 122) {
      finalShift = finalShift - 123 + 97;
    }
    finalString += String.fromCharCode(finalShift);
  }
  return finalString;
}
