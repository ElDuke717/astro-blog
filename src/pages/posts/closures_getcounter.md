---
setup: |
  import Layout from '../../layouts/BlogPost.astro'

title: JavaScript Closures - getCounter
publishDate: 15 Feb 2023
name: Nick Huemmer
twitter: 'https://twitter.com/nickhuemmer'
value: 128
description: Increment and decrement a number using objects and closures.
tags: JavaScript, cloures, count, numbers, objects, methods, increment, decrement
---

## The Problem

>Declare a function 'getCounter', which takes one argument, a number `num` and returns an object with two methods: 'increment' and 'decrement'. The methods should increase and decrease the original number passed to getCounter, respectively, and return the updated number.

This problem is a bit different, as rather than returning a function, an object with methods is returned.  The returned methods have access to the variable `count`, which is set to the `number` passed in and is incremented or decremented depending on the method that is called.

```javascript
//i: number
//o: updated number based on method called 

// declare getCounter, has no params
function getCounter(number) {
  // declare the variable count, assigned the value of number
  let count = number;
  // return an object containing the increment and decrement methods
  return {
    // increment increases count and returns it
    increment: function() {
      count++;
      return count;
    },
    // decrement decreases count and returns it
    decrement: function() {
      count--;
      return count;
    }
  }
}

const counter = getCounter(3);
console.log(counter.increment()); // expected output: 4
console.log(counter.increment()); // expected output: 5
console.log(counter.decrement()); // expected output: 4
```