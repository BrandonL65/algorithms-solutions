/*
Count Triplets 
https://www.hackerrank.com/challenges/count-triplets-1/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

Difficulty: Medium
*/

/*
Method 1
TC: O(n)
SC: O(n)
*/

const countTriplets = (arr: Array<number>, r: number) => {
  let answer = 0;

  let numFrequencies = new Map<number, number>();

  //possibleTriplets contains the SECOND num in a possible triplet, for example, 1,3,9,9 possibleTriplets contains 1 pointing to 1 (one 3), 3 pointing to 2(two nines)
  let possibleTriplets = new Map<number, number>();

  for (let i = arr.length - 1; i >= 0; i--) {
    let currentNum = arr[i];

    //if possible pair contains a second num with some frequency
    if (possibleTriplets.has(currentNum * r)) {
      answer += possibleTriplets.get(currentNum * r);
    }

    //set this num in possibleTriplets if numFreqs contains this num * r
    if (numFrequencies.has(currentNum * r)) {
      possibleTriplets.set(
        currentNum,
        possibleTriplets.has(currentNum)
          ? possibleTriplets.get(currentNum) +
              numFrequencies.get(currentNum * r)
          : numFrequencies.get(currentNum * r)
      );
    }

    //whatever happens, always increment the num in numFrequencies
    numFrequencies.set(
      currentNum,
      numFrequencies.has(currentNum) ? numFrequencies.get(currentNum) + 1 : 1
    );
  }

  return answer;
};
