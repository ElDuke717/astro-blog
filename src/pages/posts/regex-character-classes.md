---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  
title: Regular Expressions - Character Classes
publishDate: 19 April 2022
name: Nick Huemmer
description: Here's one way to use regular expressions (regex) to solve the problem of finding a sequence of characters in a string.
---



[Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) are patterns used to match character combinations in strings.  They are used to match or replace pattern in a string and are pretty commonly used in JavaScript and other programming languages.  They can be tricky to learn but are also very useful when used in the right place. 

Here is a simple example of a regular expression that will find all the numbers in a string.  We use the constant `REGEXP` for our regular expression and pass it into the [`match`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match) method.  The `match` method will return an array of all the matches.  We can then use the [`join`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) method to join the array back into a string.


```javascript
const one = '123ghfsd'
const two ='1therest'
const three = 'OU812'
const four = 'd1rtyr3str00m'

// \d is the regex pattern to catch all digits in a string
const REGEXP = /\d/g

const countDivs = (str) => {
  return str.match(REGEXP).length
} 

countDivs(one)  // 3
countDivs(two) // 1
countDivs(three) // 3
countDivs(four) // 4

```

[Regex 101](https://regex101.com) is a handy resource that can help you learn regular expressions and put together a regular expression to find the specific pattern you're looking for.  

This post is not enough information to completely understand regular expressions, but it does give you a good starting point.

### Another Example

Here's an Edabit problem that I recently solved that uses regular expressions:
[RegEx: Character Classes X ⁠- \W](https://edabit.com/challenge/YxsH3nB9Z5n5Tbupd)


>HTML elements are everything from the start tag to the end tag. An example of one div element would be: `<div>edabit</div>`.
Find out how many `<div>` elements are used in a string. Use the character class \W in your expression.

Examples

`const str = "<div>Hello.</div><div>My name is <b>George</b>.</div>"`
// 2 times

`const str = "<div><h1>The Word for Today</h1><div>aardvark</div></div>"`
// 2 times

`const str = "<div></div>"`
// 1 time

Returns the number of divs (they must be closed) in a string.
```javascript
const str = "<div>Hello.</div><div>My name is <b>George</b>.</div>" 

const REGEXP = /\W\/div>/g

const countDivs = (str) => {
  return str.match(REGEXP).length
} 

countDivs(str) // 2
```

## Explanation

The `countDivs` function takes in a string as an argument.  It uses the `match` method to find all the matches of the regular expression, which is written to catch all the patterns in a string that match a `<div>`.  We can then use the `length` method to get the length of the array returned by the `match` method. 

And here's a concise explanation of what the RegExp pattern is doing:
### Regex Pattern
`/\W\/div>/gm`

\W matches any non-word character (equivalent to [^a-zA-Z0-9_])

`\/` matches the character / with index 4710 (2F16 or 578) literally (case sensitive)

`div>`
 matches the characters div> literally (case sensitive)

### Global pattern flags 
`g` modifier: global. All matches (don't return after first match)

`m` modifier: multi line. Causes ^ and $ to match the begin/end of each line (not only begin/end of string)


## Another way to complete the challenge:

Plug this into the `countDivs` function:

```javascript
const REGEXP = /<div\W/g
```

This will match the first `<div>` in the pair, rather than the closing `</div>` as I did.