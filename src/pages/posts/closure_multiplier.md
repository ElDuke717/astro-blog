---
setup: |
  import Layout from '../../layouts/BlogPost.astro'

title: JavaScript Closures - Multiplier
publishDate: 15 Feb 2023
name: Nick Huemmer
twitter: 'https://twitter.com/nickhuemmer'
value: 128
description: Keep count of numbers passed in using closure.
tags: JavaScript, cloures,numbers
---

## The Problem
>Declare a function 'multiplier', which takes a number as an argument and returns another function. The returned function takes another number as an argument, and when invoked, it will return the product of the two numbers passed in.

This is a very simple example of how closure is used. We basically use the persistent memory of the outer function `multiplier` to remember `outNum`, the first number to be multiplied.

## One solution
```javascript
//i: number passed into outermost func
//o: product of number from outermost and number from innermost

// delcare function multiplier, takes in outNum
function multiplier(outNum){
	// return function which takes in inNum
  function inner(inNum){
		// return product of outNum and inNum
    return outNum * inNum;
  }
  return inner;
}
const test = multiplier(3);
console.log(test(5)) // 15
const test2 = multiplier(10);
console.log(test2(4)) // 40

```


## Another solution

Almost exactly the same, just formatted slightly differently. 

```javascript
function multiplier(number1) {
  return function(number2) {
    return number1 * number2;
  }
}

const multiplyByFive = multiplier(5);
console.log(multiplyByFive(10)); // expected output: 50
console.log(multiplyByFive(7)); // expected output: 35
```
