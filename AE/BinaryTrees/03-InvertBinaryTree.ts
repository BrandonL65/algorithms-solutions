/*
  Invert Binary Tree
  Difficulty: Medium

  Write a function that takes in a Binary Tree and inverts it. In other words,
  the function should swap every left node in the tree for its corresponding
  right node.
  Each BinaryTree node has an integer value, a
  left child node, and a right child node. Children
  nodes can either be BinaryTree nodes themselves or
  None / null.

  Sample Input 
  tree 
   =    1
       /     \
      2       3
    /   \   /   \
   4     5 6     7
 /   \
8     9

Sample Output 
       1
    /     \
   3       2
 /   \   /   \
7     6 5     4
            /   \
           9     8
*/

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

/*
Method 1 - Recursively
TC: O(n)
SC: O(d) d is depth of tree
- If tree(node) is null, we return
- If not null, swap that node's left and right branches 
- Call the same fn recursively  on node's left and right branches
*/
function invertBinaryTree(tree: BinaryTree) {
  if (!tree) {
    return;
  }

  let leftBranch = tree.left;
  tree.left = tree.right;
  tree.right = leftBranch;
}

/*
Method 2 - Using a queue
TC: O(n)
SC: O(n)
- Have a queue that initially holds the root tree node
- While queue.length, shift off the first element of the queue
- Invert that node's left and right branches
- If left branch exists, push it onto queue
- Do same for right branch
*/

function invertBinaryTree2(tree: BinaryTree) {
  let queue = [tree];
  while (queue.length) {
    let currentNode = queue.shift()!;
    let leftBranch = currentNode.left;
    currentNode.left = currentNode.right;
    currentNode.right = leftBranch;
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }
}
