---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  
title: Coconut Communication
publishDate: 24 September 2022
name: Nick Huemmer
twitter: "https://twitter.com/nickhuemmer"
value: 128
description:  Communication is key to a healthy relationship.  Learn how to communicate with your coconut in the form of bits.
tags: loops, strings, charCodeAt, toFixed, binary numbers, binary, Javascript
---


# [Coconut Communication](https://edabit.com/challenge/zoWgne3McC6zdRYdZ)


This was a fun problem.  It was a bit tricky as it required comversion of each character in a string to  its eight bit binary code, then converting that code into the word "coconuts" with uppercase letters for 1s and lowercase letters for 0s.  Kind of weird, but an interesting.

>     "coconuts" has 8 letters.
>     A byte in binary has 8 bits.
>     A byte can represent a character.
> 
> We can use the word "coconuts" to communicate with each other in
> binary if we use upper case letters as 1s and lower case letters as
> 0s.
> 
> Create a function that translates a word in plain text, into Coconut.
> Worked Example
> 
> The binary for "coconuts" is 01100011 01101111 01100011 01101111
> 01101110 01110101 01110100 01110011 c         o        c       o      
> n        u        t       s
> 
> Since 0s are lowercase and 1s are uppercase, we can map the binary
> like this. cOConuTS cOCoNUTS cOConuTS cOCoNUTS cOCoNUTs cOCOnUtS
> cOCOnUts cOCOnuTS
> 
> coconut_translator("coconuts") ➞ "cOConuTS cOCoNUTS cOConuTS cOCoNUTS
> cOCoNUTs cOCOnUtS cOCOnUts cOCOnuTS"
> 
>  ### Examples
> 
> coconutTranslator("Hi") ➞ "cOcoNuts cOCoNutS"
> 
> coconutTranslator("edabit") ➞ "cOConUtS cOConUts cOConutS cOConuTs
> cOCoNutS cOCOnUts"
> 
> coconutTranslator("123") ➞ "coCOnutS coCOnuTs coCOnuTS"
> 
> ### Notes
> 
>     All inputs will be strings.
>     Make sure to separate the coconuts with spaces.

## My solution

```javascript
function coconutTranslator(str) {
	const binaries = [...str]
      .reduce((acc, char) => acc.concat(char.charCodeAt().toString(2)), [])
      .map(bin => '0'.repeat(8 - bin.length) + bin )
  
  const coconutter = str => {
    let arr = [...str]
    let coco = 'coconuts'
    let hold = []
    for (let i=0; i<str.length; i++) {
      hold.push(arr[i] === '0' ? coco[i].toLowerCase() : coco[i].toUpperCase())
    }
    return hold.join('')
  }
  return binaries
    .map(x=> coconutter(x)).join(' ')
}

coconutTranslator("Hi") // "cOcoNuts cOCoNutS"
coconutTranslator("edabit") // "cOConUtS cOConUts cOConutS cOConuTs cOCoNutS cOCOnUts"
coconutTranslator("123") // "coCOnutS coCOnuTs coCOnuTS"
coconutTranslator("coconuts") // "cOConuTS cOCoNUTS cOConuTS cOCoNUTS cOCoNUTs cOCOnUtS cOCOnUts cOCOnuTS"
coconutTranslator("") // ""
```


## Other solutions
```javascript
function coconutTranslator(str) {
	const arr = [...str].map(x => /\d/.test(x) ? '00' + x.charCodeAt().toString(2) : '0' + x.charCodeAt().toString(2));
	let result = [];
	const nuts = 'coconuts';
	for (let i = 0; i < arr.length; i++) {
		let res = ''
		for (let j = 0; j < arr[i].length; j++) {
			if (arr[i][j] == '0') res += nuts[j].toLowerCase();
			else res += nuts[j].toUpperCase();
		}
		result.push(res);
		res = '';
	}
	return result.join(' ');
}
// Werdna
```

```javascript
function coconutTranslator(str) {
  const x = "stunococ";
  return [...str].map(c => {
    const b = c.charCodeAt();
    let s = "";
    for (let i = 0; i < 8; i++)
      s = x[i][b >> i & 1 ? "toUpperCase" : "toLowerCase"]() + s;
    return s;
  }).join(" ");
}
//cvf
```


```javascript
const coconutTranslator = s=>(c='coconuts',[...s].map(q=>[...q.charCodeAt(0).toString(2).padStart(8,'0')].map((a,i)=>a==0?c[i]:c[i].toUpperCase()).join('')).join(' '))
//David Newman
```