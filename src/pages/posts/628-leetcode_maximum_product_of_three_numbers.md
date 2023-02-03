---
setup: |
  import Layout from '../../layouts/BlogPost.astro'

title: Leetcode 628 - Maximum Product of Three Numbers
publishDate: 03 Feb 2023
name: Nick Huemmer
twitter: 'https://twitter.com/nickhuemmer'
value: 128
description: A solution for Leetcode Problem 628.
tags: JavaScript, leetcode, Array.isArray, numbers, Math.max
---

# 628 [Maximum product of three numbers](https://leetcode.com/problems/maximum-product-of-three-numbers/)

The trick here is to take advantage of the `sort` method. The solution is very crafty as it takes the max from the end of the sort and multiplies it by the smallest numbers, to see that if they are negative will they produce a higher number when their sign changes. similarly, it takes the three largest numbers from the sort. The `Math.max` method is applied on both numbers and returns the largest.

```javascript
//Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

/**
 * @param {number[]} nums
 * @return {number}
 */

var maximumProduct = function (nums) {
  if (
    !Array.isArray(nums) ||
    nums.some((x) => typeof x !== 'number') ||
    nums.length < 3
  )
    return 'invalid entry';
  nums.sort((a, c) => a - c);
  return Math.max(
    nums[0] * nums[1] * nums[nums.length - 1],
    nums[nums.length - 1] *
      nums[nums.length - 2] *
      nums[nums.length - 3]
  );
};

console.log(maximumProduct([1, 2, 3]));
console.log(maximumProduct([1, 2, 3, 4]));
console.log(maximumProduct([-1, -2, -3]));
console.log(maximumProduct([-100, -98, -1, 2, 3, 4]));
```
