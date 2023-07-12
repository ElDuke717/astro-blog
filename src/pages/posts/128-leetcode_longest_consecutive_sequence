---
setup: |
  import Layout from '../../layouts/BlogPost.astro'

title: Leetcode 128 - Longest Consecutive Sequence
publishDate: 12 July 2023
name: Nick Huemmer
twitter: 'https://twitter.com/nickhuemmer'
value: 128
description: A solution for Leetcode Problem 128.
tags: JavaScript, leetcode, arrays, numbers, sorting, sets,
---

# [128. Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/)

This is an interesting problem and rumored commonly asked in Google interviews. We are tasked with finding the longest consecutive sequence of numbers in an array. One thing that really makes this problem more difficult is that we are expected to solve it with O(n) time complexity. This really restricts us because it means we cannot use any nested loops or sorting algorithms. 

If we were to solve it by first using a sorting algorithm like the native JavaScript sort method, it would be O(n log n) time complexity. So, we need to find a way to solve it without sorting.

The trick is to use a `Set` data structure and the native `has` method available to `Set`. This method performs a lookup operation that has an O(1) or constant time complexity.  We convert the array to a `Set` to store the numbers, then iterate over the resulting `Set`, checking if each number minus 1 is in the set. If it's not, then we know we have the start of a sequence. We then check if the number plus 1 is in the set, if it is, we know we have a sequence, so we increment the sequence length. If the number plus 1 is not in the set, we know we have reached the end of the sequence, so we check if the sequence length is greater than the current longest sequence length, if it is, we update the longest sequence length. Lastly, we return the longest sequence length.

```javascript
const longestConseqSeq = (arr) => {
  // declare set, a new Set based on array to get unique values
  const set = new Set(arr);
  // declare a variable to hold the longest sequence
  let longest = 0;
  // iterate over the array, check if the current value minus 1 is in the set
  // sets do not support access by index, so we have to use a for of loop
  for (const num of set) {
    // Check if the current value minus 1 is in the set
    if (set.has(num - 1)) continue;
    // if it is not, then we know that the current value is the start of a consecutive sequence
    // we can then iterate and increment the current value until it is not in the set
    let current = num;
    // declare a count variable to keep track of the length of the sequence
    let count = 1;
    while (set.has(current + 1)) {
    // increment current and count
      current += 1;
      count += 1;
    }
    // update longest, assign the value of max between longest and count
    longest = Math.max(longest, count);
  }
  // return the longest sequence
  return longest;
};

console.log(longestConseqSeq([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConseqSeq([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
```

