/*
  Node Depths 
  Difficulty: Medium
  
  The distance between a node in a Binary Tree and the tree's root is called the
  node's depth.
  Write a function that takes in a Binary Tree and returns the sum of its nodes'
  depths.
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
16
// The depth of the node with value 2 is 1.
// The depth of the node with value 3 is 1.
// The depth of the node with value 4 is 2.
// The depth of the node with value 5 is 2.
// Etc..
// Summing all of these depths yields 16.
*/

// This is the class of the input binary tree.
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
Method 1 - Recursively with sums []
TC: O(n)
SC: O(h) - where h is height of binary tree
- Have a depths[] holding all the depths 
- Have a helper fn that takes in a node, the depth, and the total depths []
- Helper fn checks if the node exists. If it doesn't, then we just return
- If it does, we increment the depth by 1 into a new variable newDepth
- Push the new depth into the depths[]
- Call the helperfn on node.right and node.left with the newDepth
*/
export function nodeDepths(root: BinaryTree) {
  // Write your code here.
  let depths: number[] = [];
  nodeDepthsHelper(root, -1, depths);
  return depths.reduce((acc, next) => acc + next);
}

const nodeDepthsHelper = (
  node: BinaryTree | null,
  depth: number,
  depths: number[]
) => {
  if (!node) {
    return;
  }
  let newDepth = depth + 1;
  depths.push(newDepth);
  nodeDepthsHelper(node.left, newDepth, depths);
  nodeDepthsHelper(node.right, newDepth, depths);
};

/*
Method 2 - Recursively without sums []
TC and SC same as Method 1
*/
export function nodeDepths2(root: BinaryTree | null, depth: number = 0) {
  if (!root) {
    return;
  }

  return (
    depth +
    nodeDepths2(root.left, depth + 1) +
    nodeDepths2(root.right, depth + 1)
  );
}

/*
Method 3- using a queue
- Using a queue, we define total = 0, and the queue takes in a new structure called the NodeAndDepth we made in the interface 
- The NodeAndDepth is a combination of a node and a depth into one single unit, as seen in the interface 
- We instantiate the queue with just {node: root, depth: 0}
- While queue.length, we shift off the first element of the queue, which is always a NodeAndDepth
- We then add that NodeAndDepth's depth onto total
- If node.left exists, we push a NodeAndDepth with node:node.left and depth: depth+1
- We do same thing for node.right 
*/
interface NodeAndDepth {
  node: BinaryTree;
  depth: number;
}
export function nodeDepths3(root: BinaryTree) {
  let total = 0;
  let queue: NodeAndDepth[] = [{ node: root, depth: 0 }];

  while (queue.length) {
    let currentNodeAndDepth = queue.shift();
    const { node, depth } = currentNodeAndDepth!;
    total += depth;
    if (node.left) {
      queue.push({ node: node.left, depth: depth + 1 });
    }
    if (node.right) {
      queue.push({ node: node.right, depth: depth + 1 });
    }
  }
  return total;
}
