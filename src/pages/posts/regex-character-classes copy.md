---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  import Cool from '../../components/Author.astro'
title: Working with Numbers and Arrays - Pandigital Numbers 
publishDate: 1 May 2022
name: Nick Huemmer
description: Does this number have all of the digits 0-9?
---

<Cool name={frontmatter.name} href="https://twitter.com/nickhuemmer" client:load />

This was an interesting challenge that involves converting a multi-digit number to an array, then using array methods, the spread operator and the [`new Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) constructor to determine if the array contains all of the digits 0-9.

A [`set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#description)in JavaScript is a collection of unique values.  If you were to have an array of numbers, for example `[1,2,3,4,4,5,6]`, it would not be considered a `set` unless the extra  `4` were removed.  

There's a way we can remove extra repeated values using the `new Set` constructor.  Here's an example:

```javascript
const array = [1,2,3,4,4,5,6]

new Set(array);
// Set(6) {
  1,
  2,
  3,
  4,
  5,
  6,
  __proto__: { // some methods in here  }
}
```

So, if we use the `new Set` constructor to create a set from the array, then we get an array that just has one of each unique value  - in this case just one of each number.  The extra four is removed.

Now, we can take this knowledge and a little know how of JavaScript and  array methods and use it to solve this problem.

[Pandigital numbers](https://edabit.com/challenge/NXTrfGBXTKg3Z9jkz)
>A pandigital number contains all digits (0-9) at least once. Write a function that takes an integer, returning true if the integer is pandigital, and false otherwise.
>
>
>Examples
>
>isPandigital(98140723568910) ➞ true
>
>isPandigital(90864523148909) ➞ false
>// 7 is missing.
>
>isPandigital(112233445566778899) ➞ false
> // 0 is missing

One approach:

```javascript
const num1 = 84847473937
const num2 = 546732965015
const num3 = 6781235184590
const num4 = 9432821089765
const num5 = 629764
const num6 = 90864523148909

function isPandigital(num) {
  // convert the number to a string, separate all the numbers in an array, 
  // convert each to a number then sort them in ascending order
  const numbers = [...String(num)].map( x => +x).sort((p,c) => p-c)
  // take the array of numbers from above and  remove the repeated values, 
  // then join them togeher to make a string.  
  // Check to see if the string contains all of the digits 0-9
  return [...new Set(numbers)].join('') === '0123456789' 
}

isPandigital(num1) //false
isPandigital(num2) //false
isPandigital(num3) //true
isPandigital(num4) //true
isPandigital(num5) //false
isPandigital(num6) //false
```

Our solution above is pretty straightforward, once you know what's going on.  First, we convert the number to a string, then we use one of the handy uses of the the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)  to separate all the digits into an array.  After than, we use [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) to convert each stringified number from a string back to an number by applying the [unary opertator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus#description).  

Then we use the [sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) method to sort the array in ascending order by passing in a subtraction function to the method.  

The `new Set` constructor is a handy way to remove repeated values as shown above and here we put it to use by passing the `numbers` array into it.   This gives us an array that only has one of each unique value.  

Finally, we use the [join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) method to join the array of numbers into a string.  We then check to see if the string contains all of the digits 0-9 by comparing it with the string `'0123456789'`.  If it does, then we return `true`, otherwise we return `false`.

Here are some other solutions written by others that are more concise.

This solution uses applies the `new Set` constructor to the converted number which is then split.  Lastly, it checks to see if the size is equal to 10.  Since the `new Set` constructor removes repeated values, the size of the array will be 10 if the number is pandigital.

```javascript
function isPandigital(num) {
	return new Set(num.toString().split('')).size===10
}
```
This solution uses regex to determine if all numbers 0-9 are included individually.  `new Set` is not used since regex is used for finding the individual digits.

```javascript
function isPandigital(num) {
	var a = (''+num).split('').sort((a,b)=>a-b).join('');
	return /^0+1+2+3+4+5+6+7+8+9+$/.test(a);
}
```

This solution is the most concise, and makes use of `new Set`.
```javascript
const isPandigital = n => new Set(n+'').size > 9