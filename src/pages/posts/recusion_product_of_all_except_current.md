---
setup: |
  import Layout from '../../layouts/BlogPost.astro'

title: JavaScript Recursion - Array Product Except Current Index
publishDate: 14 Feb 2023
name: Nick Huemmer
twitter: 'https://twitter.com/nickhuemmer'
value: 128
description: Create an array of the products of all array elements except for the current element
tags: JavaScript, recursion, codesmith, arrays, methods,
---

## The Problem:

> Write a function that takes an array of integers as an argument and returns a new array that contains the product of all the integers in the input array except the one at the current index. You can not use division.

This is an interesting problem that I solved with _many_ default parameters added along with the array that is the parameter that we want the recursive function to act on.

To make this work, we add a `dummy` array that is set and reset to the value of the `array` array. We do this so that we can iterate over each element at each index, removing each element at each iteration, calculating the product, then resetting the value of `dummy` to the values of `array` so that we can splice the next number and calculate the product.

It's pretty tricky and I had to add several `console.log` s the function so that I could figure out what was happening at each step of the process.

```javascript
/*Write a function that takes an array of integers as an argument and returns a new array that contains the product of all the integers in the input array except the one at the current index. You can not use division.
 */

// input: [1, 2, 3, 4, 5]
// output: [120, 60, 40, 30, 24]

//i: input, array of numbers
//o: array of numbers

// declare multiples, takes one argument, an array of numbers
// add params with default values
// array - the original array
// dummy - a mutable array to splice and calculate product from
// i - a counter to keep track of the array index
// hold - an empty array to hold the products of all numbers in dummy
// product - a variable to hold the value of all the elements multiplied together
function multiples(
  array,
  dummy = [...array],
  i = 0,
  hold = [],
  product
) {
  // base case: if i === input.length, return hold
  if (i === array.length) {
    return hold;
  }
  // recursive case:
  // splice out the number at index of i
  dummy.splice(i, 1);
  // use reduce to calc product of all numbers left in dummy after splice, default value of accumulator is zero.
  product = dummy.reduce((a, c) => a * c, 1);
  // push product to the hold array
  hold.push(product);
  // dummy value is reset to oringal array value, spread operator is used to keep array immutable.
  dummy = [...array];
  // return multiples with array, dummy, i incremented and hold passed to it.
  return multiples(array, dummy, ++i, hold);
}

console.log(multiples([1, 2, 3, 4, 5])); // [ 120, 60, 40, 30, 24 ]
console.log(multiples([1, 1, 1, 1])); // [1, 1, 1, 1]
console.log(multiples([5, 4, 3, 2, 1])); // [ 24, 30, 40, 60, 120 ]
```

Here's the ChatGPT solution:

```javascript
function getProductArrayRecursion(
  inputArray,
  currentIndex = 0,
  product = 1,
  outputArray = []
) {
  // Base case: end of the array is reached
  if (currentIndex === inputArray.length) {
    return outputArray;
  }

  // Calculate product of all elements except the current index
  for (let i = 0; i < inputArray.length; i++) {
    if (i !== currentIndex) {
      product *= inputArray[i];
    }
  }

  // Add product to output array
  outputArray.push(product);

  // Recursively call the function with incremented index and reset product to 1
  return getProductArrayRecursion(
    inputArray,
    currentIndex + 1,
    1,
    outputArray
  );
}

const inputArray = [1, 2, 3, 4];
const outputArray = getProductArrayRecursion(inputArray);
console.log(outputArray); // [24, 12, 8, 6]
```
