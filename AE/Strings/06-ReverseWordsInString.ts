/*
Reverse Words In String 
Difficulty: Medium

  Write a function that takes in a string of words separated by one or more
  whitespaces and returns a string that has these words in reverse order. For
  example, given the string "tim is great", your function should
  return "great is tim".


  For this problem, a word can contain special characters, punctuation, and
  numbers. The words in the string will be separated by one or more whitespaces,
  and the reversed string must contain the same whitespaces as the original
  string. For example, given the string
  "whitespaces    4" you would be expected to return
  "4    whitespaces".

  Note that you're not allowed to to use any built-in
  split or reverse methods/functions. However, you
  are allowed to use a built-in join method/function.
  Also note that the input string isn't guaranteed to always contain words.

  Sample Input
  string = "AlgoExpert is the best!"

  Sample Output
  "best! the is AlgoExpert"

*/

/*
Method 1

*/

function reverseWordsInString(string: string) {
  if (string.length < 1) {
    return "";
  }

  let reversedString = "";
  let arrayToTrackCurrentWord = new Array(string.length - 1).fill("");
  let indexBeingFilled = string.length - 1;

  for (let i = string.length - 1; i >= 0; i--) {
    if (i === 0) {
      arrayToTrackCurrentWord[indexBeingFilled] = string[i];
      reversedString += arrayToTrackCurrentWord
        .slice(indexBeingFilled)
        .join("");
    } else if (string[i] === " ") {
      reversedString += arrayToTrackCurrentWord
        .slice(indexBeingFilled + 1)
        .join("");
      arrayToTrackCurrentWord = new Array(string.length - 1).fill("");
      indexBeingFilled = string.length - 1;
      continue;
    }

    arrayToTrackCurrentWord[indexBeingFilled] = string[i];
    indexBeingFilled--;
  }

  return reversedString;
}
