---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  
title: Working with factorials in Javascript - Alt Facts, Semi Facts
publishDate: 21 September 2022
name: Nick Huemmer
twitter: "https://twitter.com/nickhuemmer"
value: 128
description: Working with different types of factorials in Javascript
tags: algebra, math, numbers, recursion, Javascript, Edabit, factorials
---

# [Alt Facts, Semi Facts](https://edabit.com/challenge/MBsY28LQth2d2G6ci)

This problem wasn't overly complicated, it just took awhile to assemble all the parts.

> The factorial of a positive number n is the product of all numbers
> from 1 to n.
> 
> 5! = 5 x 4 x 3 x 2 x 1 = 120
> 
> The semifactorial (also known as the double factorial) of a positive
> number n is the product of all numbers from 1 to n that have the same
> parity (i.e. odd or even) as n.
> 
> 12!! = 12 x 10 x 8 x 6 x 4 x 2 = 46,080
> 
> 7!! = 7 x 5 x 3 x 1 = 105
> 
> The alternating factorial of a positive number n is the sum of the
> consecutive factorials from n to 1, where every other factorial is
> multiplied by -1.
> 
> Alternating factorial of 1:
> 
> af(1) = 1!
> 
> Alternating factorial of 2:
> 
> af(2) = 2! + (-1)x(1!) = 2! - 1! = 2 -1 = 1
> 
> Alternating factorial of 3:
> 
> af(3) = 3! - 2! + 1! = 6 - 2 + 1 = 5
> 
> Create a function that takes a number n and returns the difference
> between the alternating factorial and semifactorial of n. Examples
> 
> altSemi(1) ➞ 0
> 
> altSemi(2) ➞ -1
> 
> altSemi(3)➞ 2

> The factorial of a positive number n is the product of all numbers
> from 1 to n.
> 
> 5! = 5 x 4 x 3 x 2 x 1 = 120
> 
> The semifactorial (also known as the double factorial) of a positive
> number n is the product of all numbers from 1 to n that have the same
> parity (i.e. odd or even) as n.
> 
> 12!! = 12 x 10 x 8 x 6 x 4 x 2 = 46,080
> 
> 7!! = 7 x 5 x 3 x 1 = 105
> 
> The alternating factorial of a positive number n is the sum of the
> consecutive factorials from n to 1, where every other factorial is
> multiplied by -1.
> 
> Alternating factorial of 1:
> 
> af(1) = 1!
> 
> Alternating factorial of 2:
> 
> af(2) = 2! + (-1)x(1!) = 2! - 1! = 2 -1 = 1
> 
> Alternating factorial of 3:
> 
> af(3) = 3! - 2! + 1! = 6 - 2 + 1 = 5
> 
> Create a function that takes a number n and returns the difference
> between the alternating factorial and semifactorial of n. Examples
> 
> altSemi(1) ➞ 0
> 
> altSemi(2) ➞ -1
> 
> altSemi(3)➞ 2

## My solution
```javascript
function altSemi(n) {
  function semifactorial(num) {
    const check = num  
    let numbers = []
      for (let i=0; i<num; i-1) {
        numbers.push(num--)
      }
    return check % 2 === 0 ? 
    numbers.filter(x=> x % 2 === 0).reduce((a, c) => a * c) :
    numbers.filter(x=> x % 2 !== 0).reduce((a, c) => a * c)
  }
  
  function alterFactorial(num) { 
    let numbers = []
      for (let i=0; i<num; i-1) {
        numbers.push(num--)
      }
    function factorial(n) {
      let lnums = []
      for (let i=0; i<n; i-1) {
        lnums.push(n--)
      }
      return lnums.reduce((a,c)=> a * c)
    }
    let factorials = numbers.map(x=> factorial(x))
    return factorials.map((e,i)=> i % 2 !== 0 ? e * -1 : e).reduce((a,c)=> a + c)
  }
  return alterFactorial(n) - semifactorial(n)
}

altSemi(1) // 0
altSemi(2) // -1
altSemi(3) // 2
```

## Other solutions
Both of these solutions are much more concise than mine (as usual).  Note how the first has three separate functions on each line.


```javascript
function altSemi(n) {
	const fctril=n=>n==1?1:n*fctril(n-1)
	const semiF=n=>n<=1?1:n*semiF(n-2)
	const altF=n=>n==1?1:fctril(n)-altF(n-1)
	return altF(n)-semiF(n)
}
//Adamqwerty
```

```javascript
const factorial = n => n === 1 ? 1 : n * factorial(n-1);

const sFactorial = n => n === 0 || n === 1 ? 1 : n * sFactorial(n-2);

function aFactorial(n) {
  let result = 0, multiplier = 1;
  while(n !== 0) {
    result += factorial(n) * multiplier;  
    multiplier *= -1;
    --n;
  }
  return result;
}

const altSemi = n => aFactorial(n) - sFactorial(n);
//el rookie
```