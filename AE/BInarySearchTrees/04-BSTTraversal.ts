/*
  BST Traversal
  Difficulty: Medium

  
  Write three functions that take in a Binary Search Tree (BST) and an empty
  array, traverse the BST, add its nodes' values to the input array, and return
  that array. The three functions should traverse the BST using the in-order,
  pre-order, and post-order tree-traversal techniques, respectively.

  If you're unfamiliar with tree-traversal techniques, we recommend watching the
  Conceptual Overview section of this question's video explanation before
  starting to code.

  Each BST node has an integer value, a
  left child node, and a right child node. A node is
  said to be a valid BST node if and only if it satisfies the BST
  property: its value is strictly greater than the values of every
  node to its left; its value is less than or equal to the values
  of every node to its right; and its children nodes are either valid
  BST nodes themselves or None / null.

  Sample Input 
  tree=
        10
       /     \
      5      15
    /   \       \
   2     5       22
 /
1

  Sample Output 
  inOrderTraverse: [1, 2, 5, 5, 10, 15, 22] 
  preOrderTraverse: [10, 5, 2, 1, 5, 15, 22] 
  postOrderTraverse: [1, 2, 5, 5, 22, 15, 10] 
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
Method 1: Recursively for all three
TC: O(n), we touch all nodes
SC: O(n), since we have an array storing all values 
- inOrder, preOrder, postOrder traversal methods are all similar ways to do the same problem, just recursively calling itself in different areas of the code
*/

export function inOrderTraverse(tree: BST, array: number[]) {
  if (!tree) {
    return;
  }

  inOrderTraverse(tree.left, array);
  array.push(tree.value);
  inOrderTraverse(tree.right, array);
  return array;
}

export function preOrderTraverse(tree: BST, array: number[]) {
  if (!tree) {
    return;
  }

  array.push(tree.value);
  preOrderTraverse(tree.left, array);
  preOrderTraverse(tree.right, array);
  return array;
}

export function postOrderTraverse(tree: BST, array: number[]) {
  if (!tree) {
    return;
  }

  postOrderTraverse(tree.left, array);
  postOrderTraverse(tree.right, array);
  array.push(tree.value);
  return array;
}
