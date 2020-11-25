/*
Run-Length Encoding
Difficulty: Easy


  Write a function that takes in a non-empty string and returns its run-length
  encoding.

  From Wikipedia, "run-length encoding is a form of lossless data compression in
  which runs of data are stored as a single data value and count, rather than as
  the original run." For this problem, a run of data is any sequence of
  consecutive, identical characters. So the run "AAA" would be
  run-length-encoded as "3A".
  To make things more complicated, however, the input string can contain all
  sorts of special characters, including numbers. And since encoded data must be
  decodable, this means that we can't naively run-length-encode long runs. For
  example, the run "AAAAAAAAAAAA" (12 As), can't
  naively be encoded as "12A", since this string can be decoded as
  either "AAAAAAAAAAAA" or "1AA. Thus, long runs (runs
  of 10 or more characters) should be encoded in a split fashion; the
  aforementioned run should be encoded as "9A3A".

Sample Input
string = "AAAAAAAAAAAAABBCCCCDD"

Sample Output
"9A4A2B4C2D"
*/

/*
Method 1
TC: O(n)
SC: O(n)
*/

function runLengthEncoding(string: string) {
  let answer = "";

  let lastLetter: null | string = null;
  let occurrences = 0;

  for (let i = 0; i < string.length; i++) {
    if (!lastLetter) {
      lastLetter = string[i];
      occurrences++;
      continue;
    }
    if (string[i] !== lastLetter || occurrences === 9) {
      answer += occurrences.toString();
      answer += lastLetter;
      occurrences = 1;
      lastLetter = string[i];
      continue;
    }
    occurrences++;
  }
  //Handle the last run of letters
  answer += occurrences.toString();
  answer += lastLetter;

  return answer;
}
