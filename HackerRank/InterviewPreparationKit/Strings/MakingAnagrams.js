/*
https://www.hackerrank.com/challenges/ctci-making-anagrams/problem

Alice is taking a cryptography class and finding anagrams to be very useful. We consider two strings to be anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

Alice decides on an encryption scheme involving two large strings where encryption is dependent on the minimum number of character deletions required to make the two strings anagrams. Can you help her find this number?

Given two strings,  and , that may or may not be of the same length, determine the minimum number of character deletions required to make  and  anagrams. Any characters can be deleted from either of the strings.

For example, if  and , we can delete  from string  and  from string  so that both remaining strings are  and  which are anagrams.

Function Description

Complete the makeAnagram function in the editor below. It must return an integer representing the minimum total characters that must be deleted to make the strings anagrams.

makeAnagram has the following parameter(s):

a: a string
b: a string
Input Format

The first line contains a single string, .
The second line contains a single string, .

Constraints

The strings  and  consist of lowercase English alphabetic letters ascii[a-z].
Output Format

Print a single integer denoting the number of characters you must delete to make the two strings anagrams of each other.

Sample Input

cde
abc
Sample Output

4
Explanation

We delete the following characters from our two strings to turn them into anagrams of each other:

Remove d and e from cde to get c.
Remove a and b from abc to get c.
We must delete  characters to make both strings anagrams, so we print  on a new line.
*/

/*
My solution: 
- Make two maps, storing the frequencies of the letters in both strings a and b
- Have a variable to keep track of total deletions
- Loop through mapOfA, and check if mapOfB also has that specific key.
- If it doesn't then we simply delete that key, and count the number of occurrences (values) of that key
- If it does, then we find out if mapOfA has more, or mapOfB has more of that specific key.
- If mapOfA has more, we delete from mapOfA until we have as much as mapOfB has, and record the # of deleted
- If mapOfB has more, we delete from mapOfB until we have as much as mapOfA has, and record the # of deleted
- return totalDeleted
*/
function makeAnagram(a, b) {
  let mapOfA = new Map();
  let mapOfB = new Map();

  for (let i = 0; i < a.length; i++) {
    let found = mapOfA.get(a[i]);
    if (found) {
      mapOfA.set(a[i], found + 1);
    } else {
      mapOfA.set(a[i], 1);
    }
  }
  for (let i = 0; i < b.length; i++) {
    let found = mapOfB.get(b[i]);
    if (found) {
      mapOfB.set(b[i], found + 1);
    } else {
      mapOfB.set(b[i], 1);
    }
  }
  let totalDeletions = 0;

  for (let [k, v] of mapOfA) {
    if (mapOfB.has(k)) {
      let correspondingValueInB = mapOfB.get(k);
      if (v > correspondingValueInB) {
        totalDeletions += v - correspondingValueInB;
        mapOfA.set(k, correspondingValueInB);
      } else if (v < correspondingValueInB) {
        totalDeletions += correspondingValueInB - v;
        mapOfB.set(k, v);
      }
    } else {
      totalDeletions += v;
      mapOfA.delete(k);
    }
  }

  for (let [k, v] of mapOfB) {
    if (mapOfA.has(k)) {
      let correspondingValueInA = mapOfA.get(k);
      if (v > correspondingValueInA) {
        totalDeletions += v - correspondingValueInA;
        mapOfB.set(k, correspondingValueInA);
      } else if (v < correspondingValueInA) {
        totalDeletions += correspondingValueInA - v;
        mapOfA.set(k, v);
      }
    } else {
      totalDeletions += v;
      mapOfB.delete(k);
    }
  }
  console.log(totalDeletions);
  return totalDeletions;
}

/*
Solution 2 - very similar to solution 1
*/
function makingAnagram2(a, b) {
  let freqsInA = new Map();
  let freqsInB = new Map();
  let deletionsNeeded = 0;

  for (let digit of a) {
    let amountInMap = freqsInA.get(digit) || 0;
    freqsInA.set(digit, amountInMap + 1);
  }
  for (let digit of b) {
    let amountInMap = freqsInB.get(digit) || 0;
    freqsInB.set(digit, amountInMap + 1);
  }

  for (let [char, freqOfChar] of freqsInA) {
    let correspondingFreqInB = freqsInB.get(char);

    if (!correspondingFreqInB) {
      deletionsNeeded += freqOfChar;
      continue;
    }
    if (freqOfChar > correspondingFreqInB) {
      deletionsNeeded += freqOfChar - correspondingFreqInB;
    } else {
      deletionsNeeded += correspondingFreqInB - freqOfChar;
    }
    mapOfB.delete(char);
  }

  for (let [char, freqOfChar] of mapOfB) {
    deletionsNeeded += freqOfChar;
  }

  return deletionsNeeded;
}
