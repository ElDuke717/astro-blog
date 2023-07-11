---
setup: |
  import Layout from '../../layouts/BlogPost.astro'

title: Binary Search Tree Breadth First Traversal
publishDate: 10 July 2023
name: Nick Huemmer
twitter: 'https://twitter.com/nickjhuemmer'
value: 128
description: 
tags: JavaScript, data structures, binary search tree, breadth first
---

# Breadth First Traversal

Continuing our exploration of **Binary Search Trees**, we'll look at **Breadth First Traversal**.  This is a traversal method in binary search trees that visits the nodes of the by traversing each "layer" starting at the root node and moving down the tree.  Instead of going deep into the tree, we'll go across it, layer by layer.

Here's an example of a binary search tree:
```
      a
    /   \
   b     c
  / \     \
 d   e     f
```
And if we were to traverse it breadth first, we'd visit the nodes in this order:

**a, b, c, d, e, f**

This is because we are traversing each node, layer by layer, starting at the root node. 
In order to implement this with our code, we'll need to use a _queue_ rather than a _stack_.  Remember, we would use a stack data structure for depth first traversal.  

As a refresher, a queue is a structure much like a line at the DMV, where the first person in line is the first person to be served.  In a queue, we can only add items to the end of the queue, and we can only remove items from the front.  This is in contrast to a stack, where we can only add items to the top of the stack, and we can only remove items from the top of the stack.  Remember, a stack is more like a stack of plates or pancakes, you can only take one off the top.

## Implementation

We'll use a queue to keep track of the nodes we need to visit, and we'll push the root node onto the queue to start.  Then, we'll iterate through the queue, pushing the left and right nodes onto the queue as we go.  We'll also push the values of each node onto an array, which we'll return at the end.

```
// first we create a new binary search tree by creating a new node with values for every node
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// then we create a function that takes in a root node
const breadthFirstValues = (root) => {
  // edge case: if the root is null, return an empty array
  if (root === null) return [];
  // use breadth first traversal to get all values of the tree
  const values = [];
  // use a stack to hold the nodes - we'll traverse differently
  const stack = [root];
  // iterate through the tree with a while loop, pushing values at each level
  while (stack.length > 0) {
    // shift off the first node, in this case we use a queue instead of a stack
    const current = stack.shift();
    // push the value of current to the values array
    values.push(current.val);
    // if there's a left or right value, push it onto the stack
    if (current.left) {
      stack.push(current.left);
    }
    if (current.right) {
      stack.push(current.right);
    }
  }
  return values;
};

console.log(breadthFirstValues(a)); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

```
## Explanation

In this solution, we start by pushing the root node onto the queue.  Then, we iterate through the queue, shifting off the first node and pushing its value onto the values array.  After that, we check if there are left and right nodes, and if there are, we push them onto the queue.  As each current node is shifted off, it's left and right children are pushed onto the queue, and the next node in the queue is shifted off to become current.  
This continues until the queue is empty, and then we return the values array.

Note - there is no recursive solution for breadth first traversal - the queue order prevents the use of recursion as is used in depth first traversal.

## Complexity
Time: O(n)
Space: O(n)