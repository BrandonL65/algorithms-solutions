/*
Sherlock And The Valid String 
https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings
Difficulty: Medium


*/

/*
Method 1
*/

function isValid(s) {
  let stringFrequencies = new Map();
  let frequencyOfFrequencies = new Map();

  //fill map with frequency of each letter
  for (let i = 0; i < s.length; i++) {
    stringFrequencies.set(
      s[i],
      stringFrequencies.has(s[i]) ? stringFrequencies.get(s[i]) + 1 : 1
    );
  }

  //frequency of frequencies of letters
  for (let [string, frequency] of stringFrequencies) {
    frequencyOfFrequencies.set(
      frequency,
      frequencyOfFrequencies.has(frequency)
        ? frequencyOfFrequencies.get(frequency) + 1
        : 1
    );
  }

  //if all frequencyes are same then valid
  if (frequencyOfFrequencies.length < 2) {
    return "YES";
  }
  //if more than 3 diff frequencies then cannot make valid
  if (frequencyOfFrequencies.length > 2) {
    return "NO";
  }

  //if there are exactly 2 diff frequencies
  let firstEntry = Array.from(frequencyOfFrequencies)[0];
  let secondEntry = Array.from(frequencyOfFrequencies)[1];
  //if any key and value both equal 1, then if I remove that one it would disappear essentially
  if (
    (firstEntry[0] === 1 && firstEntry[1] === 1) ||
    (secondEntry[0] === 1 && secondEntry[1] === 1)
  ) {
    return "YES";
  }
  //if the key isnt 1... then it won't disappear if we decrement it, itll just decrement to key-1
  let diff = Math.abs(firstEntry[0] - secondEntry[0]);
  if (diff > 1) {
    return "NO";
  }

  if (firstEntry[1] === 1 || secondEntry[1] === 1) {
    return "YES";
  }
  return "NO";
}
