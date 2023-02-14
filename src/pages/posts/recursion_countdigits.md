---
setup: |
  import Layout from '../../layouts/BlogPost.astro'

title: JavaScript Recursion - countDigits
publishDate: 14 Feb 2023
name: Nick Huemmer
twitter: 'https://twitter.com/nickhuemmer'
value: 128
description: Count the digits of a number using recursion.
tags: JavaScript, recursion, codesmith, arrays, numbers, edabit
---

# The Problem

>Create a function that recursively counts the integer's number of digits.

The two tricks to solve this problem are: 

1. Get the absolute value of the number passed into the function, then convert it to a string.  I used the `Math.abs` method and the `String` constructor.
2. Count the digits of the number with an incrementer, in this case `nums`.

This is a problem that I completed on the site [Edabit](https://edabit.com/challenge/uL2Hi8Aj3FDgW9F7q), made by [Deep Xavier](https://edabit.com/user/a777e8chPvJkY3tKa).

```javascript
//i: number
//o: number

//declare count, takes a number, nums default parameter zero
function count(number, nums = 0) {
//make number absolute with Math.abs, make the number a string
  number = String(Math.abs(number));
//base case if sting.length === 0, return nums
  if (number.length === 0) return nums;
//recursive case nums++, slice number to shorten
  nums++;
  console.log(nums)
  number = number.slice(1);
  console.log(number)
// return count with number and nums
  //return count(number, nums);
}

console.log(count(318)); // 3
```

## Another solution 
This is what ChatGPT provided with the same prompt.

```javascript
//This version gets the absolute value of the number, then if it's less than 10, will return 1.  If greater than 10, it adds one to the recursive result of countDigits until it's less than 10.

function countDigits(n) {
  if (n < 0) {
    n = Math.abs(n);
  }
  if (n < 10) {
    return 1;
  }
  return 1 + countDigits(Math.floor(n / 10));
}

```