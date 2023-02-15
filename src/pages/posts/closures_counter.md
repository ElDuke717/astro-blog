---
setup: |
  import Layout from '../../layouts/BlogPost.astro'

title: JavaScript Closures - Counter
publishDate: 15 Feb 2023
name: Nick Huemmer
twitter: 'https://twitter.com/nickhuemmer'
value: 128
description: Keep count of numbers passed in using closure.
tags: JavaScript, cloures, count, numbers
---

## The Problem

> Declare a function 'counter', which takes no arguments and returns another function. The returned function takes a number as an argument, and when invoked, it will return the sum of the number passed in and the number initially passed to the 'counter' function.

This is a simple, straightforward problem that demonstrates the concept of a persistent memory in a closure. `count` is declared in the outer function `counter`, and `inner` has access to `count` since it's within `counter`'s scope.

## One solution

```javascript
// i: number
// o: sum of number already stored and number pased in

// declare function counter
function counter() {
  // declare variable called count set to zero
  let count = 0;
  // return function with num passed in
  function inner(num) {
    // increment counter by num
    count += num;
    // return counter
    return count;
  }
  return inner;
}

const test = counter();
console.log(test(5)); // 5
console.log(test(10)); // 15
console.log(test(100)); // 115
```
