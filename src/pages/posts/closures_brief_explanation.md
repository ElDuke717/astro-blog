---
setup: |
  import Layout from '../../layouts/BlogPost.astro'

title: JavaScript Closures - A Brief Explanation
publishDate: 15 Feb 2023
name: Nick Huemmer
twitter: 'https://twitter.com/nickhuemmer'
value: 128
description: A brief explanation of closures in JavaScript
tags: JavaScript, closures, lexical scoping, global variables, private variables, codesmith
---

# An explanation of closures

Closures in JavaScript can be hard to understand. Even worse, explaining closure and how it's used to do stuff with your code can be difficult to explain in plain words without using too much jargon. Here I'll try to explain closures without using too much abstraction or technical language. If you spend enough time working with closures, though, you _will_ start to understand them better, and be able to use them in your code.

In JavaScript, _a closure is created when a function is defined inside another function_. The inner function has access to the outer function's variables and parameters, even after the outer function has returned. This can create persistent memory within the outer function, and is the functionality that we want to take advantage of.

A simple rule of thumb to remember for closures is three "R"s:

1. They _return_ another function,
2. They _reference_ variables from the outer function.
3. They _remember_ the outer function's variables.

When a function is defined, a new execution context is created, which has its own variable environment, containing any variables and parameters defined within that function. When a nested function is defined inside the outer function, it has access to the outer function's variable environment, as well as its own variable environment.

Think of those little nesting dolls, [matroyska](https://en.wikipedia.org/wiki/Matryoshka_doll). Closures are kind of like the nesting dolls, the little dolls have access to the bigger dolls' stuff, but the bigger, outer dolls can't get to the little dolls stuff.

<img src="/img/didssph-PB80D_B4g7c-unsplash.jpg" alt="a picture of matroyska" width="300"/>
Russian nesting dolls, or matroyska dolls, by [Didssph](https://unsplash.com/@didssph)

When the outer function returns, its variable environment is destroyed, (remember how JavaScript is single threaded and opens a local execution context for each step as it runs?) but any nested functions that have been returned, or that have been passed as arguments to other functions, maintain a reference to the outer function's variable environment. **This is what is known as a closure** and is what we want to take advantage of in our code. It is a little backpack that the inner function has access to.

_We can use the outer function to create persistent memory that can be referenced later._

## A simple example

<img src="/img/sums_closure_example1.png" alt="an example of a closure problem" width="400"/>

See how `sum` is used to store a value, and then is used again later? This is a simple example of a closure, and is the functionality that we want to take advantage of in our code.

Here's a code snippet that you can copy and paste to experiment with:

```javascript
function sums() {
  let sum = 0;

  function inner(num) {
    sum += num;

    return sum;
  }
  return inner;
}

const test = sums();
console.log(test(5)); // 5
console.log(test(10)); // 15
console.log(test(100)); // 115
```

Closures can be used to create private variables and functions (i.e. not in the global scope), by defining them inside a function and returning them as part of an object or function that is exposed to the global scope. This allows the private variables and functions to be accessed and modified only through the methods that are returned, ensuring that they cannot be modified directly by outside code. By using closures, not only can you create persistent memory, you can limit what different parts of code have access to.

Closures can also be used to create factories for creating objects with shared methods, by defining a function that returns an object with methods that have access to private variables defined within the function. You can see this in action in this problem, [`getCounter`](https://nickhuemmer.com/posts/closures_getcounter/). They don't always return a function.

Overall, closures are a powerful feature of JavaScript that allow for lot's of things to be done with your code and a solid understanding of how they work is essential for any advanced JavaScript developer.
