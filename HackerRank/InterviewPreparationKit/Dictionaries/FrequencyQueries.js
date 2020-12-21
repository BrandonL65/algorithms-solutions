/*
Interview Preparation Kit - Dictionary - Frequency Queries
Difficulty: Medium 
https://www.hackerrank.com/challenges/frequency-queries/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=dictionaries-hashmaps
*/

/*
Method 1, NOT BEST TIME COMPLEXITY DUE TO ALWAYS HAVING TO SEARCH IN DICTIONARY OF VALID VALUES FOR CASE 3
*/
function freqQuery2(queries) {
  let answer = [];
  let frequencies = {};

  for (let i = 0; i < queries.length; i++) {
    const [action, value] = queries[i];
    let foundInFrequencies = frequencies[value];
    if (action === 1) {
      if (foundInFrequencies) {
        frequencies[value] = foundInFrequencies + 1;
      } else {
        frequencies[value] = 1;
      }
    } else if (action === 2) {
      if (foundInFrequencies) {
        frequencies[value] = frequencies[value] - 1;
      }
    } else {
      let frequencyExists = false;
      for (let [k, v] of frequencies) {
        if (v === value) {
          frequencyExists = true;
          break;
        }
      }
      answer.push(frequencyExists ? 1 : 0);
    }
  }
  return answer;
}

/*
Method 2: Preferred method, efficient
*/

function freqQuery(queries) {
  let answer = [];
  let frequencyOfNums = {};
  let frequencyOfFrequencies = {};

  for (let i = 0; i < queries.length; i++) {
    let [action, value] = queries[i];
    let foundValue = frequencyOfNums[value] || 0;
    switch (action) {
      case 1:
        //add frequency within freqOfNums, then update frequencies within freqOfFreqs
        //ADD
        frequencyOfNums[value] = foundValue + 1;
        let newUpdatedValue = frequencyOfNums[value];
        //increment
        if (frequencyOfFrequencies[newUpdatedValue]) {
          frequencyOfFrequencies[newUpdatedValue] =
            frequencyOfFrequencies[newUpdatedValue] + 1;
        } else {
          frequencyOfFrequencies[newUpdatedValue] = 1;
        }
        //decrement
        frequencyOfFrequencies[newUpdatedValue - 1] =
          frequencyOfFrequencies[newUpdatedValue - 1] - 1;
        break;
      case 2:
        //delete frequency within freqOfNums, then update frequencies within freqOfFreqs
        if (foundValue) {
          frequencyOfNums[value] = foundValue - 1;
        }
        let newValue = frequencyOfNums[value];
        if (newValue > 0) {
          frequencyOfFrequencies[newValue] =
            frequencyOfFrequencies[newValue] + 1;
        }
        frequencyOfFrequencies[newValue + 1] =
          frequencyOfFrequencies[newValue + 1] - 1;
        break;
      case 3:
        answer.push(frequencyOfFrequencies[value] ? 1 : 0);
        break;
    }
  }
}
