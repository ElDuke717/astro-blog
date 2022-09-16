---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  
title: Special Pythagorean Triplet
publishDate: 16 September 2022
name: Nick Huemmer
twitter: "https://twitter.com/nickhuemmer"
value: 128
description: Solve for the product of the Pythagorean triple that sums to 1000.
tags: Project Euler, algebra, math, javascript, Number Theory, Number.isInteger, Math.sqrt
---

# [Special Pythagorean Triplet](https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-9-special-pythagorean-triplet)

## Project Euler Problem 9


>A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
>a2 + b2 = c2
>
>For example, 32 + 42 = 9 + 16 = 25 = 52.
>
>There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n.

This was a tough problem that I spent quite a bit of time on.  My original solution involved getting the factors for a the number of interest, but it turned out to be the wrong approach.  

The **right** approach is to use some algebra on paper to pull apart the Pythagorean theorem.  The link from StackOverflow below has a great explanation of how to do this.  

Here's what the answer is based on, with some modifcations
[Stack Overflow](https://stackoverflow.com/questions/16143499/pythagorean-triples-formula-in-javascript-project-euler-prob-9#answer-46531076)

```javascript
function specialPythagoreanTriplet(n) {
   for(let a = 1; a < n/2; a++){
    for(let b = a; b < n; b++){
      let c = Math.sqrt(a * a + b * b);
      if(c > b && Number.isInteger(c) && a + b + c == n){
        return (a * b * c);
      }
    }
  }
}

specialPythagoreanTriplet(24) // 480
specialPythagoreanTriplet(120) // 49920
specialPythagoreanTriplet(1000) // 31875000
```