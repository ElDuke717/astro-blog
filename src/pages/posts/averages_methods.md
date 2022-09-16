---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  
title: Averages Methods - Extending the Math Object
publishDate: 16 September 2022
name: Nick Huemmer
twitter: "https://twitter.com/nickhuemmer"
value: 128
description: Adding our own  to the Math object
tags: arrays, methods, Math, the Math object,  javascript, Edabit
---

# [Averages Methods: Extending the Math Object](https://edabit.com/challenge/rRXRZvkq6uK98uEWv)

In this challenge, we have to both make four different functions to calculate different types of averages, and *then* add them onto the `Math`  object so that they can be called like other methods on the `Math` object (like `Math.pow`, `Math.sqrt`, `Math.max` and so on).  

It sounds tricky, but really is as simple as using dot notation to add each function to the `Math` object to make them into methods.

## Challlenge
> In this exercise the goal is to extend the Math() object adding four methods for calculate different types of averages.
>
 >   Arithmetic Mean: The division of the sum of the numbers by the quantity of numbers.
        avg of [A, B, C] ➞ (A + B + C) / 3
>
 >Quadratic Mean: Also called Root Mean Square, is the square root of the arithmetic mean of the squared numbers.
        qAvg of [A, B, C] ➞ ²√ ( (A² + B² + C²) / 3 )
>
> Harmonic Mean: is the reciprocal of the arithmetic mean of the numbers reciprocals.
        hAvg of [A, B, C] ➞ ( (A⁻¹ + B⁻¹ + C⁻¹) / 3 )⁻¹
 >
> Geometric Mean: is the n-th root of the product of the numbers, where n is the quantity of numbers.
        gAvg of [A, B, C] ➞ ³√ (A * B * C)
>
>For each average type build a function that, given a required parameter (the array containing the numbers) and an optional one (the precision, or number of floating digits to return) returns the result as a number.

### Examples
```
Math.avg([3, 5, 7])➞ 5
//Precision is an optional parameter.
// (3 + 5 + 7) / 3 = 15 / 3 = 5

Math.qAvg([3, 5, 7], 1) ➞ 5.3
// ²√ ( (3² + 5² + 7²) / 3 ) = ²√ (83 / 3) = 5.3

Math.hAvg([3, 5, 7], 1) ➞ 4.4
// Precision is required only for the final result.
// (3⁻¹ + 5⁻¹ + 7⁻¹) / 3 )⁻¹ = (0.676... / 3)⁻¹ = 4.4

Math.gAvg([3, 5, 7], 1) ➞ 4.7
// ³√ (3 * 5 * 7) = ³√ 105 = 4.7
```
### Notes

>   Pay attention to cumulative rounding errors! Precision is required only if the parameter is indicated and only for the final result.
    All given arrays are valid ones containing positive numbers greater than zero, either integers or float.
   
	
## My solution

I made each method as a separate function *first*, then converted them from arrow function syntax to dot notation so that they could be added to the Math object, e.g. `const avg = (arr,p) => ` to  `Math.avg = (arr, p)`.

Adding these methods onto the `Math` object allows them to be used throughout a program since once they are instantiated, they can be used throughout, in the same way methods like `Math.pow`  or `Math.sqrt` are used.

Note the optional parameter `p` that may or may not be included.  If it is included, then the `toFixed` method is called and a `+` is added to convert the resulting string back into a number. 

```javascript
Math.avg = (arr, p) =>  
   p ? +(arr.reduce((a,c)=> a + c)/arr.length).toFixed(p) : arr.reduce((a,c)=> a + c)/arr.length

Math.qAvg = (arr, p) => 
   p ? +Math.sqrt(arr.map(x=> x**2).reduce((a,c)=> a + c)/arr.length).toFixed(p) : Math.sqrt(arr.map(x=> x**2).reduce((a,c)=> a + c)/arr.length)

Math.hAvg = (arr, p) => 
  p ? +((arr.map(x=> x**-1).reduce((a,c)=> a + c)/arr.length)**-1).toFixed(p) : (arr.map(x=> x**-1).reduce((a,c)=> a + c)/arr.length)**-1

Math.gAvg = (arr, p) => 
  p ? +Math.pow(arr.reduce((a,c)=> a * c), 1/arr.length).toFixed(p)  : Math.pow(arr.reduce((a,c)=> a * c), 1/arr.length)


Math.avg([3,5,7]) // 5
Math.qAvg([3,5,7], 1) // 5.3
Math.hAvg([3, 5, 7], 1) // 4.4
Math.gAvg([3, 5, 7], 1) // 4.7
Math.gAvg([1, 23, 456, 7890]) // 95.37672823128207
Math.avg([0.11, 0.22, 0.33], 1) // 0.2
Math.qAvg([0.11, 0.22, 0.33], 6) // 0.237627
```

## Other solutions

Some functions are defined first and called later in the methods - e.g. `sum` is used to add numbers together in the methods following it.
```javascript
const sum = arr => arr.reduce((total, num) => total + num, 0);

const product = arr => arr.reduce((total, num) => total * num, 1);

const mean = arr => sum(arr) / arr.length;

const withPrecision = (num, prec) =>
  typeof prec === 'number' ? Number(num.toFixed(prec)) : num;

Math.avg = (arr, prec) => withPrecision(mean(arr), prec);

Math.qAvg = (arr, prec) =>
  withPrecision(Math.sqrt(mean(arr.map(num => num ** 2))), prec);

Math.hAvg = (arr, prec) =>
  withPrecision(1 / mean(arr.map(num => 1 / num)), prec);

Math.gAvg = (arr, prec) =>
  withPrecision(Math.nthRt(product(arr), arr.length), prec);

Math.nthRt = (num, root, prec) =>
  withPrecision(Math.exp((1 / root) * Math.log(num)), prec);

//Pustur
```

This solution uses a function, `f` to determine if a `p` argument is passed into the method. If it is, then the `+x.toFixed(p)` method is called.
```javascript
f = (x,p) => isNaN(p) ? x : +x.toFixed(p)

Math.avg  = (N,p) => f(eval(N.join`+`) / N.length, p)
Math.qAvg = (N,p) => f((N.reduce((a,b) => a + b * b, 0) / N.length) ** .5, p)
Math.hAvg = (N,p) => f(N.length / N.reduce((a,b) => a + 1 / b, 0), p)
Math.gAvg = (N,p) => Math.nthRt(eval(N.join`*`), N.length, p)

Math.nthRt = (n,r,p) => f(Math.exp(1 / r * Math.log(n)), p)
//xAlien95
```