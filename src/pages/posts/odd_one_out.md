---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  
title: Odd One Out
publishDate: 19 September 2022
name: Nick Huemmer
twitter: "https://twitter.com/nickhuemmer"
value: 128
description: See if all words are the same length except for only one.
tags: arrays, map, filter, javascript, Edabit, problem, validation, counting elements, Object.entries, length
---

# [Odd One Out](https://edabit.com/challenge/PEecJK7uPz5m2oD9i)

The tricky part about this challenge is that we need to figure out which specific element is different from the others.  But there can be only one element that is a different length, the rest need to be the same length as one another.  In this case, using `sort`  doesn't quite get us to a conscise solution.  

Here, I made an array of the lengths of all the elements.  Then I initiated an object called `counts` to hold all the lengths and how many times they occur.  Then, I used `Object.entries` to make an array from the counts object, then compared the length of the array with all elements minus one to the array with element with only one occurence removed.   If they were equal, this indicates that all elements are the same length except for one. and therefore `true`.

## Instructions
> Write a function that returns true if exactly one word in the array
> differs in length from the rest. Return false in all other cases.
> Examples
> 
> oddOneOut(["silly", "mom", "let", "the"]) ➞ true
> 
> oddOneOut(["swanky", "rhino", "moment"]) ➞ true
> 
> oddOneOut(["the", "them", "theme"]) ➞ false
> 
> oddOneOut(["very", "to", "an", "some"]) ➞ false
> 
>  ### Notes
> 
> The length of the array will always have at least three or more words.

## My solution
```javascript
function oddOneOut(arr) {
  const counts = {}
  arr.map(x=> x.length).map(e => counts[e] = counts[e] ? counts[e] + 1 : 1 )
  return Object.entries(counts).filter(x=> x[1] !== 1).length === Object.entries(counts).length-1
}

oddOneOut(["silly", "mom", "let", "the"]) //  true
oddOneOut(["swanky", "rhino", "moment"]) // true
oddOneOut(["the", "them", "theme"]) // false
oddOneOut(["very", "to", "an", "some"]) // false
```

## Other solutions

```javascript
function oddOneOut(arr) {
	return arr
		.map(word => word.length)
		.filter((len,_,a) => a.indexOf(len) === a.lastIndexOf(len))
		.length === 1
}
// cefalexin
```

```javascript
function oddOneOut(arr) {
	let arrLen = arr.map( e => e.length ? e.length : 0 );
	let result = 0;
	
	new Set(arrLen).forEach( s => {
		if (arrLen.indexOf(s) === arrLen.lastIndexOf(s)) {
			result++;
		}
	} )
	
	return result === 1;
}
// Ân
```