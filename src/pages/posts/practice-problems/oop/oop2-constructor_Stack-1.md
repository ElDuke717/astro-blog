---
setup: |
  import Layout from '../../../../../layouts/BlogPost.astro'

title: JavaScript OOP - Stack
publishDate: 05 Feb 2023
name: Nick Huemmer
twitter: 'https://twitter.com/nickhuemmer'
value: 128
description: Create a Stack constructor function.
tags:
  [
    JavaScript,
    OOP,
    Object-Oriented-Programming,
    prototype,
    constructor function,
  ]
---

# ChatGPT medium OOP problem Stack

This is similar to another `Stack` problem floating around, perhaps less difficult?

> Problem: Declare a function Stack, which takes in an array as an argument and returns an instance of a Stack object when invoked with the new keyword. The Stack object should have the following methods:
>
> - push(element): Adds an element to the top of the stack
> - pop(): Removes and returns the top element of the stack
> - peek(): Returns the top element of the stack without removing it
> - isEmpty(): Returns true if the stack is empty, false otherwise
> - size(): Returns the number of elements in the stack.

## My solution

```javascript
//i: array, any data type inside
//o: none, creates an instance of a Stack object

// declare Stack, takes one param, arr, an array with any data type inside
function Stack(arr) {
  // set the value of this.stack to the array passed in, or zero
  this.stack = arr;
  // declare the push method, takes one param, element
  this.push = function (element) {
    // push will add an element to the end of the stack array
    this.stack.push(element);
    // increment size
    //this.size++;
  };
  // declare the pop method, no params
  this.pop = function () {
    // pop off the last element of stack with pop.
    this.stack.pop();
    // decrement size
  };
  // declare peek method, no params, returns the last element of the stack array
  this.peek = function () {
    // return this.stack[this.stack.length - 1]
    return this.stack[this.stack.length - 1];
  };
  // declare isEmpty, takes no params
  this.isEmpty = function () {
    return this.stack.length === 0 ? true : false;
  };
  //returns true if this.stack.length === 0, otherwise false
  // declare size, no params
  this.size = function () {
    // return the stack.length
    return this.stack.length;
  };
}

const stuff = new Stack([
  1,
  true,
  'socks',
  5,
  42,
  'licorice',
  false,
  'itchy',
]);
console.log(stuff);
console.log(stuff.stack);
console.log(stuff.push('dentures'));
console.log(stuff.stack);
console.log(stuff.size());
console.log(stuff.isEmpty()); // false
stuff.pop();
console.log(stuff.size());
console.log(stuff.stack);
console.log(stuff.peek());
```

## Another, more concise solution

```javascript
function Stack(array) {
    this.stack = array || [];
    this.size = 0;
}
Stack.prototype.push = function(element) {
    this.stack.push(element);
    this.size++;
};
Stack.prototype.pop = function() {
    if (this.isEmpty()) {
        return null;
    }
    this.size--;
    return this.stack.pop();
};
Stack.prototype.peek = function() {
    return this.stack[this.stack.length - 1];
};
Stack.prototype.isEmpty = function() {
    return this.stack.length === 0;
};
Stack.prototype.size = function() {
    return

```
