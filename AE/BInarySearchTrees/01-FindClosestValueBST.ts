/*
  Find Closest Value BST 
  Difficulty: Easy

  Write a function that takes in a Binary Search Tree (BST) and a target integer
  value and returns the closest value to that target value contained in the BST.You can assume that there will only be one closest value.
  Each BST node has an integer value, a
  left child node, and a right child node. A node is
  said to be a valid BST node if and only if it satisfies the BST
  property: its value is strictly greater than the values of every
  node to its left; its value is less than or equal to the values
  of every node to its right; and its children nodes are either valid
  BST nodes themselves or None / null.

  Sample Input 
  tree
   =   10
       /     \
      5      15
    /   \   /   \
   2     5 13   22
 /           \
1            14

  Sample Output 
  13
*/

class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/*
Method 1 - Iteratively
Best
TC: O(logn)
SC: O(1)
Worst
O(n) TC and SC 
- Have a value storing current closest value, and the currentNode you are traversing 
- While currentNode !== null, we find the diff between existing difference and target, and the diff between current Node's value and target
- If the latter is smaller, we reassign that value as the closestValue
- If Node's value < target, we assign node.right as the new currentNode, else we assign node.left
*/
export function findClosestValueInBst(tree: BST, target: number) {
  // Write your code here.
  let closestValue = Infinity;
  let currentNode: BST | null = tree;
  while (currentNode !== null) {
    let difference = Math.abs(closestValue - target);
    let currentDifference = Math.abs(currentNode.value - target);

    if (currentDifference < difference) {
      closestValue = currentNode.value;
    }
    if (currentNode.value < target) {
      currentNode = currentNode.right;
    } else {
      currentNode = currentNode.left;
    }
  }
  return closestValue;
}

/*
Method 2 - Recursively 
Average
TC: O(logn)
SC: O(logn)
Worst
O(n) TC and SC
- If tree is null, we return closest
- We find differnece of current closest and target, as well as current Node's value and target
- If latter is smaller, we assign closest = node.value 
- If node.value < target, we recursively call the fn on node.left, else we call with node.right
*/
export function findClosestValueInBst2(
  tree: BST | null,
  target: number,
  closest: number = Infinity
): number {
  // Write your code here.
  if (!tree) {
    return closest;
  }

  let difference = Math.abs(closest - target);
  let currentDifference = Math.abs(tree.value - target);

  if (currentDifference < difference) {
    closest = tree.value;
  }
  if (tree.value < target) {
    return findClosestValueInBst2(tree.right, target, closest);
  } else {
    return findClosestValueInBst2(tree.left, target, closest);
  }
}
