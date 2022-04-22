---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  import Cool from '../../components/Author.astro'
title: Working with Nested Arrays
publishDate: 22 April 2022
name: Nick Huemmer
description: Let's Figure Out to Get the Length of a Nested Array
---

<Cool name={frontmatter.name} href="https://twitter.com/nickhuemmer" client:load />

Let's look at a problem that deals with nested arrays.  A nested array is simply an array that is contained within another array.

The [Challenge](https://edabit.com/challenge/yXSTvCNen2DQHyrh6)
>The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:
>
>[1, [2, 3]]
/>/ 2 elements, number 1 and array [2, 3]
>
>Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.
>
>Write a function that returns the total number of non-nested items in a nested array.
Examples
>
>getLength([1, [2, 3]]) ➞ 3
>
>getLength([1, [2, [3, 4]]]) ➞ 4
>
>getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6
>
>getLength([1, [2], 1, [2], 1]) ➞ 5
>
>Notes
>
>An empty array should return 0.

This can be quite the challenge because at first glance there doesn't seem to be any straightforward solutions to it.  For example, you could use the `array.flat()` (seem more on this method below) to solve the first problem, but for more than one nested array you need to do something slightly different.

A number of solutions can be found on StackOverflow [here](https://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays)

Here's a solution that I put together (with a little help):

Concise solution:
```javascript
const array1 = [1, [2, 3]];
const array2 = [1, [2, [3, 4]]];
const array3 = [1, [2, [3, [4, [5, 6]]]]];

const getLength = (arr) => 
  arr.flat(Infinity).length;

getLength(array1) //3
getLength(array2) //4
getLength(array3) //6
```

It simply uses the JavaScript [array.prototype.flat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) method to flatten the array, which means that we remove any nested arrays.  But if we don't pass in [Infinity](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity)  as an argument, then the `.flat()` method will only flatten the first array and leave the other nested arrays alone.  `.flat()`  takes a number as an argument that specifies the depth of the arrays that it should "un-nest".  By passing in `Infinity`, our method will flatten all the arrays within the base array.


Here's another way to do it, this example taken from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat#use_a_stack), using a stack approach, that's more complicated but worthwhile examining:
```javascript
const array1 = [1, [2, 3]];
const array2 = [1, [2, [3, 4]]];
const array3 = [1, [2, [3, [4, [5, 6]]]]];

function flatten(input) {
  const stack = [...input];
  const res = [];
  while (stack.length) {
    // pop value from stack
    const next = stack.pop();
    if (Array.isArray(next)) {
      // push back array items, won't modify the original input
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  // reverse to restore input order
  return res.reverse().length;
}

flatten(array1); // 3
flatten(array2); // 4
flatten(array3); // 6
```

A stack is created from the array that is passed in.  A [while loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while) is started and runs for the length of the test array.  Each item in the array is "popped" off the `stack` array using [.pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) and tested to see if it's and array, using [.isArray()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray) if it is, it's pushed using [array.prototype.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)back onto `stack`, if not, it's added to the initialized empty array `res`.

The `flatten` function continues to run through recursion until the entire array is flattened.  Once that is done, the `res` array length is returned.

This function is a bit longer and harder to understand, but demonstrates that often different approaches can be taken to undertake the same problem with JavaScript.