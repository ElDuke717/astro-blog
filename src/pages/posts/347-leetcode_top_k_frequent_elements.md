---
setup: |
  import Layout from '../../layouts/BlogPost.astro'

title: Leetcode 347 - Top K frequent elements
publishDate: 03 Feb 2023
name: Nick Huemmer
twitter: 'https://twitter.com/nickhuemmer'
value: 128
description: A solution for Leetcode Problem 347.
tags: JavaScript, leetcode, arrays, numbers, sorting
---

# [347. Top `k` frequent elements](https://leetcode.com/problems/top-k-frequent-elements/)

The trick for this problem is to make an object that has the count of each number as it occurs in the `nums` array. Then, you convert the object to an array with `Object.entries`, sorting each entry in descending order by value. Next, you slice off the elements between 0 and `k`, then lastly use `map` to return an array of the keys from `result` array derived from `Object.entries`.

```javascript
/*
Given an integer array nums and an integer k, return the k most frequent 
elements. You may return the answer in any order.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // declare cache, an object to hold values and their count.
  const cache = {};
  // iterate over nums, if element is not in cache, add it as key and value at 1, or add 1
  for (let i = 0; i < nums.length; i++) {
    cache[nums[i]] ? (cache[nums[i]] += 1) : (cache[nums[i]] = 1);
  }
  // result is assigned the value of the entries on cache, sorted in descending order by value,
  // then the k elements are sliced, lastly, map is applied to return an array of just the keys
  const result = Object.entries(cache)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((entry) => entry[0]);
  // return result
  return result;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [ '1', '2' ]
console.log(topKFrequent([1], 1)); // [ '1' ]
console.log(topKFrequent([1, 2], 2)); // [ '1', '2' ]
```
