/*
  Validate BST
  Difficulty: Medium


  Write a function that takes in a potentially invalid Binary Search Tree (BST)
  and returns a boolean representing whether the BST is valid.

  Each BST node has an integer value, a
  left child node, and a right child node. A node is
  said to be a valid BST node if and only if it satisfies the BST
  property: its value is strictly greater than the values of every
  node to its left; its value is less than or equal to the values
  of every node to its right; and its children nodes are either valid
  BST nodes themselves or None / null.

  A BST is valid if and only if all of its nodes are valid
  BST nodes.

  Sample Input 
  tree=
         10
       /     \
      5      15
    /   \   /   \
   2     5 13   22
 /           \
1            14

  Sample Output 
  true 
*/

// This is an input class. Do not edit.
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
Method 1 - Recursively without helper fn 
TC: O(n)
SC: O(d) The max amt of space used on the call stack at once is the longest depth of nodes, since that full call stack can only be resolved once you reach a node without tree.left and tree.right

- Add parameters called minValue and maxValue initialized to -Infinity and Infinity. This is because each node can have a valid min/max value for it to be a valid BST node.
- For example, a node has value 10. The node to it's left, inherits that node's minValue, but its maxValue is constrained to the current node's value.
- We check if tree.value is less than its minValue, or greater than/equal to its maxValue. If any fails, we return false;
- We then calculate recursively tree.left and tree.right, and see if any of them return false
- If both of them do not return false, we then return true
*/

export function validateBst(
  tree: BST,
  minValue = -Infinity,
  maxValue = Infinity
) {
  if (tree.value < minValue) {
    return false;
  }
  if (tree.value >= maxValue) {
    return false;
  }

  if (tree.left) {
    let left = validateBst(tree.left, minValue, tree.value);
    if (!left) {
      return false;
    }
  }
  if (tree.right) {
    let right = validateBst(tree.right, tree.value, maxValue);
    if (!right) {
      return false;
    }
  }
  return true;
}

/*
Method 2 - Recursive with helper fn (almost same as method 1)
*/
export function validateBst2(tree: BST) {
  // Write your code here.
  let result = validateBSTHelper(tree, -Infinity, Infinity);
  return result;
}

const validateBSTHelper = (node: BST, minValue: number, maxValue: number) => {
  if (node.value < minValue) {
    return false;
  }
  if (node.value >= maxValue) {
    return false;
  }

  if (node.left) {
    let left = validateBSTHelper(node.left, minValue, node.value);
    if (!left) {
      return false;
    }
  }
  if (node.right) {
    let right = validateBSTHelper(node.right, node.value, maxValue);
    if (!right) {
      return false;
    }
  }
  return true;
};
