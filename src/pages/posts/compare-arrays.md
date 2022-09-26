---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  
title: Compare Two Array in JavaScript - JavaScript Snippets
publishDate: 26 September 2022
name: Nick Huemmer
twitter: "https://twitter.com/nickhuemmer"
value: 128
description:  How to compare two arrays in JavaScript?
tags: JavaScript, arrays, every, isArray, Array.length
---

# How to compare two arrays in JavaScipt

You may have come across a situation where you have had to compare two arrays in JavaScript.  Unfortunately, JavaScript does not have a built-in method to compare two arrays.  

This won't work:
```javascript
[1,2,3] === [1,2,3] // false
```

However, there are a few ways to compare two arrays in JavaScript.  In this post, I will show you how to compare two arrays in JavaScript.


Here's one way that is short and sweet:
```javascript
const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [1, 2, 3];

function arrayEquals(a, b) {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
}

arrayEquals(a,b) //false
arrayEquals(a,c) //true
```

And an even shorter way that is less verbose - it invovles turning both arrays into strings via the `JSON.stringify` method.  
```javascript
const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [1, 2, 3];

const identical = (a,b) =>  JSON.stringify(a) === JSON.stringify(b);

identical(a,b) // false
identical(a,c) // true
```

Hope this helps!