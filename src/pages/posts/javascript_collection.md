---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  
title: What is a Collection in Javascript?
publishDate: 25 February 2023
name: Nick Huemmer
twitter: "https://twitter.com/nickhuemmer"
value: 128
description: A collection is a common data structure in JavaScript that you may already be familiar with.
tags: JavaScript, collections, arrays, objects, sets, maps, learning, code, programming
---


# What is a Collection in Javascript?

In JavaScript, a collection is a data structure that is used to store a collection of values, such as an array or an object. It is a generic term that can be used to refer to any data structure that stores a collection of values. A collection can contain multiple values of different data types, such as strings, numbers, and objects, and allows you to perform various operations on the values it contains.  

Collections are useful for organizing and working with data in many different ways, and are a fundamental part of programming and computer science.

While different collection types have different properties and methods, they all share the basic characteristic of storing multiple values and providing operations for manipulating the collection. This is why the term "collection" is often used as a general term to refer to any data structure that provides these basic capabilities.

# Arrays

An array is the most commonly used collection in JavaScript. It is an ordered list of values that can be accessed by their index. An array can contain values of any data type, and you can perform various operations on it, such as adding or removing elements, iterating over the elements, and sorting the elements.

Here are some examples of arrays:

```javascript
const numbers = [1, 2, 3, 4, 5];

const fruits = ['apple', 'banana', 'cherry'];

const mixedArray = [1, 'apple', true, {name: 'John'}, [1, 2, 3]]; 
```
Arrays have their own native methods available to them, such as `push()`, `pop()`, `shift()`, `unshift()`, `splice()`, `slice()`, `sort()`, `reverse()`, `indexOf()`, `includes()`, and `length`.   Arrays naturally support iteration, which is the process of performing a task on each element in the array. You can use the `forEach()` method to iterate over an array, or you can use the `for...of` loop to iterate over an array.

# Objects

Another common type of collection in JavaScript is an object. An object is an unordered collection of key-value pairs, where each key is a unique identifier and each value can be of any data type. Objects are often used to store structured data and to represent real-world entities.  We use objects since they offer us the ability to store data in a way that is easy to access and manipulate with methods.

Here are two examples of objects:

```javascript
const person = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA'
  },
  hobbies: ['reading', 'hiking', 'cooking']
};

const car = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2020
  drive: function() {
    console.log('Vroom!');
  }
};
```
Three common and useful methods for objects are `Object.keys()`, `Object.values()`, and `Object.entries()`. These methods allow you to get the keys, values, and entries of an object, respectively.

# Sets 

Sets are used to store collections of unique values where each value can be of any data type. One key difference between Sets and arrays is that Sets only allow unique values, meaning that any duplicates are automatically removed. Another difference is that Sets maintain the order of their elements, like arrays and unlike Maps.

Here are two examples of Sets:

```javascript
const numbers = new Set([1, 2, 3, 4, 5]);
console.log(numbers); // Set(5) { 1, 2, 3, 4, 5 }

const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
console.log(vowels); // Set(5) { 'a', 'e', 'i', 'o', 'u' }
```

Sets have their own native methods available to them, such as `add()`, `delete()`, and `has()`. You can also use the spread operator to convert a Set into an array.

# Maps

A Map in JavaScript is a collection of key-value pairs, where each key can be of any data type and each value can be of any data type. Maps provide a way to store and retrieve data based on a specific key, similar to how objects work, but with some important differences.

One key difference between Maps and objects is that Maps allow any data type to be used as a key, while objects only allow strings or symbols to be used as keys. Another difference is that Maps maintain the order of their keys, while objects do not guarantee the order of their keys.

Here is an example of some Maps:

```javascript
const userMap = new Map();
userMap.set('name', 'John');
userMap.set('age', 30);
userMap.set('address', {street: '123 Main St', city: 'Anytown', state: 'CA'});

console.log(userMap); 
// Map(3) {
//   'name' => 'John',
//   'age' => 30,
//   'address' => {
//     street: '123 Main St',
//     city: 'Anytown',
//     state: 'CA'
//   },
// }

const bookMap = new Map();
bookMap.set('title', 'The Great Gatsby');
bookMap.set('author', 'F. Scott Fitzgerald');
bookMap.set('year', 1925);

console.log(bookMap);
// Map(3) {
//   'title' => 'The Great Gatsby',
//   'author' => 'F. Scott Fitzgerald',
//   'year' => 1925,
//   }
// }
```
Similar to Sets, Maps have their own native methods available to them, such as `set()`, `get()`, `has()`, `delete()` and `size`. You can also use the spread operator to convert a Map into an array.


# Conclusion

Hopefully this article has helped clear up what a collection is in JavaScript and how they can be used to store and manipulate data. If you have any questions or comments, please feel free to reach out to me on Twitter.
