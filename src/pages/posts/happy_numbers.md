---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  
title:  Happy Numbers
publishDate: 7 Septemver 2022
name: Nick Huemmer
twitter: "https://twitter.com/nickhuemmer"
value: 128
description: Only perform an operation if Simon says!
---

# [Happy Numbers](https://edabit.com/challenge/EhGY9aaNHiCqqpnL9) 

This problem was a tough one as it involved recursion, but also a tricky condition in which to *end* the recursion. 

>Given any number, we can create a new number by adding the sums of squares of digits of that number. For example, given 203, our new number is 4 + 0 + 9 = 13. If we repeat this process, we get a sequence of numbers:
>
>203 -> 13 -> 10 -> 1 -> 1
>
>Sometimes, like with 203, the sequence reaches (and stays at) 1. Numbers like this are called happy.
>
>Not all numbers are happy. If we started with 11, the sequence would be:
>
>11 -> 2 -> 4 -> 16 -> ...
>
>This sequence will never reach 1, and so the number 11 is called unhappy.
>
>Given a positive whole number, you have to determine whether that number is happy or unhappy.


## Examples

>happy(203) ➞ true

>happy(11) ➞ false

>happy(107) ➞ false

## My solution

My solution was started with recursion, but then I ended up following the pattern of this [solution](https://stackoverflow.com/questions/49904075/happy-numbers-recursion#answer-49904470) found on StackOverFlow.

```javascript
// We initialize the function with an additional parameter - the prev array that will store values that recur
function happy(n, prev=[]) {
  //  A helper function, sumSquares, adds the square of each digit in the number passed into it.
	const sumSquares = n => [...String(n)].map(Number).reduce((a, 		c) => c * c + a, 0)
	// ss is initialized to hold the result of sumSquares(n)
  let ss = sumSquares(n)
  // if sumSquares(n) is equal to 1, then return true and end recursion.
  if (ss === 1) return true
	// if we've already seen the result of sumSquares(n), then return false
  if (prev.includes(ss)) return false
	// push the result of sumSquares onto the prev array
  prev.push(ss)
	// run the happy function again using ss (sumSquares of n) and the array prev as arguments.
  return happy(ss, prev)
}

happy(100) // true
happy(101) // false
happy(102) // false
happy(103) // true
happy(104) // false
happy(105) // false
happy(106) // false
happy(107) // false
happy(108) // false
happy(109) // true
happy(110)  // false
```

The tricky part here for me was figuring out how to make the recursive loop stop once a number is found that won't reduce down to 1 (unhappy).  The solution here was to use an array to pass the results of sumSquare(n) and hold the result to make sure that it isn't in the array already using the [`Array.prototype.includes()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) method.

## Other solutions
Here are two other solutions that I thought were interesting.

This one is concise, and uses the `if` statements to check if `n` is equal to 1 or 4, if they are, then the recursive loop is stopped since 1 is the end of the happy number search and happy numbers do not have a 4 in them.  The real nitty-gritty of the function is in the return statement that includes [`.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce), and passes in the `Math.pow` operation on each number and adds them to the sum, with zero passed as the second argument or currentValue.
```javascript
function happy(n) {
	if (n == 1) return true;
	if (n == 4) return false;
	return happy([...n.toString()]
		.reduce((sum, v) => Math.pow(Number(v), 2) + sum, 0))
}
```


Here's another good solution.  This is similar to the above in that it checks for 1 and 4. 
The end result of 1 is true and the end result of 4 is false.  Pretty different from my solution as I didn't check for 4 (I could have instead of using the prev array.)
```javascript
const sum = arr => arr.reduce((total, num) => total + num, 0);

const getDigits = num => String(num).split('').map(Number);

const happy = num => {
  if (num === 1) return true;
  if (num === 4) return false;
  return happy(sum(getDigits(num).map(digit => Math.pow(digit, 2))));
};
```