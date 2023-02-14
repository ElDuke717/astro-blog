---
setup: |
  import Layout from '../../layouts/BlogPost.astro'

title: JavaScript Recursion Practice Problems
publishDate: 14 Feb 2023
name: Nick Huemmer
twitter: 'https://twitter.com/nickhuemmer'
value: 128
description: Some practice problems and a brief outline on how recursion works.
tags: JavaScript, recursion, codesmith, arrays, numbers, fibonacci sequence, factorial
---

# JavaScript Recursion Practice Problems

Hello fellow aspiring JavaScript master!

Here are some JavaScript recursion practice problems (at the bottom of the page) that I put together to train myself for the [Codesmith](https://www.codesmith.io/) Technical Interview.  There's four of them for you to practice your programming skills and technical communication.

They are not the most difficult as I think it's more beneficial to work through less challenging problems to get used to the syntax and structure of a programming paradigm before attempting more challenging problems.  These problems also give you an opportunity to work on your technical communication - try to solve them while talking through your solution.  

I've only posted the prompts here for your benefit.  I've posted my solutions elsewhere since I think:	
1.  my solution may be more than you want or need to read
2.  you can come up with a better solution than mine, so you won't need to look at my solution!

### Please note the brief overview of recursion that I posted below the problems.  It includes two classic examples of recursion in programming - calculating a *factorial* and a number in the *fibonacci sequence*.

# Practice Problems

## countDigits
> Create a function that recursively counts an integer’s number of digits.

[solution](https://nickhuemmer.com/posts/recursion_countdigits/)

## findMax
> Create a recursive function findMax that takes in an array of integers and finds the maximum value in the array using recursion.

[solution](https://nickhuemmer.com/posts/recursion_findmax/)

## Inclusive Array Ranges
>Write a recursive function that, given the start startNum and end endNum values, return an array containing all the numbers inclusive to that range.

[solution](https://nickhuemmer.com/posts/recursion_inclusive_array_ranges/)

## Product of All Array Elements Except Current
>Write a  recursive function that takes an array of integers as an argument and returns a new array that contains the product of all the integers in the input array except the one at the current index. You can not use division.

[solution](https://nickhuemmer.com/posts/recusion_product_of_all_except_current/)


## Some Notes on recursion 

Recursion is a programming technique where a function calls itself repeatedly to perform a desired operation. The function will call itself  and will continue until a stopping condition is reached. Usually an operation in recursion will be done several times until a condition is met. It can be used to solve problems that can be divided into smaller subproblems that have a similar structure to the original problem. 

There are two important key conditions that you must establish when working with recursion - the **base case** and the **recursive case**. 

The **base case** is a stopping condition, that will stop the code from running to prevent the function from calling itself indefinitely.  It is the simplest possible version of the problem that can be solved directly without recursion. 

The **recursive case** is basically where almost all of the operations to perform happen, besides knowing when to stop.  The recursive function works to solve the problem by breaking it down into smaller subproblems, until it reaches the base case.

Recursion is neat and has the benefits of readability and keeping your code concise.  However, it's important to know that recursion can be less efficient than using a loop and can have more time complexity.

Here are two examples of recursion in JavaScript:

The [`factorial` problem](https://www.mathsisfun.com/numbers/factorial.html) is a good, basic example of how recursion works.

```javascript
function factorial(n) {
  if (n === 0) {
    return 1; // base case
  } else {
    return n * factorial(n - 1); // recursive case
  }
}

console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120
console.log(factorial(6)); // 720 
console.log(factorial(7)) // 5040

```


Another good example is the recursive function to find the value in a [Fibonacci sequence](https://www.mathsisfun.com/numbers/fibonacci-sequence.html):

```javascript

//i: number
//o: number

//base case is if n is equal to 1 return 1
// recursive case - perform Fibo addition = n + n-1

function fib(n) {
  if (n < 2) return n // base case
  else {
    return fib(n-1) + fib(n-2); // recursive case
  }
}

// To check if you've completed the challenge, uncomment this code!
console.log(fib(1)); // -> 1
console.log(fib(2)); // -> 1
console.log(fib(3)); // -> 2
console.log(fib(4)); // -> 3
console.log(fib(5)); // -> 5
console.log(fib(6)); // -> 8
console.log(fib(7)); // -> 13
console.log(fib(8)); // -> 21
console.log(fib(9)); // -> 34
console.log(fib(10)); // -> 55
console.log(fib(15)); // -> 610
console.log(fib(20)); // -> 6765
console.log(fib(30)); // -> 832040
```



