---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  
title:  Convert Characters to 8-bit -  JavaScript Snippets
publishDate: 24 September 2022
name: Nick Huemmer
twitter: "https://twitter.com/nickhuemmer"
value: 128
description:  Make a string of characters into 8-bit characters!
tags: reduce, map, join, charCodeAt(), toString, repeat, Javascript
---

# How to convert letters of a string to 8-bit binaries for each letter.

Here's a little function that I cobbled together to convert string of text to a series of 8-bit binaries for each letter.  I thought it was a fun little snippet to share.  I used the `reduce` method to iterate over the string and get its character code using `charCodeAt`  and `toString(2)` to convert it to a seven digit binary.  Then I used the `map` method to add a zero to get an 8-bit binary.  I then used the `join` method to join the array of 8-bit binaries into a string.   Here's the code:

```javascript
const textToBin = (str) => 
    [...str]
      .reduce((acc, char) => acc.concat(char.charCodeAt().toString(2)), [])
      .map(bin => '0'.repeat(8 - bin.length) + bin )
      .join(' ')

textToBin('Hi') // '01001000 01101001'
```