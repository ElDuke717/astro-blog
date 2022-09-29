---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  
title: Binary to Text (ASCII) Conversion
publishDate: 29 Sep 2022
name: Nick Huemmer
description: Convert binary to text using the ASCII character set.
tags: binary, strings, fundamentals, JavaScript, ASCII, match, substr, String.fromCharCode, Code Wars
---

# [Binary to Text (ASCII) Conversion](https://www.codewars.com/kata/5583d268479559400d000064/solutions/javascript)



This challenge deals with 8-bit binary codes, extracting them from long strings, decoding them with ASCII character codes, then putting them back together.   Fun, not too difficult.

>Write a function that takes in a binary string and returns the equivalent decoded text (the text is ASCII encoded).
>
>Each 8 bits on the binary string represent 1 character on the ASCII table.
>
>The input string will always be a valid binary string.
>
>Characters can be in the range from "00000000" to "11111111" (inclusive)
>
>Note: In the case of an empty binary string your function should return an empty string.



## My solution

```javascript
const binaryToString = binary => 
    !binary.length ? '' : binary.match(/[\s\S]{1,8}/g).map(x=> String.fromCharCode(parseInt(x, 2))).join('')

binaryToString('01100001') // 'a'
binaryToString('01001011010101000100100001011000010000100101100101000101') // 'KTHXBYE'
//Test numeric
binaryToString('00110001001100000011000100110001') // '1011')
//Test special chars
binaryToString('001111000011101000101001') // '<:)'
binaryToString('')
```


[This is an interesting way](https://itnext.io/javascript-split-a-string-into-equal-lengths-848eb811f383) to deal with cutting strings into smaller strings of specified length. 

```javascript
if (!String.prototype.cordwood) {
  String.prototype.cordwood = function(cordlen) {
  if (cordlen === undefined || cordlen > this.length) {
    cordlen = this.length;
  }
  var yardstick = new RegExp(`.{${cordlen}}`, 'g');
  var pieces = this.match(yardstick);
  var accumulated = (pieces.length * cordlen);
  var modulo = this.length % accumulated;
  if (modulo) pieces.push(this.slice(accumulated));	
  return pieces;
 };
}
```

Notice how the solution is implemented:
```javascript
const binary = '01001011010101000100100001011000010000100101100101000101'

binary.cordwood(8) 
// [ '01001011', '01010100', '01001000', '01011000', '01000010', '01011001', '01000101' ]

binary.cordwood(8).map(x=> String.fromCharCode(parseInt(x, 2))).join('')

//'KTHXBYE'

const phrase = 'This is a very exciting development!'

phrase.cordwood(4)
```

## Other solutions

Very similar to my solution, the regex is just slightly different.
```javascript
function binaryToString(binary) {
  return binary.replace(/[01]{8}/g, n => String.fromCharCode(parseInt(n, 2)))
}
//ooflorent
```


This solution uses a for loop along with the substring method.
```javascript
function binaryToString(binary) {
  let arr = [];
  if (binary.length){
    for (let i = 0; i < binary.length; i += 8) {
      arr.push(binary.substr(i, 8));
    }
    return arr.map(s => String.fromCharCode(parseInt(s, 2))).join('');
  }
  return '';
}
//
```