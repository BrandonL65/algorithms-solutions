/*

*/

/*
My Solution - Recursively 
TC: O(n)
SC: O(n)
where n is the # of nodes in the binary tree itself
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
