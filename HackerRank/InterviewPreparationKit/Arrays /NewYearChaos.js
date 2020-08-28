/*
https://www.hackerrank.com/challenges/new-year-chaos/problem
*/

/*
My Solution 
- We loop through the array, and we first check if the value > index - 3. We do this because the array is consecutive, with values from 1 to n. 
  Therefore, array[6] SHOULD have 7 if no swaps occurred.
- If indeed it is greater than 3, we can simply print "Too Chaotic", and end the whole loop.
- If it isnt too chaotic yet, we can loop from the RIGHTFULLY THEIRS index minus two, which is q[i]-3, to the current i value 
- If any value encountered is greater, we know a swap occurred, and we increment bribes.
- we print bribes at the end
*/

function minimumBribes(q) {
  let bribes = 0;

  for (let i = 0; i < q.length; i++) {
    if (q[i] - i > 3) {
      console.log("Too chaotic");
      return;
    }
    for (let j = Math.max(0, q[i] - 3); j < i; j++) {
      if (q[j] > q[i]) {
        bribes++;
      }
    }
  }
  console.log(bribes);
}
