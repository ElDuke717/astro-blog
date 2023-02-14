---
setup: |
  import Layout from '../../layouts/BlogPost.astro'

title: JavaScript Recursion - findMax
publishDate: 14 Feb 2023
name: Nick Huemmer
twitter: 'https://twitter.com/nickhuemmer'
value: 128
description: Find the max value of an array using recursion.
tags: JavaScript, recursion, codesmith, arrays, numbers
---

## The Problem
>Create a function findMax that takes in an array of integers and finds the maximum value in the array using recursion.

This problem is pretty is pretty straightforward.  You set a variable `max` initially to the smallest number possible,  `-Infinity` and as the array is iterated through, if the value at the current index is greater than `max`, `max` value is set to that number.

## My solution

```javascript

//i: array of numbers
//i: max value, set to -Infinity
//o: number, max value

// declare findMax, takes two params, an array of integers and max value set to -Infinity, index, set to zero initially
function findMax(arr, max = -Infinity, index = 0){
	// base case: if counter === array.length, return max
  if (index === arr.length)  { return max };
	// recursive case:
		// if arr[index] > max, set max to arr[index]
  	if (arr[index] > max) { max = arr[index] };
		//increment index with incrementer in return
		// return findMax with array, index and max
  return findMax(arr, max, ++index);
}

console.log(findMax([1, 2, 3, 4, 54, 5, 3, 2, 1])) //54
```

## Another solution:

```javascript
function findMax(arr) {
    if(arr.length === 1) return arr[0];
    let sub_max = findMax(arr.slice(1));
    return Math.max(arr[0], sub_max);
}
console.log(findMax([1, 2, 3, 4])); //4
console.log(findMax([5, 10, 15, 20, 25])); //25

```
