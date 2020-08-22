/*

  Write a function that takes in an array of strings and groups anagrams together.
  Anagrams are strings made up of exactly the same letters, where order doesn't
  matter. For example, "cinema" and "iceman" are
  anagrams; similarly, "foo" and "ofo" are anagrams.
  Your function should return a list of anagram groups in no particular order.

  Sample Input 
  words = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]

  Sample Output 
  [["yo", "oy"], ["flop", "olfp"], ["act", "tac", "cat"], ["foo"]]
*/

/*
Method 1: Generate map of all the anagrams, and then loop through map to generate array of all the anagrams together 
TC: O(w*n*logn)
SC: O(w*n)
 w is the number of words and n is the length of the longest word
*/
function groupAnagrams(words) {
  let wordsMap = new Map();

  for (let i = 0; i < words.length; i++) {
    let sortedWord = words[i].split("").sort().join("");
    if (wordsMap.has(sortedWord)) {
      let allAnagramsForWord = wordsMap.get(sortedWord);
      wordsMap.set(sortedWord, [...allAnagramsForWord, words[i]]);
    } else {
      wordsMap.set(sortedWord, [words[i]]);
    }
  }

  let allAnagrams = [];
  for (let [k, v] of wordsMap) {
    allAnagrams.push(v);
  }
  return allAnagrams;
}
