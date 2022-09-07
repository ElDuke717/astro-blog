---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  
title: Simon Says
publishDate: 6 September 2022
name: Nick Huemmer
twitter: "https://twitter.com/nickhuemmer"
value: 128
description: Only perform an operation if Simon says!
tags: arrays, map, filter, eval, javascript
---


# [Simon Says](https://edabit.com/challenge/DxAhwhR3cxiHK9E4d)

This problem was considered __very hard__ by Edabit.  

>Simon asks you to perform operations on an array of numbers that only he tells you. You should ignore all other instructions given. Create a function which evaluates an array of commands (written in plain English) if the command begins with Simon says. Return the result as an integer.

>Examples
```
simonSays([
  "Simon says add 4",
  "Simon says add 6",
  "Then add 5"
]) ➞ 10

simonSays([
  "Susan says add 10",
  "Simon says add 3",
  "Simon says multiply by 8"
]) ➞ 24

simonSays([
  "Firstly, add 4",
  "Simeon says subtract 100"
]) ➞ 0
```
## My solution:
```javascript
function simonSays(arr) {
  // initiate result at 0
	let result = 0
  // filter out all phrases without Simon says
	arr = arr.filter(x => x.match(/^simon says/gmi)).map(x=> x.slice(11)).map(x=> x.split(' ')).map(x=> x.filter(y => y !== 'by'))
	// process each item to isolate operation from word and number
	const process = arr => arr.map(x => x === 'add' ? '+' : x === 'subtract' ? '-' : x === 'multiply' ? '*' : x)
  // Make a phrase with operation and number
	const operations = arr.map(y=> process(y).join(' '))
	// Loop over all operations and evaluating with result.
  for (let i=0; i<operations.length; i++) {
    result = eval(`${result}${operations[i]}`)
  }
  return result
}

simonSays([
	"Simon says add 4",
	"Simon says add 6",
	"Then add 5"
]) // 10


simonSays(["Simeon says subtract 27", "Next, add 31", "Firstly, subtract 16", "Sieon says add 5", "Firstly, multiply by 49", "Firstly, add 20", "Now multiply by 11", "Simon says add 43", "Simon says add 48", "Simeon says multiply by 9", "Sieon says subtract 50", "Now multiply by 14", "Firstly, subtract 14", "Then multiply by 27", "Sieon says multiply by 23", "Simon says subtract 33", "Simon says multiply by 45", "Firstly, subtract 25"]) // 2610
```

## Other solutions

```javascript
function simonSays(arr) {
	let ans = 0;
	for (let say of arr) {
		const n = +say.match(/\d+/)[0];
		if (say.startsWith("Simon says add"))         ans += n;
		if (say.startsWith("Simon says subtract"))    ans -= n;
		if (say.startsWith("Simon says multiply by")) ans *= n;
	}
	return ans;
}
```

```javascript
function simonSays(arr) {
	return (arr.join("").match(/(?<=(Simon says ))(\w+ (by )?\d+)/g)||[])
		.reduce((t,c)=> {
			let [step, value] = c.split(/ by | /)
			if(step=="add") return t+Number(value)
			if(step=="multiply") return t*Number(value)
			if(step=="subtract") return t-Number(value)
			return t
		},0)
}
```