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

JavaScript closures can be difficult to grasp and explaining them in a non-technical way is even more challenging. However, I'll do my best to clarify closures without overwhelming you with abstract terminology. My goal is to provide you with a straightforward explanation that will help you develop your own understanding of closures. Although it may take some time and practice to fully comprehend closures, with enough exposure and experience, you'll be able to utilize them effectively in your coding endeavors.

In JavaScript, a closure is formed when a function is defined within another function, allowing the inner function to access the outer function's variables and parameters beyond the execution of the outer function. This creates persistent memory within the outer function, which we can utilize to our advantage.

Mental models are a great way to help us understand complex concepts.  

[Mnemonic devices](https://en.wikipedia.org/wiki/Mnemonic) are a great way to help us remember things, too.  Here's a mnemonic device that I use to help me remember what we need to know about closures, the three "R"s:

1. They *_return_* another function,
2. They *_reference_* variables from the outer function.
3. They *_remember_* the outer function's variables' values.

When a function is defined, a new execution context is created, which has its own variable environment, containing any variables and parameters defined within that function. When a nested function is defined inside the outer function, it has access to the outer function's variable environment, as well as its own variable environment.

Think of those little nesting dolls, [matroyska](https://en.wikipedia.org/wiki/Matryoshka_doll). They are a good [mental model]() for helping us understand closures.  Closures are kind of like the nesting dolls, the little dolls have access to the bigger dolls' stuff, but the bigger, outer dolls can't get to the little dolls stuff.

<img src="/img/didssph-PB80D_B4g7c-unsplash.jpg" alt="a picture of matroyska" width="300"/>
Russian nesting dolls, or matroyska dolls, by [Didssph](https://unsplash.com/@didssph)

When the outer function returns, its variable environment is destroyed, (remember how JavaScript is single threaded and opens a local execution context for each step as it runs?) but any nested functions that have been returned, or that have been passed as arguments to other functions, maintain a reference to the outer function's variable environment. **This is what is known as a closure** and is what we want to take advantage of in our code. 

_We can use the outer function to create persistent memory that can be referenced later._

Another way to think of how data is handled in a closure is to think of the inner function as having a backpack that is provided by the outer function.  The persistent memory is a little backpack that the inner function takes with it when it's returned.  The backpack is provided by the outer function, and the backpack contains the outer function's variables and parameters.  The inner function can access the backpack, but the outer function can't access the inner function's backpack.

## A simple example

<img src="/img/sums_closure_example1.png" alt="an example of a closure problem" width="800"/>

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
