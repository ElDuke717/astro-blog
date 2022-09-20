---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  
title: Super Reduced String
publishDate: 20 September 2022
name: Nick Huemmer
twitter: "https://twitter.com/nickhuemmer"
value: 128
description: Delete all repeating characters in a string.
tags: arrays, map, regex, match, test, algorithms, recursion, javascript
---

# [Super Reduced String](https://edabit.com/challenge/PgkSgWqNZBwXTFgby)

This one was a pain in the ass.  I could get all of the test cases except for the last one, which I still don't totally understand why I didn't get.  But I did get a hint to try recursion, which I did and it worked.


> Steve has a string of lowercase characters in range ascii[["a".."z"]].
> He wants to reduce the string to its shortest length by doing a series
> of operations. In each operation, he selects a pair of adjacent
> lowercase letters that match, and he deletes them. For instance, the
> string aab could be shortened to b in one operation.
> 
> Steve’s task is to delete as many characters as possible using this
> method and print the resulting string. If the final string is empty,
> return "Empty String". Case
> 
> superReducedString("aaabccddd") ➞ "abd"
> 
> Explanation:
> 
> "aaabccddd" -> "abccddd" -> "abddd" -> "abd"
> 
>### Examples
> 
> superReducedString("cccxllyyy") ➞ "cxy"
> 
> superReducedString("aa") ➞ "Empty String"
> 
> superReducedString("baab") ➞ "Empty String"
> 
> superReducedString("fghiiijkllmnnno") ➞ "fghijkmno"
> 
> superReducedString("chklssstt") ➞ "chkls"


## My solution
```javascript
const superReducedString = str => 
  str.match(/(.)\1/gm) ? superReducedString(str.replace(/(.)\1/gm, ''))  : str ? str : 'Empty String' 
   


superReducedString("cccxllyyy") // "cxy"
superReducedString("aa") // "Empty String"
superReducedString("baab") // "Empty String"
superReducedString("fghiiijkllmnnno") // "fghijkmno"
superReducedString("chklssstt") // "chkls"
superReducedString("acdqglrfkqyuqfjkxyqvnrtysfrzrmzlygfveulqfpdbhlqdqrrqdqlhbdpfqluevfgylzmrzrfsytrnvqyxkjfquyqkfrlacdqj") //"acdqgacdqj"


```


## Other solutions
Super simple and terse, note that regex is defined outside of the function `superReducedString`
```javascript
const r = /(.)\1/g;
const superReducedString = s => r.test(s) ? superReducedString(s.replace(r, "")) : s || "Empty String";
//cvf
```

This solution uses a for loop, which I initially tried but couldn't get to work fully.
```javascript
function superReducedString(str) {
 let output = str.split("");
 for(let i = 0; i < output.length; i++){
   if(output[i] === output[i+1]){
     output.splice(i, 2);
     i = -1;
    }
  }
 return output.length === 0 ? "Empty String" : output.join("");
}
//czaplitto
```
