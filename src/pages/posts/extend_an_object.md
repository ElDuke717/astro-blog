---
setup: |
  import Layout from '../../layouts/BlogPost.astro'

title: Extending an Object in JavaScript
publishDate: 02 Feb 2023
name: Nick Huemmer
twitter: 'https://twitter.com/nickhuemmer'
value: 128
description: Here's how you can add properties to an object in JavaScript, from another object iteratively with reduce.
tags: JavaScript, objects, extend, extend object, codesmith
---

>Assigns own enumerable properties of source object(s) to the destination object. Subsequent sources overwrite property assignments of previous sources. Solve with reduce.

This one is difficult because the prompt is not clear, and then implemening `reduce` with `Object.keys` on the right object is tricky.

First, the parameters are declared, `destination` is passed which is the destination object that the new values will be passed to.  `...sources` are passed in with the rest parameter so any number of objects can be passed.

The `reduce` method is used to combine the `destination` object with the objects on `sources`.  `destination` is the default accumulator, and `sources` is an array that is iterated over.  Each `source` from `sources` has it's property added to the accumulator `destination`. If `destination` (`acc`) already has the property, then it is overwritten with the value from `source`, otherwise it's added.

```javascript
// Assigns own enumerable properties of source object(s) to the destination
// object. Subsequent sources overwrite property assignments of previous sources.
// extend({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
// should return ->  { 'user': 'fred', 'age': 40 }
// BONUS: solve with reduce
function extend(destination, ...sources) {
  // return the function that is reduce method applied to destination as the accumulator and each source object value with matching key
  return sources.reduce((acc, source) => {
    // keys of source are iterated over
    Object.keys(source).forEach(key => {
      // if key from source exists on destination, overwrite it's value, if not, add it as a prop
      acc[key] = source[key];
    });
    // accumulator is returned, which is the updated destination object.
    return acc;
  }, destination);
}


extend({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
// should return ->  { 'user': 'fred', 'age': 40 }

extend({});
```