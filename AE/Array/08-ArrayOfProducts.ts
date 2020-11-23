/*
Array Of Products
Difficulty: Medium


  Write a function that takes in a non-empty array of integers and returns an
  array of the same length, where each element in the output array is equal to
  the product of every other number in the input array.

  In other words, the value at output[i] is equal to the product of
  every number in the input array other than input[i].
  Note that you're expected to solve this problem without using division.

  Sample Input
  array = [5, 1, 4, 2]

  Sample Output
  [8, 40, 10, 20]
  // 8 is equal to 1 x 4 x 2
  // 40 is equal to 5 x 4 x 2
  // 10 is equal to 5 x 1 x 2
  // 20 is equal to 5 x 1 x 4

*/

/*
Method 1 - Nested Loop, naive solution
TC: O(n^2)
SC: O(n)
*/

function arrayOfProducts(array: number[]) {
  let answer = new Array(array.length);

  for (let i = 0; i < array.length; i++) {
    let leftTotal = calcCumulativeTotal(array.slice(0, i));
    let rightTotal = calcCumulativeTotal(array.slice(i + 1));
    answer[i] = leftTotal * rightTotal;
  }
  return answer;
}

//Helper fn
function calcCumulativeTotal(array: number[]) {
  let total = 1;
  for (let amount of array) {
    total *= amount;
  }
  return total;
}

/*
Method 2 - Division Method, not allowed, but used for example
TC: O(n)
SC: O(n)
*/

function arrayOfProducts2(array: Array<number>) {
  let cumulativeTotal = 1;
  for (let amount of array) {
    cumulativeTotal *= amount;
  }

  let answerArray = new Array(array.length);
  for (let i = 0; i < array.length; i++) {
    answerArray[i] = cumulativeTotal / array[i];
  }
  return answerArray;
}

/*
Method 3 - Efficient method, using two arrays that track the cumulative total from left, as well as right. (RECOMMENDED ANSWER)
TC: O(n)
SC: O(n)
*/

function arrayOfProducts3(array: number[]) {
  let answer = new Array(array.length);
  let cumulativeLeft = new Array(array.length);
  let cumulativeRight = new Array(array.length);

  let currentCumulatedLeft = 1;
  for (let i = 0; i < array.length; i++) {
    cumulativeLeft[i] = currentCumulatedLeft;
    currentCumulatedLeft *= array[i];
  }

  let currentCumulatedRight = 1;
  for (let i = array.length - 1; i >= 0; i--) {
    cumulativeRight[i] = currentCumulatedRight;
    currentCumulatedRight *= array[i];
  }

  for (let i = 0; i < answer.length; i++) {
    answer[i] = cumulativeLeft[i] * cumulativeRight[i];
  }

  return answer;
}

/*
Method 4 (My original answer) - Similar to method 3, but the cumulative arrays are calculated differently. For example, for cumulativeLeft, instead
of it tracking the cumulative value to the LEFT of the current IDX, this method tracks the cumulative value AT the current index
TC: O(n)
SC: O(n)
*/

function arrayOfProducts4(array: number[]) {
  let answer = new Array(array.length);
  let cumulativeLeft = new Array(array.length);
  let cumulativeRight = new Array(array.length);

  //fill cumulativeLeft
  for (let i = 0; i < cumulativeLeft.length; i++) {
    if (i === 0) {
      cumulativeLeft[i] = array[i];
      continue;
    }
    cumulativeLeft[i] = cumulativeLeft[i - 1] * array[i];
  }

  //fill cumulativeRight
  for (let i = array.length - 1; i >= 0; i--) {
    if (i === array.length - 1) {
      cumulativeRight[i] = array[i];
      continue;
    }

    cumulativeRight[i] = cumulativeRight[i - 1] * array[i];
  }

  //fill out answer Array
  for (let i = 0; i < answer.length; i++) {
    //if it is the first index, we have no cumulativeLeft, since it is the first index.
    if (i === 0) {
      answer[i] = cumulativeRight[i + 1];
      continue;
    }
    //If it is the last index, we have no cumulativeRight, so we take the cumulated Left values left of the last index
    else if (i === answer.length - 1) {
      answer[i] = cumulativeLeft[i - 2];
      continue;
    }

    //cumulative value at that index is the cumulated values to the left of the idx, multiplied with the cumulated values to the right of the idx, both excluding that idx
    answer[i] = cumulativeLeft[i - 1] * cumulativeRight[i + 1];
  }

  return answer;
}
