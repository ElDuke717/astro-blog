---
setup: |
  import Layout from '../../layouts/BlogPost.astro'

title: What is an Algorithm?
publishDate: 17 July 2023
name: Nick Huemmer
twitter: 'https://twitter.com/nickjhuemmer'
value: 128
description: A brief explanation of what an algorithm is.
tags: JavaScript, algorithms, functions, loops, numbers, strings, arrays, definitions
---

## What is an Algorithm?

When you think of the word "algorithm", it may bring back bad memories of math class or it may sound like intimidating jargon.  What's worse is that when used in the context of computer science, it may seem like an even more abstract concept that would be hard to understand.  But in reality, algorithms are not as difficult as they sound.  You probably use them every day without even realizing it.


### Definition

_An algorithm is a set of step by step instructions or set of rules to  followed to solve a problem_.  Algorithms are common in mathematics and were used way before computers used them (in fact, the Babylonians, Egyptians and ancient Greeks all used them).  

Essentially, an algorithm is a set of instructions, or procedure to follow when attempting to solve some problem.  The word "algorithm" sounds prohibitively mathematical and technical, but really it's just a set of instructions to follow.  You could have a bread making or shoe-tying algorithm, for example.

In the context of computer science and programming, an algorithm is a sequence of computational steps or instructions that transform input into output. Algorithms are used in computer science to solve problems and to manipulate data in various ways, such as searching and sorting data.  They are also used to control the flow of programs.


An algorithm has the following characteristics:

1. **Well-Defined Inputs**: The algorithm should be clear about the required inputs.

2. **Well-Defined Outputs**: For each set of inputs, the algorithm produces a clear and definite set of outputs.

3. **Definiteness**: Each step in the algorithm must be clear and unambiguous.

4. **Finiteness**: The algorithm should have a finite number of steps. It should not run indefinitely and must stop after a finite amount of time.

5. **Effectiveness**: The algorithm should be simple enough that it can in principle be followed by a person using only pencil and paper. It is not enough that each operation (step) be definite, but it must also be feasible or executable.

Algorithms form the backbone of most of the software programs and are  implemented in various programming languages. They are primarily used in fields such as data analysis, machine learning, data mining, and others to process and manipulate data in a meaningful way.

Here is an example of a simple algorithm to add two numbers:

```javascript
// add two numbers
function add(a, b) {
  return a + b;
}

// output
console.log(add(2, 3)); // 5
```
In the above example, the algorithm is the function `add` which takes two numbers as inputs and returns the sum of the two numbers as output.  Pretty simple and straightforward.  Let's look at another example.

```javascript
// find the largest number in an array
function findLargest(arr) {
  // start with the first element in the array
  let largest = arr[0];
  // loop over the rest of the array
  for (let i = 1; i < arr.length; i++) {
    // if the current element value is greater than the largest value
    if (arr[i] > largest) {
      // reassign the largest value to the current element value  
      largest = arr[i];
    }
  }
  // return the largest value
  return largest;
}

// ouput
console.log(findLargest([1, 2, 3, 4, 5])); // 5
```
In this algorithm, we are just telling the computer to find the largest number in an array of numbers.  We do this by looping through the array and comparing each number to the current largest number.  If the current number is larger than the current largest number, we set the current number as the largest number.  We continue this process until we have looped through the entire array.  At the end, we return the largest number.

Again, we are giving the computer a set of instructions to follow to solve a problem.  Notice that there are well-defined inputs (the array), well defined outputs(the largest number), definiteness (each step is clear and well defined), finiteness (the algorithm will stop after a finite time), and effectiveness (the algorithm is simple enough to be carried out by a person using only pencil and paper, with enough diligence and time).

Lastly, let's look at an elegant ancient algorithm from Euclid:
    
```javascript
// Euclid's algorithm to find the greatest common divisor of two numbersfunction function gcd - greatest common divisor
 function gcd(a, b) {
  // If b is 0, a is the gcd
  if (b === 0) {
    return a;
}
  // Otherwise, recursively call the function, swapping the inputs
  else {
    return gcd(b, a % b);
  }
}

// outpu
console.log(gcd(270, 192));  // 6
```

This algorithm is a bit more complex than the previous two, but it is still simple enough to be followed by a person line by line.  It is also a good example of recursion (where the function calls itself to complete an operation, out of the scope of this article).

In summary, an algorithm is a set of step by step instructions or  rules to be followed to solve a problem.  They are used in computer science to solve problems and to manipulate data in various ways, such as searching and sorting data.  Algorithms must have well-defined inputs and outputs, definiteness, finiteness, and effectiveness. They are also used to control the flow of programs in programming languages like JavaScript, Python, C++, and pretty much all others.