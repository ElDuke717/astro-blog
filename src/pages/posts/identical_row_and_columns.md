---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  
title: Identical Row and Column?
publishDate: 22 September 2022
name: Nick Huemmer
twitter: "https://twitter.com/nickhuemmer"
value: 128
description: Are any of the columns identical to any of the rows in a 2D matrix?
tags: arrays, for ... loop, javascript, push, strings JSON.stringify, Edabit, nested loops, matrices, compare arrays
---

# [Identical Row and Column?](https://edabit.com/challenge/MXbibjS95Y8X4wDZx)

This was an interesting one and really provided a chance to test nested loops and ways to compare arrays.  

My solution is rather long and verbose compared to the top solutions.  But it was a great learning opportunity exercise in looping!

The challenge:

> Write a function that returns true if there exists a row that is
> identical to a column in a 2-D matrix, otherwise false.
> 
> To illustrate:
> 
> [   [1, 2, 3, 4],   [2, 4, 9, 8],   [5, 9, 7, 7],   [6, 8, 1, 0] ]
> 
> // 2nd row + 2nd column are identical: [2, 4, 9, 8]
> 
> Examples
> 
> hasIdentical([   [4, 4, 4, 4],   [2, 4, 9, 8],   [5, 4, 7, 7],   [6,
> 4, 1, 0] ]) ➞ true
> 
> hasIdentical([   [4, 4, 9, 4],   [2, 1, 9, 8],   [5, 4, 7, 7],   [6,
> 4, 1, 0] ]) ➞ false
> 
> hasIdentical([   [4, 4]   [2, 1] ]) ➞ false
> 
> hasIdentical([   [4, 2]   [2, 1] ]) ➞ true
> 

## My Solution
```javascript
function hasIdentical(arr) {
	//check to make sure it's a 2D array
  function checker(arr) {
    let checks = []
    const avgs = arr.map(x=> checks.push(x.length))
    return checks.reduce((a,c)=> a + c )/arr.length === arr.length
  }
	if (!checker(arr)) return false
  // tArr is the flattened, transposed array gotten from the double loop iterating over each array
  let tArr = []
  for (let i=0; i<arr.length; i++) {
    for (let j=0; j<arr[0].length; j++) {
      tArr.push(arr[j][i])
    }
  }
  // sArr is the tArr array split into the same lengths as the arrays in arr.
  let sArr = []
  for (let k=0; k<tArr.length; k+=arr.length) {
    sArr.push(tArr.slice(k, k+arr.length))
  }
  //compareArrays takes two arrays and compares them to see if they are equal.
  const compareArrays = (a, b) => 
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
  //initiate array to hold tests from compareArrays of arr and sArr arrays
	let tests = []
  // nested loop that allows each array to be tested against each other.
	for (let i=0; i<arr.length; i++) {
    for (let j=0; j<arr[0].length; j++) {
	tests.push(compareArrays(arr[i], sArr[j]))
    }
	}
  //if any results are true from the nested loop and compareArrays, then return true.
	return tests.some(x=> x)
}

hasIdentical([
  [4, 4, 4, 4],
  [2, 4, 9, 8],
  [5, 4, 7, 7],
  [6, 4, 1, 0]
]) // true

hasIdentical([
  [4, 4, 9, 4],
  [2, 1, 9, 8],
  [5, 4, 7, 7],
  [6, 4, 1, 0]
]) // false


hasIdentical([
  [4, 4],
  [2, 1]
]) //➞ false

hasIdentical([
	[4, 2, 4, 6, 1], 
	[2, 4, 9, 4, 5], 
	[5, 1, 7, 1, 9], 
	[6, 4, 1, 0, 33], 
	[5, 5, 5, 33, 5]
]) // true

hasIdentical([
	[4, 4, 4],
	[2, 1, 4]
]) // false

hasIdentical([
	[4, 4, 4]
]) // false
```


## Other solutions:

This solution uses the JSON.stringify method in separate row and column functions to parse out the elements in the rows and columns of the matrix.  The elements are then compared against each other.  Notice how complexity is eliminated by converting the arrays from the columns and rows to strings.

```javascript
function hasIdentical(arr) {
	const row = r => JSON.stringify(arr[r]);
	const col = c => JSON.stringify(arr.map(r => r[c]));
	for (let r in arr) {
		for (let c in arr) {
			if (row(r) === col(c)) { return true; }
		}
	}
	return false;
}
//mbbentley
```

This solution is similar to the above, but it uses `Object.keys` to solve it.

```javascript
const hasIdentical = arr => {
	const reversedArr = Object.keys(arr[0]).map(c => arr.map(r =>r[c]));
	return arr.some(r => reversedArr.some(c => String(c) === String(r)));
}
//Alessandro Manicone
```


Here, a function called `getColumn` is defined and used to make an array using `Array.from` to pass in and get strings of the values in the matrix columns.  The strings from the rows are then compared with the strings from the columns.
```javascript
const getColumn = (arr, x) =>
  Array.from({ length: arr.length }, (_, y) => arr[y][x]);

const hasIdentical = arr => {
  const rows = arr.map(JSON.stringify);
  const cols = Array.from({ length: arr.length }, (_, x) =>
    JSON.stringify(getColumn(arr, x))
  );

  return cols.some(col => rows.includes(col));
};
//Pustur
```