---
setup: |
  import Layout from '../../layouts/BlogPost.astro'

title: Using Closure to Calculate Large Fibonacci Numbers
publishDate: 02 Feb 2023
name: Nick Huemmer
twitter: "https://twitter.com/nickhuemmer"
value: 128
description: Here's a way to calculate very large numbers from the Fibonacci sequence using closure/memoization.
tags: JavaScript, memoization, closure, ,
---

The code defines a function `createFib` that returns another function `fib`, which calculates Fibonacci numbers. It uses a technique called memoization to optimize performance. Let's go through it line by line.

```javascript
const createFib = () => {
  // Create an empty object called memo to store calculated Fibonacci numbers.
  const memo = {};

  // Define the function fib, which calculates the nth Fibonacci number.
  const fib = (n) => {
    // Base case: If n is 0, the Fibonacci number is 0.
    if (n === 0) return 0;

    // Base case: If n is 1, the Fibonacci number is 1.
    if (n === 1) return 1;

    // Check if we've already calculated fib(n) and stored it in memo.
    // If so, return it to avoid redundant calculations.
    if (memo[n]) return memo[n];

    // Calculate fib(n) recursively.
    let fibn = fib(n - 1) + fib(n - 2);

    // Store the newly calculated fib(n) in memo for future use.
    memo[n] = fibn;

    // Return the calculated fib(n).
    return fibn;
  };

  // Return the fib function, which now has access to memo because of closure.
  return fib;
};
```

1. `const createFib = () => { ... }`: This is an arrow function that, when invoked, returns another function (`fib`).
2. `const memo = {};`: This object stores previously computed Fibonacci numbers. This is the memoization part.

3. `const fib = (n) => { ... }`: This is the function that actually calculates Fibonacci numbers.

4. `if (n === 0) return 0;` and `if (n === 1) return 1;`: These are the base cases for Fibonacci numbers. Fib(0) is 0, and Fib(1) is 1.

5. `if (memo[n]) return memo[n];`: Before calculating `fib(n)`, the function checks if it's already stored in `memo`. If it is, it returns the stored value to avoid redundant calculations.

6. `let fibn = fib(n - 1) + fib(n - 2);`: This is where the Fibonacci number is actually calculated using recursion.

7. `memo[n] = fibn;`: The newly calculated value is stored in `memo` for future use.

8. `return fibn;`: Finally, the function returns the calculated Fibonacci number.

9. `return fib;`: At the end of `createFib`, the `fib` function is returned. It retains access to `memo` thanks to closure, so it can use `memo` in future calls.

This code leverages memoization to avoid recalculating Fibonacci numbers, which makes it more efficient. In a typical recursive Fibonacci function without memoization, the time complexity would be exponential (`O(2^n)`). With memoization, the time complexity is linear (`O(n)`), which is a substantial optimization.

I hope this explanation helps clarify how the code works! Feel free to ask if you have more questions.
