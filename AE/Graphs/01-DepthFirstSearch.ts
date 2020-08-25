/*

  You're given a Node class that has a name and an
  array of optional children nodes. When put together, nodes form
  an acyclic tree-like structure.
  Implement the depthFirstSearch method on the
Node class, which takes in an empty array, traverses the tree
  using the Depth-first Search approach (specifically navigating the tree from
  left to right), stores all of the nodes' names in the input array, and returns
  it.
  If you're unfamiliar with Depth-first Search, we recommend watching the
  Conceptual Overview section of this question's video explanation before
  starting to code.

  Sample Input 
  graph
      =  A
       /  |  \
      B   C   D
    / \     / \
E   F   G   H
     / \   \
    I   J   K


    Sample Output 
    ["A", "B", "E", "F", "I", "J", "C", "D", "G", "K", "H"]
*/

/*
Method 1 - Recursion with helper method
*/
export class Node {
  name: string;
  children: Node[];

  constructor(name: string) {
    this.name = name;
    this.children = [];
  }

  addChild(name: string) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array: string[]) {
    // Write your code here.
    this.dfsHelper(array, this);
    return array;
  }
  dfsHelper(array: string[], node: Node) {
    if (!node) {
      return;
    }
    array.push(node.name);
    node.children.forEach((child) => {
      this.dfsHelper(array, child);
    });
  }
}

/*
Method 2 - Recursion w/o Helper method
*/
export class Node2 {
  name: string;
  children: Node2[];

  constructor(name: string) {
    this.name = name;
    this.children = [];
  }

  addChild(name: string) {
    this.children.push(new Node2(name));
    return this;
  }

  depthFirstSearch(array: string[], node: Node2 = this) {
    // Write your code here.
    array.push(node.name);
    for (let i = 0; i < node.children.length; i++) {
      node.children[i].depthFirstSearch(array, node.children[i]);
    }
    return array;
  }
}
