---
setup: |
  import Layout from '../../layouts/BlogPost.astro'

title: Cloning Objects in JavaScript
publishDate: 15 Feb 2023
name: Nick Huemmer
twitter: 'https://twitter.com/nickhuemmer'
value: 128
description: You can clone objects in JavaScript, but it doesn't work the way you might expect.
tags: JavaScript, objects, cloning, deep cloning, shallow cloning, codesmith
---

# Cloning Objects in JavaScript

Here are three ways that you can create an exact copy of an object in Javascript:
```javascript
const originalObject = {a: 1, b: 2, c: {d: 3}};
const copiedObject = {...originalObject};

console.log(copiedObject); // {a: 1, b: 2, c: {d: 3}};

console.log(originalObject[0] === copiedObject[0]) // false

```

```javascript
const originalObject = {a: 1, b: 2, c: {d: 3}};
const copiedObject = Object.assign({}, originalObject);

console.log(copiedObject); // {a: 1, b: 2, c: {d: 3}};

console.log(originalObject[0] === copiedObject[0]) // false
```

```javascript
const originalObject = {a: 1, b: 2, c: {d: 3}};
const copiedObject = JSON.parse(JSON.stringify(originalObject));

console.log(copiedObject); // {a: 1, b: 2, c: {d: 3}};

console.log(originalObject[0] === copiedObject[0]) // false
```
You may have noticed that the objects should have the same content, but are not strictly equal.

Why? Because they have different references in memory.  You can create a copy of an object, but in order for it to be strictly equal to the original it was copied from, it must reference the same thing.  

If you need to compare two objects to see if they have the same contents, you can use `JSON.stringify()` to compare them.  What this essentially does is convert each object into a string, which can be compared:

```javascript
console.log(JSON.stringify(peeps[0]) === JSON.stringify(users[0])); // true
```

Another example - iterate over an array to create a shallowCopy of an object:
```javascript
// one param, value, an array of objects
function clone(value) {
  // create an empty array hold to hold new values
  const hold = [];
  // iterate over the value array
  for (let i = 0; i < value.length; i++) {
    // for each value, push a reference to the original to hold
    hold.push(value[i]);
  }
  // return hold
  return hold;
}

const users = [{ 'user': 'barney' },{ 'user': 'fred' }];

const shallowClone = clone(users);
console.log(shallowClone); // [ { user: 'barney' }, { user: 'fred' } ]
// True, because the instances of both reference the same location in memory
console.log(shallowClone[0] === users[0]); // true

```



```javascript
function clone(value) {
  // create an empty array hold to hold new values
  const hold = [];
  // iterate over the value array
  for (let i = 0; i < value.length; i++) {
    // for each value, push a clone to hold using spread operator
    hold.push({...value[i]});
  }
  // return hold
  return hold;
}

const users = [{ 'user': 'barney' },{ 'user': 'fred' }];

const shallowClone = clone(users);
console.log(shallowClone); // [ { user: 'barney' }, { user: 'fred' } ]

// they are not strictly equal because the objects are occupying different locations in memory.
console.log(shallowClone[0] === users[0]); // false
```