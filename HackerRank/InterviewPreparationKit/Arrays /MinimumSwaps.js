/*
https://www.hackerrank.com/challenges/minimum-swaps-2/problem
*/

/*
My Solution
- Because the array is CONSECUTIVE and starts at 1, we know what index each value will occupy.
- Value 1 will occupy idx 0, value 2 will occupy idx 1, value 4 will occupy index 3, and so on.
- Therefore, we can loop through the array once, and check for if arr[idx] === idx+1. If not, then we put arr[idx] into its correct place, which is arr[arr[i]-1]. 
*/

function minimumSwaps(arr) {
  let swaps = 0;

  for (let i = 0; i < arr.length; i++) {
    console.log(arr);
    if (arr[i] !== i + 1) {
      let currentValue = arr[i];
      arr[i] = arr[currentValue - 1];
      arr[currentValue - 1] = currentValue;
      swaps++;
      i--;
    }
  }
  return swaps;
}
