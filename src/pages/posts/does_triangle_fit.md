---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  
title: Does the Triangle Fit into the Triangular Hole?
publishDate: 9 September 2022
name: Nick Huemmer
twitter: "https://twitter.com/nickhuemmer"
value: 128
description: Will the triangle-shaped piece fit into the triangular hole?
tags: arrays, javascript, triangles, geometry, math, Heron's formula, area of a triangle, validation, conditions
---


# [Does the Triangle Fit into the Triangular Hole? ](https://edabit.com/challenge/7e2Aq87tDpW2CK7XH)

>Create a function that takes the dimensions of two triangles (as arrays) and checks if the first triangle fits into the second one.
Examples
>
>doesTriangleFit([1, 1, 1], [1, 1, 1]) ➞ true
>
>doesTriangleFit([1, 1, 1], [2, 2, 2]) ➞ true
>
>doesTriangleFit([1, 2, 3], [1, 2, 2]) ➞ false
>
>doesTriangleFit([1, 2, 4], [1, 2, 6]) ➞ false
>
> ## Notes
 > 	Triangle fits if it has the same or smaller size as the hole.
    The function should return false if the triangle with that dimensions is not possible.

This challenge required comparison between the dimension of two triangles.  The smaller one must be smaller than the larger one so that it may fit inside.  

I chose to compare the two triangle's areas.  There are other ways to solve this problem, but comparing areas was the most straightforward that I could think of.  To calculate the area of a triangle, I used [Heron's formula](https://www.mathopenref.com/heronsformula.html): 

<figure class="blog-image">
<img src="/img/herons_formula.png" width="400"/>
<figcaption>Heron's Formula</figcaption>
</figure>

See how I incorporated Heron's formula into my solution below.

```javascript
function doesTriangleFit(brick, hole) {
	// Heron's formula determines the area of a triangle
	const heron = arr => {
		// first determine p
    p = arr.reduce((a,c)=> a + c)/2
		// use p to calculate the area of the triangle
    return Math.sqrt(p*(p-arr[0])*(p-arr[1])*(p-arr[2]))
  }
	// First, test if the length of the sides given do not make a triangle (heron = 0), otherwise, check to see if the area of the brick is less than the area of the whole.
  return heron(brick) === 0 || heron(hole) === 0 ? false : heron(brick) <= heron(hole)
}

doesTriangleFit([1, 1, 1], [1, 1, 1]) // true
doesTriangleFit([1, 1, 1], [2, 2, 2]) // true
doesTriangleFit([1, 2, 3], [1, 2, 2]) // false , "impossible triangle"
doesTriangleFit([1, 6, 8], [1, 6, 8]) // false
doesTriangleFit([1, 2, 4], [1, 2, 6]) // false
doesTriangleFit([3, 6, 8], [23, 63, 42]) // true, "Hole is too big"
doesTriangleFit([3, 6, 8], [1, 10, 8]) // false, "impossible hole"
doesTriangleFit([12, 63, 42], [1, 6, 8])// false, "too small hole"
```

## Other solutions

This solution first sorts all the sides so that they are in ascending order, using the function `asc` and passing it into a sort function, then adds the first two sides together for the brick and the whole to make sure they are valid triangles.  Then all threes sides for each triangle are compared. 
```javascript
const asc = (a, b) => a - b;

const doesTriangleFit = (triangle, hole) => {
  triangle.sort(asc);
  hole.sort(asc);

  return (
    triangle[0] + triangle[1] > triangle[2] &&
    hole[0] + hole[1] > hole[2] &&
    [0, 1, 2].every(i => triangle[i] <= hole[i])
  );
};
// Pustur
```

Similar approach as above, but implemented with a conditional statement to check if the triangle is valid, then uses a `for` loop to check if all the sides are longer.
```javascript
function doesTriangleFit(brick, hole) {
	const isTriangle = t => t[0] + t[1] > t[2];
	if (!isTriangle(brick) || !isTriangle(hole)) return false;
	for (let i = 0; i < 3; i++) 
		if (brick[i] > hole[i])
			return false;
	return true
}
//persolut

```