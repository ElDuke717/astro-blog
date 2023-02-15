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

Javascript closures are a concept that can be hard to grasp.  Understanding scope and how it can be leveraged to do stuff with your code can be difficult to explain in plain words without jargon.  I'll try here to explain it here without too much abstraction or unnecessary technical language.  It's one of those things that, once you get it, you get it.

In JavaScript, _a closure is created when a function is defined inside another function_.  The inner function has access to the outer function's variables and parameters, even after the outer function has returned.  This can create persistent memory within the outer function, and is the functionality that we want to take advantage of.

When a function is defined, a new execution context is created, which has its own variable environment, containing any variables and parameters defined within that function. When a nested function is defined inside the outer function, it has access to the outer function's variable environment, as well as its own variable environment. 

Think of those little nesting dolls, [matroyska](https://en.wikipedia.org/wiki/Matryoshka_doll).  Closures are kind of like the nesting dolls, the little dolls have access to the bigger dolls' stuff, but the bigger, outer dolls can't get to the little dolls stuff.

When the outer function returns, its variable environment is destroyed, (remember how JavaScript is single threaded and opens a local execution context for each step as it runs?) but any nested functions that have been returned, or that have been passed as arguments to other functions, maintain a reference to the outer function's variable environment. **This is what is known as a closure** and what we want to take advantage of in our code.  It is a little backpack that the inner function has access to.

_We can use the outer function to create persistent memory that can be referenced later._

Closures can be used to create private variables and functions (i.e. not in the global scope), by defining them inside a function and returning them as part of an object or function that is exposed to the global scope. This allows the private variables and functions to be accessed and modified only through the methods that are returned, ensuring that they cannot be modified directly by outside code.  By using closures, not only can you create persistent memory, you can limit what different parts of code have access to.

Closures can also be used to create factories for creating objects with shared methods, by defining a function that returns an object with methods that have access to private variables defined within the function.  You can see this in action in this problem, [`getCounter`](https://nickhuemmer.com/posts/closures_getcounter/).

Another common use of closures is to create callbacks that have access to variables defined outside of the callback function, allowing for more flexible and modular code.

Overall, closures are a powerful feature of JavaScript that allow for a wide range of design patterns and programming techniques, and a solid understanding of how they work is essential for any advanced JavaScript developer.

Here is a visible representation of closures in action within the problem `once`.

<img src="/img/once_func_explanation.png" width="300"/>

See how the `flag` variable is used as the memory for the `once` function?  `inner` has access to the variable `flag`, and assigns it a value if there isn't one already present.  Whenever a variable is assigned the value of `once` with a callback passed into it (`stuff` in this example), that variable becomes a function because the definition of `inner` is reassigned to it.  Essentially, `stuff` becomes `inner`, but with the persistent memory provided by `once`, the outer function.
