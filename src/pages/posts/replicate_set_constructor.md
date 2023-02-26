---
setup: |
  import Layout from '../../layouts/BlogPost.astro'

title: Return an array of unique values
publishDate: 15 Feb 2023
name: Nick Huemmer
twitter: 'https://twitter.com/nickhuemmer'
value: 128
description: Here are two ways to return an array of unique values.
tags: JavaScript, arrays, unique, values, methods, filter, includes, Set
---

## The Problem

>Given an array of numbers, return an array of unique values.

## The Solution

There are a few ways to do this. One way is to use the `includes` method with an empty array.  Check to see if an element is present in the array, if it is not, push it to the array.  Return the array.

```javascript
function unique(array) {
  // hold is empty object to hold results of test
  const hold = [];
  // iterate over array
  for (const element of array){
    // if hold does not include element push element to hold;
     !hold.includes(element) && hold.push(element); 
  }
    // return hold
    return hold;
}

unique([1,1,2,3,3,4,5]) // [ 1, 2, 3, 4, 5 ]
unique([1,1,1,1,1]) // [1]
unique([ 1, 2, 1, 3, 1, 4 ]) // [1,2,3,4]
```

Here is another solution using the `new Set` constructor.

```javascript
const unique = array => [...new Set(array)];


unique([1,1,2,3,3,4,5]) // [ 1, 2, 3, 4, 5 ]
unique([1,1,1,1,1]) // [1]
unique([ 1, 2, 1, 3, 1, 4 ]) // [1,2,3,4]
```