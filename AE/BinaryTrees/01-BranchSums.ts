/*
  Branch Sums 
  Difficulty: Easy
  
  Write a function that takes in a Binary Tree and returns a list of its branch
  sums ordered from leftmost branch sum to rightmost branch sum.
  A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree
  branch is a path of nodes in a tree that starts at the root node and ends at
  any leaf node.
  Each BinaryTree node has an integer value, a
  left child node, and a right child node. Children
  nodes can either be BinaryTree nodes themselves or
  None / null
  Sample Input 
  tree =
            1
        /     \
       2       3
     /   \    /  \
    4     5  6    7
  /   \  /
 8    9 10

 Sample Output 
 [15, 16, 18, 10, 11]
 // 15 == 1 + 2 + 4 + 8
 // 16 == 1 + 2 + 4 + 9
 // 18 == 1 + 2 + 5 + 10
 // 10 == 1 + 3 + 6
 // 11 == 1 + 3 + 7
*/

/*
My Solution - Recursively 
TC: O(n)
SC: O(n)
where n is the # of nodes in the binary tree itself
- First, you have a sums[] that holds all the branch sums that we find 
- Create a helper method that loops through the binary tree recursively
- Base Case - whenever we come across a node without any children, all its value to currentSum, and PUSH it to sums array
- If node doesnt match base case, we calculate the new sum (currentSum + that node's value), then if theres node.left, call helperfn recursively on it with node.left, newSum, sumsarr
- Do same thing for node.right
*/

// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function branchSums(root: BinaryTree): number[] {
  // Write your code here.
  let sums: number[] = [];
  branchSumsHelper(root, 0, sums);
  return sums;
}

function branchSumsHelper(
  node: BinaryTree,
  currentSum: number,
  sums: number[]
) {
  if (!node.left && !node.right) {
    sums.push(currentSum + node.value);
    return;
  }

  let newSum = currentSum + node.value;
  if (node.left) {
    branchSumsHelper(node.left, newSum, sums);
  }
  if (node.right) {
    branchSumsHelper(node.right, newSum, sums);
  }
}
