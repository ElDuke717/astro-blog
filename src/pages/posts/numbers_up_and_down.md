---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  
title: Numbers Up and Down, Ascending and Descending Javascript Snippet
publishDate: 21 September 2022
name: Nick Huemmer
twitter: "https://twitter.com/nickhuemmer"
value: 128
description: How to get the numbers up and down starting from a number
tags: math, numbers, Javascript, loops, factors, numbers, ascending, descending
---

# Ascending and Descending Numbers

## How to get all numbers leading down from a number. `n` to 1

I often forget how to do some basic things in Javascript, so I keep a notebook of solutions to common problems that I encouter.  One purpose of this blog is to remind me of things that I've come across and share with the world.  

Here's one of those things that I need occasionally - getting a set of numbers less than and equal to `n` and greater than and equal to `n`.  I'm not sure if there's a name for this, but I call it "ascending and descending numbers". 

One thing that is interesting to note is the need for the `i-1` and the `num--` in the `descend` `for loop`.  You would think that the syntax in the `ascend` `for loop` would be the exact opposite (just put a "+" instead of a "-"), but it doesn't work that way.  I'm not sure why, but it's something to keep in mind.

``` javascript
function descend(num) {
    let numbers = []
    for (let i=0; i<num; i-1) {
      numbers.push(num--)
    }
  return numbers
  }

descend(1) // [ 1 ]
descend(2) // [ 2, 1 ]
descend(3) // [ 3, 2, 1 ]
descend(4) // [ 4, 3, 2, 1 ]
descend(5) // [ 5, 4, 3, 2, 1 ]
descend(6) // [ 6, 5, 4, 3, 2, 1 ]
descend(7) // [ 7, 6, 5, 4, 3, 2, 1 ]
descend(8) // [ 8, 7, 6, 5, 4, 3, 2, 1 ]
descend(100) // [ 100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]
```

## How to get all numbers leading up to number. Numbers 1 to `n`

```javascript
function ascend(num) {
    let numbers = []
    for (let i=1; i<=num; i++) {
      numbers.push(i)
    }
  return numbers
  }

ascend(1) // [ 1 ]
ascend(2) // [ 1, 2 ]
ascend(3) // [ 1, 2, 3 ]
ascend(4) // [ 1, 2, 3, 4 ]
ascend(5) // [ 1, 2, 3, 4, 5 ]
ascend(6) // [ 1, 2, 3, 4, 5, 6 ]
ascend(7) // [ 1, 2, 3, 4, 5, 6, 7 ]
ascend(8) // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
ascend(100) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100 ]
```