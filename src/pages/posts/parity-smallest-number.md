---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  
title: Parity of The Smallest Number
publishDate: 25 September 2022
name: Nick Huemmer
twitter: "https://twitter.com/nickhuemmer"
value: 128
description:  Return the parity of the smallest number in an array
tags: JavaScript, arrays, logic, loops, JavaScript, map, Edabit, objects, Object.fromEntries, string interpolation.
---


# [Parity of the Smallest Integer](https://edabit.com/challenge/JCxa7DhzitMZFWBk4)

This was a fun problem that really tested the knowledge of arrays and how they are mutated.  It was made more difficult because the modulo operator was not allowed.  I had to use the remainder operator instead.  I also had to use the `Object.fromEntries` method to create an object from an array of arrays.  

> Write a function that returns the smallest integer in an array with
> its corresponding index and its parity. Even though this challenge can
> be achieved easily with the modulo operator %, indexOf() and min()
> methods, these have been restricted to augment the challenge's level
> of difficulty. Output Structure
> 
> {"@index " + index_of_smallest: smallest_integer, "parity":
> "odd|even"}
> 
> Examples
> 
> bitwiseOneZero([107, 19, -18, -79, 36, 23, 97]) ➞ {"@index 3": -79,
> "parity": "odd"}
> 
> bitwiseOneZero([31, 7, 2, 13, 7, 9, 10, 13]) ➞ {"@index 2": 2,
> "parity": "even"}
> 
> bitwiseOneZero([3, 3, 3, 3, 3, 3]) ➞ {"@index 0": 3, "parity": "odd"}


## My solution
```javascript
function bitwiseOneZero(arr) {
	let static = arr.join(' ')
  const m = arr.sort((a,c)=> a-c)[0]
  static = static.split(' ').map(x=> +x)
  const index = static.map((e, i) => e === m ? i : '').filter(String)
  const parity = Math.floor(m/2) === m/2 ? 'even' : 'odd'
  return Object.fromEntries([[`@index ${index[0]}`, m], ["parity", parity] ])
}
```

## Other solutions

```javascript
function bitwiseOneZero(arr) {
	let rec = arr[0]
	let idx = 0
	for (var i=1; i<arr.length; i++){
		if (arr[i]<rec){
			idx = i
			rec = arr[i]
		}
	}
	return {[`@index ${idx}`]: rec, parity: ['even','odd'][rec&1]}
}
//Luis Pereira
```

```javascript
function bitwiseOneZero(arr) {
  let a = [].concat(arr)
  a = a.sort((a,b)=>a-b)[0]
  let i ,ans ={},parity
  let find_index = function(collection, item) {
    for (var i = 0; i < collection.length; ++i) {
        if (collection[i] === item) return i;
         }
 };
 i = find_index(arr,a)
  if(a & 1)parity='odd'
  else parity='even'
  ans[`@index ${i}`] = a
  ans['parity']=parity
  return ans
}
//aman khan
```

```javascript
const bitwiseOneZero = arr => {
	let iMin = 0, i = 0;
	while (i++ < arr.length) iMin = (arr[i] < arr[iMin]) ? i : iMin;
	return {
		[`@index ${iMin}`]: arr[iMin],
		parity: Number.isInteger(arr[iMin] / 2) ? 'even' : 'odd'
	};
};
//Euphonic Sounds
```