---
setup: |
  import Layout from '../../layouts/BlogPost.astro'

title: Leetcode 36 - Valid Sudoku
publishDate: 02 Feb 2023
name: Nick Huemmer
twitter: 'https://twitter.com/nickhuemmer'
value: 128
description: A solution for Leetcode Problem 36.
tags: JavaScript, leetcode, loops, numbers, strings, arrays, nested loops
---

# 36. [Valid Sudoku](https://leetcode.com/problems/valid-sudoku/)

This is a really complicated one that I didn't really attempt on my own as it was a bit daunting at first.

Here's a solution with an explanation of how it was completed:

```javascript
/*
ChatGPT Solution

In this implementation, the isValidSudoku function checks the validity of a 9x9 sudoku board 
by checking each row, column, and 3x3 sub-box. For each row and column, a set is used to store 
the numbers that have already appeared, and for each sub-box, a helper function checkSubBox 
is used to check if all the numbers in the sub-box are unique. If any of the checks fails, the
 function returns false. If all the checks pass, the function returns true.

The time complexity of this solution is O(n^2), where n is the size of the board (9 in this 
    case). This is because the solution checks each row, column, and sub-box, and each check 
    takes O(n) time. The space complexity of this solution is O(n), because it uses sets to 
    store the numbers that have already appeared in each row, column, and sub-box, and each 
    set takes O(n) space.

*/

function isValidSudoku(board) {
  // Helper function to check if a sub-box is valid
  // this function iterates through all the rows and columns of each subbox and checks to see
  // if a number is already present. It loops over each row and column passed into it by running
  // a nested loop and limiting i to 0 and 3 and j in the same way.  This way, it's able to check
  // all the elements in a box within the 3 x 3 grid that each contain 9 elements.
  function checkSubBox(row, col) {
    const subBox = new Set();
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const r = row + i;
        const c = col + j;
        const num = board[r][c];
        if (num === '.') continue;
        if (subBox.has(num)) return false;
        subBox.add(num);
      }
    }
    return true;
  }

  // Check each row
  // checks each row for repeated values
  for (let i = 0; i < 9; i++) {
    const row = new Set();
    for (let j = 0; j < 9; j++) {
      const num = board[i][j];
      if (num === '.') continue;
      if (row.has(num)) return false;
      row.add(num);
    }
  }

  // Check each column - same scheme as checking the rows, but in this case i and j are reversed
  // so that the columns are iterated over.
  for (let j = 0; j < 9; j++) {
    const col = new Set();
    for (let i = 0; i < 9; i++) {
      const num = board[i][j];
      if (num === '.') continue;
      if (col.has(num)) return false;
      col.add(num);
    }
  }

  // Check each sub-box - declared above and invoked here, after nested for loops and columns
  // have been run.
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      if (!checkSubBox(i, j)) return false;
    }
  }

  return true;
}

console.log(
  isValidSudoku([
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
); // true
```
