/*
https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem
*/

/*
My method: 
- Make a map to hold all the substrings 
- loop through the string, and generate all possibly substrings. For each generated substring, check if already present in Map
- If present, we increment the occurrences(value) of that substring
- If not present, we set the substring as a new key, and with a value of occurrences(value) of 1
- Loop through the map, and for each k,v pair, we see how many total combinations can be made from the value
Example:
Let's say we have three a's 
the total distinct number of unique combinations can be made is to distribute the first a to the next 2 a's, then distribute the second a to the last one.
3 = 2+1;
What about five b's? 
five b's = (4 * 5) / 2 = 10 total unique combinations
*/

function sherlockAndAnagrams(s) {
  let mapOfSubstrings = new Map();

  for (let i = 0; i < s.length; i++) {
    let currentString = "";
    for (let j = i; j < s.length; j++) {
      currentString += s[j];
      let sorted = currentString.split("").sort().join("");
      let found = mapOfSubstrings.get(sorted);
      if (found) {
        mapOfSubstrings.set(currentString, found + 1);
      } else {
        mapOfSubstrings.set(currentString, 1);
      }
    }
  }

  let totalAnagrams = 0;
  for (let [k, v] of mapOfSubstrings) {
    let totalCanBeMade = ((v - 1) * v) / 2; // this formula gives the sum of all possible combinations from 0 to n-1
    totalAnagrams += totalCanBeMade;
  }
  return totalAnagrams;
}

/*
Method 2,
Similar to method 1, except the formula is more COMPLEX in this one, end of the day its the same formula though.
Instead of using (n*n-1)/2, we use N!/(N-2)!(2)!, which are the same anyways
*/

function sherlockAndAnagrams2(s) {
  let anagramsFreq = new Map();

  for (let i = 0; i < s.length; i++) {
    let currentTotalString = "";

    for (let j = i; j < s.length; j++) {
      currentTotalString += s[j];
      let sortedCurrentString = currentTotalString.split("").sort().join("");
      let foundSortedStringInMap = anagramsFreq.get(sortedCurrentString);
      anagramsFreq.set(
        sortedCurrentString,
        foundSortedStringInMap ? sortedCurrentString + 1 : 1
      );
    }
  }

  let answer = 0;

  for (let [k, v] of anagramsFreq) {
    if (v >= 2) {
      let totalCombinations = factorial(v) / (factorial(v - 2) * factorial(2));
      answer += totalCombinations;
    }
  }
  return answer;
}

const factorial = (n) => {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
};
