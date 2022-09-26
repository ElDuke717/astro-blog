---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  
title: Topsy Turvy Numbers
publishDate: 26 September 2022
name: Nick Huemmer
twitter: "https://twitter.com/nickhuemmer"
value: 128
description:  Return all the topsy-turvy numbers between two numbers.
tags: JavaScript, Edabit, loops, numbers, strings, arrays, Array.from, range
---

# [Topsy Turvy Numbers](https://edabit.com/challenge/E9WQXpuezSgpdinmQ)


This was an interesting problem, it requires the filtering of numbers that do not look the same upside down as they do right-side up.  Also, you are then required to find the palindromes within the given range.

> Topsy turvy numbers are numbers that when inverted (rotated 180
> degrees) are unchanged. The most recent topsy turvy years were 1961
> and 1881. The next one won't be until 6009. Mathemeticians have shown
> little interest in these numbers, but Edabitians are always up for a
> challenge:
> 
> Write a function that accepts two non-negative integers and returns an
> array of all topsy turvy numbers inclusively in that range. Examples
> 
> topsyTurvy(0, 10) ➞ [0, 1, 8]
> 
> topsyTurvy(10, 100) ➞ [11, 69, 88, 96]
> 
> topsyTurvy(1000, 2000) ➞ [1001, 1111, 1691, 1881, 1961]

## My solution

Notice how I used the `Array.from` method to make the range of numbers `nums` between the `lo` and `hi` numbers.

```javascript
function topsyTurvy(lo, hi) {
	const nums = Array.from({ length: (hi - lo)  + 1}, (_, i) => lo + i );
  function tt(num) {
    const rev = +[...String(num)].reverse().map(x=> x === '6' ? '9' : x === '9' ? '6' : x.match(/[23457]/g) ? '' : x).join('')
    return rev === num ? num : ''
  }
  return nums.map(x=> tt(x)).filter(String)
}

topsyTurvy(0, 10) //  [0, 1, 8]
topsyTurvy(10, 100) //  [11, 69, 88, 96]
topsyTurvy(1000, 2000) //  [1001, 1111, 1691, 1881, 1961]
```


## Other solutions

```javascript
const ud = [0, 1, , , , , 9, , 8, 6];
const flip = n => [...''+n].reverse().map(v => ud[v]).join('');
const isTT = n => (''+n) === flip(n);

const topsyTurvy = (l, h) => [...Array(h - l + 1)].map((_,i) => i + l).filter(isTT);
// mbbentley
```

```javascript
const reverseNumbers = {
  0: 0,
  1: 1,
  6: 9,
  8: 8,
  9: 6,
};

const isTopsyTurvy = num => {
  const str = String(num);
  const rotated = Array.from(str, digit => reverseNumbers[digit])
    .reverse()
    .join('');

  return str === rotated;
};

const topsyTurvy = (min, max) => {
  const results = [];

  for (let num = min; num <= max; num++) {
    if (isTopsyTurvy(num)) results.push(num);
  }

  return results;
};
// Pustur
```