---
setup: |
  import Layout from '../../layouts/BlogPost.astro'

title: JavaScript Recursion - Inclusive Array Ranges
publishDate: 14 Feb 2023
name: Nick Huemmer
twitter: 'https://twitter.com/nickhuemmer'
value: 128
description: Return the numbers between two numbers, including the two given numbers.
tags: JavaScript, recursion, codesmith, arrays, numbers, edabit
---

# The Problem

>Write a function that, given the start startNum and end endNum values, return an array containing all the numbers inclusive to that range. 

Your task here is to return all the numbers between two numbers, including the two numbers given.  

We add the first number to an array `hold`, then increment the number, push it to `hold` until we get all the numbers within the desired range.  Look out for edge cases~


This problem comes from [Edabit](https://edabit.com/challenge/5sdtyMNdLw2FK4fHp), composed by [Deep Xavier](https://edabit.com/user/a777e8chPvJkY3tKa).

## My solution

```javascript

//i: number
//i: number
//o: array

//declare inclusiveArray, has two parameters
//declare empty array hold
function inclusiveArray(a, b, hold = []){
if (typeof a !== 'number' || typeof b !== 'number') return 'invalid argument';
// base case if startNum === endNum+1 return hold
  if (a === b + 1) return hold;
  if (a > b + 2) return [a];
// recursive case: push startNum to hold,
  hold.push(a);
// add 1 to startNum
  return inclusiveArray(++a, b, hold );
}

console.log(inclusiveArray(2,5)); // [ 2, 3, 4, 5 ]
console.log(inclusiveArray(1,10)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(inclusiveArray(20,45)); // [ 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45 ]
console.log(inclusiveArray('sandwich',45)); // 'invalid argument'
console.log(inclusiveArray(17,5)); // [17]


```

## Other solutions:
```javascript
function inclusiveArray(startNum, endNum) {
  return startNum >= endNum ? [startNum] : [startNum, ...inclusiveArray(startNum + 1, endNum)];
}

const inclusiveArray = (s, e) => s >= e? [s] : [...inclusiveArray(s, e-1), e]


// ChatGPT solution - it doesn't handle the cases where a is greater than b correctly.

function range(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  }
  return [startNum].concat(range(startNum + 1, endNum));
}