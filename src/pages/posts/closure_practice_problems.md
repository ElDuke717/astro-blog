---
setup: |
  import Layout from '../../layouts/BlogPost.astro'

title: JavaScript Closures Practice Problems
publishDate: 15 Feb 2023
name: Nick Huemmer
twitter: 'https://twitter.com/nickhuemmer'
value: 128
description: Keep count of numbers passed in using closure.
tags: JavaScript, closures, codesmith
---

Hello fellow aspiring JavaScript master!

Here are some JavaScript closure practice problems (at the bottom of the page) that I put together to train myself for the [Codesmith](https://www.codesmith.io/) Technical Interview.  There's four of them for you to practice your programming skills and technical communication.

They are not the most difficult as I think it's more beneficial to work through less challenging problems to get used to the syntax and structure of a programming paradigm before attempting more challenging problems.  These problems also give you an opportunity to work on your technical communication - try to solve them while talking through your solution.  

I've only posted the prompts here for your benefit.  I've posted my solutions elsewhere since I think:	
1.  my solution may be more than you want or need to read
2.  you can come up with a better solution than mine, so you won't need to look at my solution!

If you're having trouble understanding closures in JavaScript, check out my post [here](https://nickhuemmer.com/posts/closures_brief_explanation/).  It's a brief explanation of closures with a diagram of a sample problem.


## Sums
> Declare a function 'sums', which takes no arguments and returns another function. The returned function takes a number as an argument, and when invoked, it will return the total sum of the number passed in and the numbers that have previously been passed to the 'sums' function.


[Solution](https://nickhuemmer.com/posts/closures_sums/)

## numCount 

>Declare a function 'numCount', which takes in a single number as an argument and returns another function. The returned function takes a string as an argument, and when invoked, it will search that string for the number initially passed in to the 'numCount' function, and return the number of occurrences.
>Once complete, write some code to test your 'numCount' function.

[Solution](https://nickhuemmer.com/posts/closures_numcount/)

## multiplier
>Declare a function 'multiplier', which takes a number as an argument and returns another function. The returned function takes another number as an argument, and when invoked, it will return the product of the two numbers passed in.

[Solution](https://nickhuemmer.com/posts/closure_multiplier/)

## getCounter

>Declare a function 'getCounter', which takes no arguments and returns an object with two methods: 'increment' and 'decrement'. The methods should increase and decrease a private counter variable, respectively, and return the updated count.

[Solution](https://nickhuemmer.com/posts/closures_getcounter/)