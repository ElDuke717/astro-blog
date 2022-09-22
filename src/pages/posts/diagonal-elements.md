---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  
title: Snippet - Diagonal Elements
publishDate: 22 September 2022
name: Nick Huemmer
twitter: "https://twitter.com/nickhuemmer"
value: 128
description: How to get diagonal elements from a matrix?
tags: arrays, for ... loop, javascript, matrices
---


# How to get diagonal elements in a 2-D matrix

This is a snippet of a for loop that shows how to get the diagonal elements in a 2-D matrix.   I thought it was an interesting demo of how a for loop is used with two indices to get the numbers in the diagonal of a matrix.

```javascript
function diagonal(arr) {
	let arr2 = []
  for (let i=0; i<arr.length; i++) {
    arr2.push(arr[i][i])
  }
  return arr2
}

diagonal([
  [4, 4, 4, 4],
  [2, 4, 9, 8],
  [5, 4, 7, 7],
  [6, 4, 1, 0]
]) // [ 4, 4, 7, 0 ]
```