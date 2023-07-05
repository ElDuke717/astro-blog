---
setup: |
  import Layout from '../../layouts/BlogPost.astro'

title: Leetcode 1 - Two Sum
publishDate: 05 July 2023
name: Nick Huemmer
twitter: 'https://twitter.com/nickhuemmer'
value: 128
description: A solution with explanation for Leetcode Problem 1, two sum.
tags: JavaScript, leetcode, loops, numbers, strings, arrays, nested loops, cache, look-up, time complexity.
---

# Leetcode 1 - Two Sum 

## The first and possibly the most famous problem in all of Leetcode

## Problem Statement

>Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
>
>You may assume that each input would have exactly one solution, and you may not use the same element twice.
>
>You can return the answer in any order.

> Input: nums = [2,7,11,15], target = 9
>
> Output: [0,1]
>
> Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Leetcode problems are tough!  The first time I looked at this problem, I didn't even understand what specifically it was asking for!  But don't worry, this and other problems can be solved with some determination and a bit of practice.

Essentially, what we're tasked with here is to find the indices of the two elements that can be added together to reach a target.  The first argument is our array of numbers and the second the target number.  The output is an array of the indices of the two numbers that add up to the target.

Here, I'll show two solutions - a brute force solution and an optimized one with exmplanations for each to hopefully help you understand the problem and how to solve it.


## Brute Force Solution
First, here's the brute force solution:

```javascript
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    // starting a for loop here, where i is the iterator. This loop will go through each element of the nums array.
    for (let j = i + 1; j < nums.length; j++) {
        // second for loop, where j is the iterator. This loop will go through each element of the nums array, starting at the index after i.
      if (nums[i] + nums[j] === target) {
        // If the sum of the elements at i and j is equal to the target, return an array with the indices of i and j.
        return [i, j];
      }
    }
  }
};

console.log(twoSum([2, 1, 5, 3], 4)); // [ 1, 3 ]
console.log(twoSum([2, 7, 11, 15], 9)); // [ 0, 1 ]
console.log(twoSum([3, 2, 4], 6)); // [ 1, 2 ]
```

## Optimized Solution
Here is an optimized solution that uses a cache object to store values and look them up in constant time.
```javascript

function twoSum(nums, target) {
  //declare cache, set to an empty object
  const cache = {};
  // iterate over the nums array
  for (let i = 0; i < nums.length; i++) {
    // declare n, assigned the value of nums[i]
    const n = nums[i];
    // declare diff, difference between target and n
    const diff = target - n;
    // if diff is already in cache as a key,
    if (cache.hasOwnProperty(diff)) {
      // return an array with cache's value at diff and the index i of nums array
      return [cache[diff], i];
    }
    // otherwise, assign the prop cache[n] the index at i
    cache[n] = i;
  }
  return;
}

console.log(twoSum([2, 1, 5, 3], 4)); // [ 1, 3 ]
console.log(twoSum([2, 7, 11, 15], 9)); // [ 0, 1 ]
console.log(twoSum([3, 2, 4], 6)); // [ 1, 2 ]

```


## Time complexity
The time complexity of this solution is O(n), which is optimal because it avoids the use of nested loops and the added time complexity that comes with them. In this case the time complexity ends up being linear (O(n)) because we are only iterating over the nums array once and storing to and reading the cache object is very fast, constant time.

By using the cache object we are able to store values and look them up in constant time and avoid nested loops, which would result in a the brute force solution time complexity of O(n^2).

