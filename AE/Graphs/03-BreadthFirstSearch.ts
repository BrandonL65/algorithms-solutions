/*
  Difficulty: Medium
  You're given a Node class that has a name and an
  array of optional children nodes. When put together, nodes form
  an acyclic tree-like structure.
  Implement the breadthFirstSearch method on the
  Node class, which takes in an empty array, traverses the tree
  using the Breadth-first Search approach (specifically navigating the tree from
  left to right), stores all of the nodes' names in the input array, and returns
  it.
  If you're unfamiliar with Breadth-first Search, we recommend watching the
  Conceptual Overview section of this question's video explanation before
  starting to code.

  Sample Input 
  graph = 
       A
     /  |  \
    B   C   D
   / \     / \
  E   F   G   H
     / \   \
    I   J   K

    Sample Output 
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"]
*/

/*
Method 1 - Using a queue and pushing/shifting values off the queue
TC: O(v+e)
SC: O(v)
- Have a queue that contains Nodes, and instantiate the queue with the beginner node, like this: queue=[this]
- while queue's length >= 1, shift off the first Node in the queue each time, and push its name onto the array.
- For each of that Node's children, push them onto the back of the queue
*/
export class Node {
  name: string;
  children: Node[];

  constructor(name: string) {
    this.name = name;
    this.children = [];
  }

  addChild(name: string): Node {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array: string[]) {
    // Write your code here.
    let queue: Node[] = [this];
    while (queue.length >= 1) {
      let currentNode = queue.shift();
      array.push(currentNode!.name);
      currentNode!.children.forEach((child) => {
        queue.push(child);
      });
    }
    return array;
  }
}
