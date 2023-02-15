---
setup: |
  import Layout from '../../layouts/BlogPost.astro'

title: JavaScript Closures - numCount
publishDate: 15 Feb 2023
name: Nick Huemmer
twitter: 'https://twitter.com/nickhuemmer'
value: 128
description: Count how many numbers are in a string.
tags: JavaScript, cloures, count, numbers, strings, NaN, Number constructor
---

>Declare a function 'numCount', which takes in a single number as an argument and returns another function. The returned function takes a string as an argument, and when invoked, it will search that string for the number initially passed in to the 'numCount' function, and return the number of occurrences.
>Once complete, write some code to test your 'numCount' function.

## One solution

One thing to note here is that the persistent memory in this case is not `count`, the variable that keeps track of how many numbers are present, but the argument for `num`, the parameter that is passed in.  Basically, `numCount` has to remember `num` so that the function `inner` can look for it each time a different string is passed to it.

```javascript
//i: number
//o: number of times number appeared in string passed into return fucnction

// declare funciton numcount which takes in a number as arg
function numCount(num){
	// return functio which takes a string as an arg
  function inner(str){
		// delcare count variable to zero
    let count = 0;
		// loop through string, char by char
    for (let i = 0; i < str.length; i++ ){
			// if char is equal to passed in number
      if (Number(str[i]) === num) {
        // increment count by 1
        count++;
      }
    }
    // return count
    return count;
  }
  return inner;
}

const test = numCount(5);
console.log(test("y5ll5")) // 2
const test2 = numCount(9);
console.log(test("afdsre")) // 0
```

