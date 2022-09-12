---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  
title: Know Your Neighbor
publishDate: 12 September 2022
name: Nick Huemmer
twitter: "https://twitter.com/nickhuemmer"
value: 128
description: Is the number surrounded by pluses?
tags: arrays, map, filter, for ... loop, javascript, ternary operator, regex, push, Edabit
---

# [Know Your Neighbor](https://edabit.com/challenge/SXEBbL4xhgKJr7pqd)

The challenge: 

>Create a function that takes a string as an argument and returns true if each letter in the string is surrounded by a plus sign. Return false otherwise.
> ### Examples
>
>plusSign("+f+d+c+#+f+") ➞ true
>
>plusSign("+d+=3=+s+") ➞ true
>
>plusSign("f++d+g+8+") ➞ false
>
>plusSign("+s+7+fg+r+8+") ➞ false
>
>### Notes
>
>For clarity, each letter must have a plus sign on both sides.


## My Solution

My solution was a bit more verbose than some. 
```javascript
function plusSign(str) {
	// Put all the string's characters onto an array.
	const arr = [...str]
	//Initiate an array to hold all letters that are flanked by '+'
  let letters = []
  for (let i=0; i< arr.length; i++) {
    letters.push(arr[i].match(/[a-z]/g) && arr[i-1] === '+' && arr[i+1] === '+' ? arr[i] : '')
  }
	// return a if the length of the letters array is the same as the length of the array `arr` with the letters filtered out.  
  return letters.filter(x=> x !== '').length === arr.filter(x=> /[a-z]/.test(x) ? x : '').filter(x=> x !== '').length
}

plusSign("+f+d+c+#+f+") // true
plusSign("+d+=3=+s+") // true
plusSign("f++d+g+8+") // false
plusSign("+s+7+fg+r+8+") // false
```

## Other Solutions
This solution uses purely regex and the test method to determine if the string meets the criteria.
```javascript
const plusSign = str =>
!/(^|[^+])[a-z]|[a-z]([^+]|$)/i.test(str);
//DreamArdor
```

This solution uses the `.every()` method to test if the array of items from the string has each letter flanked by a '+'.
```javascript
function plusSign(str) {
	return [...str].every((c,i)=>(/[a-z]/gi.test(c))?(str[i-1]=='+'&&str[i+1]=='+'):true)
}
```
