---
setup: |
  import Layout from '../../layouts/BlogPost.astro'

title: Binary Search Tree Depth First
publishDate: 10 July 2023
name: Nick Huemmer
twitter: 'https://twitter.com/nickjhuemmer'
value: 128
description: 
tags: JavaScript, data structures, binary search tree, depth first, recursion
---


# Binary Search Trees 
A binary search tree (BST) is a type of binary tree data structure where each node has a value and is connected to two other nodes. The values of all nodes in the left subtree are less than or equal to the parent node's value, and all values in the right subtree are greater than the parent node's value.

This characteristic makes binary search trees efficient for operations like lookup, insertion, and deletion.  Essentially, it can help you find a value in a sorted list quickly by repeatedly halving the list until you find the value you're looking for.

Here's an example of a binary search tree:

    8
   / \
  3   10
 / \    \
1   6    14
   / \   /
  4   7 13

In this tree:

- The root node is 8.
- The left subtree of 8 contains values less than 8 (3, 1, 6, 4, 7).
- The right subtree of 8 contains values greater than 8 (10, 14, 13).


# Binary Search Tree Depth First

Depth-first search (DFS) is a traversal method in binary search trees. DFS visits the nodes of the tree in a specific order, depending on the variant of DFS used. The main variants of DFS are:

1. **Preorder Traversal (Root, Left, Right)**: The root node is visited first, then the left subtree, and finally the right subtree.

2. **Inorder Traversal (Left, Root, Right)**: The left subtree is visited first, then the root node, and finally the right subtree. Notably, performing an inorder traversal on a binary search tree results in visiting the nodes in ascending order.

3. **Postorder Traversal (Left, Right, Root)**: The left subtree is visited first, then the right subtree, and finally the root node.

Here's an example of DFS in a binary search tree, and the order nodes are visited with each variant:

```
    4
   / \
  2   5
 / \
1   3
```

- Preorder Traversal: 4, 2, 1, 3, 5
- Inorder Traversal: 1, 2, 3, 4, 5 (Note how this is in ascending order)
- Postorder Traversal: 1, 3, 2, 5, 4

DFS is an essential tool in many algorithms, including checking for cycles in a graph, pathfinding, topological sorting, and others.

# Depth First Search in JavaScript

Here are two examples of how to implement a depth-first search in JavaScript. The first example is an iterative solution that uses a stack data structure. The second example is a recursive solution.

The first thing to do is create a node class that has a value, a left node, and a right node.  The node class essentially constructs each node for the tree.  We then create a new binary search tree by creating a new node with values for every node, then set the left and right values for each node.  This is all that's need to create a basic binary tree.

In the iterative example, we take advantage of a stack to allow us to handle the branching values.  We start at the root, get the left and right values if they exist, and push them onto an array and then move to the next node.  Using a stack data structure allows us to handle the branching values.

In the second example, we use recursion to traverse down either side of the tree.  We start with a base case that checks if the root is null.  If it is, we return an empty array.  If it's not, we recurse down the left branch from root and then recurse down the right branch from the root.  We then return the root plus the evaluated result from leftValues and rightValues.

```javascript
// This is all that's need to create a basic binary tree
// We create a node class that has a value, a left node, and a right node
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// We create a new binary search tree by creating a new node
// with values for every node
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

// We then set the left and right values for each node
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// ****This is the non-recursive, iterative solution that uses a stack***
// starting at the root, get the left and right values if they exist
// and push them onto an array and then move to the next node
// using a stack data structure allows us to handle the branching values

// Time: O(n)
// Space: O(n)
const depthFirstValues = (root) => {
  // test if root is null
  if (root === null) return [];
  // array to hold values
  const values = [];
  // use the stack array to hold nodes, stack holds the first node
  const stack = [root];
  // use a while loop to iterate over the stack
  while (stack.length > 0) {
    // the current node is the what's popped off the stack
    const current = stack.pop();
    // push the value of current to the values array
    values.push(current.val);
    // as long as current has values, we push them to the array
    if (current.right) {
      values.push(current.right);
    }
    if (current.left) {
      values.push(current.left);
    }
  }
  return values;
};

console.log(depthFirstValues(a)); // [ 'a', 'c', 'f', 'b', 'e', 'd' ]

//* **The Recursive Solution ***/
// Time: O(n)
// Space: O(n)

// This solution uses recursion to traverse down either side of the tree.
const depthFirstValuesRecursive = (root) => {
  // base case
  if (root === null) return [];
  // recurse down the left branch from root
  const leftValues = depthFirstValuesRecursive(root.left);
  // recurse down the right branch from the root
  const rightValues = depthFirstValuesRecursive(root.right);
  // return the root plus the evaluated result from leftValues and rightValues
  return [root.value, ...leftValues, ...rightValues];
};

console.log(depthFirstValuesRecursive(a)); //  [ 'a', 'b', 'd', 'e', 'c', 'f' ]

```

Binary search trees are a very useful data structure and you'll encounter several problems that will require you to traverse them.  It's important to understand how to traverse BSTs using depth first search and to distinguish between a depth first search and a breadth first search.  