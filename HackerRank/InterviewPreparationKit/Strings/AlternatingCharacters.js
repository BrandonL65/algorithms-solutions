/*
https://www.hackerrank.com/challenges/alternating-characters/problem
*/

/*
My Solution
- Loop through string, and find any two adjacent characters that are the same. When found, you delete that character and decrement i
*/
function alternatingCharacters(s) {
  let deletions = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      s = s.slice(0, i) + s.slice(i + 1);
      deletions++;
      i--;
    }
  }

  return deletions;
}
