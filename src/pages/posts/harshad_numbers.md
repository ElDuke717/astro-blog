---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  import Cool from '../../components/Author.astro'
title: Harshad Numbers
publishDate: 8 September 2022
name: Nick Huemmer
value: 128
description: More fun with numbers - Harshad numbers are positive numbers that are divisible by the sum of their digits. 
tags: algebra, math, numbers, validation, while loops, unshift, push, indexOf, String, Number
---


# [Harshad Numbers](https://edabit.com/challenge/3Wz6z3LpzSNydGaJA)

tags: algebra, math, numbers, validation, while loops, unshift, push, indexOf, String, Number

This was a good challenge that dealt with a fun numerical phenomena that also involves some tricks to get the right answer. 

The instructions:

>Harshad/Niven numbers are positive numbers that are divisible by the sum of their digits. All single-digit numbers are Harshad numbers.
>
>For example, 27 is a Harshad number as 2 + 7 = 9, and 9 is a divisor of 27.
>
>Harshad numbers can occur in consecutive clusters. The numbers 1 through 10 are Harshad numbers. The numbers 132 and 133 are both Harshad numbers. The numbers 1014, 1015, 1016, 1017 are Harshad numbers.
>
>Create a function that takes a number and returns an array of two elements. The first element is the length of the Harshad cluster of which the number is a part. The second is its order in the cluster.

## Examples

```
harshad(5) ➞ [10, 5]
// cluster = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// The second element should be the layman order in the
// cluster, not the programming index.

harshad(133) ➞ [2, 2]
// cluster = [132, 133]

harshad(82) ➞ [0, 0]
// Not a Harshad number, so cluster length is 0, position is 0.
```


## My solution

I got a bit of [help](https://stackoverflow.com/questions/60176401/finding-out-the-harshad-number#answer-60176609) from StackOverflow while trying to figure out the `while` part of this challenge.

I set-up a helper function `isHarshad` that tests each number passed into it to see if it is a Harshad number or not.  Then, an empty array is initiated to hold all the numbers that pass the Harshad number test. 

Next, two variables are made to hold the values around `n`, `lower` for all the numbers that are lower than `n` but pass the Harshad test, an `upper` for all the numbers that are higher that pass the Harshad test.  

Then a `while` loop is inititated for both the upper and lower values, adding each to the `harshads` array if they pass the test. After each loop is run, we will have an array that contains all the harshads in the cluster (if there is one).  

Lastly, we return an array that contains the length of the `harshads` array, then used the `indexOf` method to find the index of the original number `n`.

```javascript
function harshad(n) {
	// helper function to test if a number is a harshad number
	const isHarshad = n =>
	n % ([...String(n)].map(Number).reduce((a,b)=> a + b)) === 0
	// array to hold the harshad numbers
  let harshads = []
  // lower is iniated equal to n, to test n and all numbers less than in the while loop
  let lower = n 
  // upper is initiated at n + 1 and will go higher in the for loop.
  let upper = n + 1
  // while loop to test and add  numbers n and less than n
  while(isHarshad(lower)) harshads.unshift(lower--)
	// while loop to test numbers greater than n
 	while(isHarshad(upper)) harshads.push(upper++)
	// return the length and index of n
  return [harshads.length, harshads.indexOf(n) === -1 ? 0 : harshads.indexOf(n)+1 ]
}

harshad(5) //[10,5]
harshad(133) // [2,2]
harshad(82) // [0,0]
harshad(72) //[1,1]
harshad(12751223) // [6,4]
harshad(5831) // [3,1]
harshad(10309) //[4,3]
harshad(7384) // [0,0]
harshad(2584) //[1,1]
```


## Other solutions
This clever solution uses `for` loops to test the upper and lower values
```javascript
function harshad(n) {
    let arr = []
    for (let i = n; i > 0 && isHarshad(i) ; i--){
        arr.unshift(i)
    }
    for (let i = n + 1; isHarshad(i); i++) {
        arr.push(i)
    }
    return [arr.length, arr.indexOf(n) + 1]

    function isHarshad(p) {
        return p % (p.toString().split("").reduce((a, b) => a + parseInt(b), 0)) == 0
    }
}
```

This solution is concise and uses the spread operator, destructuring and other advanced techniques to get the answer.

```javascript
const harshad = n => {
  const isHarshad = n => n && !(n % eval([...n+''].join('+')))
  let [v,l,r] = [[], n, n]
  while (isHarshad(r)) v = [...v, r++]
  while (isHarshad(l)) v = [...v, l--]
  v = [...new Set(v.sort((a,b) => a-b))]
  return [v.length, v.indexOf(n)+1]
}
```
