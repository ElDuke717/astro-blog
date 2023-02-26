---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  
title: Reduce Under the Hood
publishDate: 26 Feb 2023
name: Nick Huemmer
twitter: "https://twitter.com/nickhuemmer"
value: 128
description: Here is a way to replicate the reduce method.
tags: JavaScript, arrays, reduce, methods, callback, accumulator
---

## What is Reduce?

Reduce is a useful method available on arrays in JavaScript.  It is used to reduce an array to a single value and is a great way to sum the values in an array, or to find the difference between the values in an array.    

Here is how we would usually use the reduce method:

```javascript
const nums = [ 1, 2, 3, 4, 5];

nums.reduce((accumulator, current) => accumulator + current) // 15

nums.reduce((accumulator, current) => accumulator - current) // -13
// reduce with an default value provided for the start
nums.reduce((accumulator, current) => accumulator + current, 5) // 20

```

Notice the last example, how the output is 20 rather than 15.  This is because the reduce method takes an optional second argument, the initial value of the accumulator.  If the initial value is not provided, the first element in the array is used as the initial value of the accumulator.  If the initial value is provided, the first element in the array is skipped.

Reduce takes an array and a callback function as arguments.  The callback function takes an accumulator and the current element as arguments.  The callback function is called on each element in the array.  The return value of the callback function is assigned to the accumulator.  The accumulator is passed as the first argument to the callback function on the next iteration.  The return value of the reduce method is the accumulator.

In this example, we'll use reduce to get the average of the values in an array.

```javascript
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, current) => 
  return accumulator + current, 0);

const average = sum / numbers.length;

console.log(average); //  3

```

## Replicating Reduce

Let's replicate the reduce method to better understand how it works under the hood.  We'll start by creating a function called reduce.  It will take an array and a callback function and initial value as arguments.  If no initial value is provided, the first element in the array will be used as the initial value of the accumulator.  If an initial value is provided, the accumulator is assigned that value initially.  If no initial value is provided, the accumulator is assigned the first element in the array.  We'll also declare a variable called startIndex and assign it a value of 0 if an initial value is provided or 1 if an initial value is not provided.  This will be used to skip the first element in the array if an initial value is not provided.

We then iterate over the array and call the callback function on each element in the array.  The return value of the callback function is assigned to the accumulator.  The accumulator is passed as the first argument to the callback function on the next iteration.  The return value of the reduce method is the accumulator. 

Lastly, we return the accumulator when the loop is finished.

```javascript
// Make sure to account for skipping over the first element if no initialValue is given

function reduce(array, callback, initialValue) {
  // declare accumulator, assigned the value of initialValue if it's undefined, otherwise the first element in the array
  let accumulator = initialValue !== undefined ? initialValue : array[0];
  // declare startIndex, assigned 0 if initialValue is undefined or 1 if initialValue is defined
  let startIndex = initialValue !== undefined ? 0 : 1;
  // iterate over the array, starting at startIndex
  for (let i = startIndex; i < array.length; i++) {
    // reassign the value of accumulator to the value of call back with accumulator, current array element, current index and array passed as arguments
    accumulator = callback(accumulator, array[i]);
  }
  // return accumulator
  return accumulator;
}

// subtract item from accumulator
  // callback function
const difference = function(tally, item) {return tally - item; };
const subtracted = reduce([1, 2, 3], difference);
console.log(subtracted) // -4

// sum of the array
  // callback function
const add = function(tally, item) {return tally + item; };
const added = reduce([1, 2, 3], add);
console.log(added) // 6

// sum of the array with no initial value
  // callback function
const add = function(tally, item) {return tally + item; };
const addedWithInitialValue = reduce([1, 2, 3], add, 2);
console.log(addedWithInitialValue); // 8
```

By replicating the reduce method, we can better understand how it works under the hood.  Hopefully, this will help you better understand how to use the reduce method in the future.  
