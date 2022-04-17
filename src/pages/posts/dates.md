---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  import Cool from '../../components/Author.astro'
title: Working with Dates in JavaScript
publishDate: 17 April 2022
name: Nick Huemmer
description: How to use dates in JavaScript
---

<Cool name={frontmatter.name} href="https://twitter.com/nickhuemmer" client:load />

I found the whole `Date` thing in JavaScript to be a bit confusing, so here's a description of how it works and a challenge involves using dates.

Per [MDN](https://developer.mozilla.org/en-US/):

>JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.

OK, so what does this look like when put into practice?

When you open your console in your browser and type `Date()`, it will return the date current time, date and timezone:

![dates in the console](/img/date_snippet.jpg)

Cool.  So now we know how to get the current date with some simple JavaScript.  But what can we do with this?

`Date` is a stand-alone built in object that isn't much use to us besides getting the current date.  In order to use dates and do some manipulation we have to start using it along with the [`new` ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) keyword as part of a constructor method.  Let's do some fun things with a birthday party date:

```javascript

let myBirthdayParty = new Date('June 8, 1985, 04:15')

console.log(myBirthdayParty) // 1985-06-08T08:15:00.000Z
```
Notice that the birthday party's date is now formatted differently and  `myBirthdayParty` is stored as an object that we can interact with.  Notice that JavaScript gives the birthday party date in [UTC](https://www.timeanddate.com/time/aboututc.html) time - it's four hours ahead of my time zone (Eastern United States).  

JavaScript has a number of date methods that can be used to pull information from the date:
```javascript
// return seconds past the hour
console.log(myBirthdayParty.getSeconds()) // 0
// return minutes past the hour
console.log(myBirthdayParty.getMinutes()) // 15
// return the hour
console.log(myBirthdayParty.getHours()) // 4
// return the UTC full year
console.log(myBirthdayParty.getUTCFullYear()) // 1985
```

As you can see, this gets really useful really fast.  Here is an example of how we can use the Date object:

## The [challenge](https://edabit.com/challenge/3hdXjfJozQySRC3gE):

Create a function that takes two dates and returns the number of days between the first and second date.

>Examples
>
>getDays(
  new Date("June 14, 2019"),
  new Date("June 20, 2019")
) ➞ 6


>getDays(
  new Date("December 29, 2018"),
  new Date("January 1, 2019")
) ➞ 3
// Dates may not all be in the same month/year.


>getDays(
  new Date("July 20, 2019"),
  new Date("July 30, 2019")
) ➞ 10

```javascript
const firstDate = new Date('July 20, 2019') 
const secondDate = new Date('July 20, 2022')

function getDays(date1, date2) {
	return Math.abs(date2 - date1)/86400000
 }

getDays(firstDate, secondDate) // 1096
```
This is pretty simple and straightforward - we wrote a function `getDays` that subtracts one date from the other.  Notice that the dates both use the `new Date` constructor so both dates will be formatted so that JavaScript can use them.  After subtracting one date from another, we use the `Math.abs()` method to make sure that the number is an absolute value (not negative) in case we get the date's chronology mixed up.  Next, we divide the difference by 86400000, the number of milliseconds in a day.  This is because JavaScript actually thinks of time in terms of milliseconds.

There are 1096 days between July 20th 2019 and July 20th 2022 (365days/year * 3years ~ 1096 days).  We did it right!

We can also write it as an arrow function:
```javascript

const firstDate = new Date('July 10, 2022') 
const secondDate = new Date('July 20, 2022')

const getDays = (date1, date2) => 
	Math.abs(date2 - date1)/86400000


getDays(firstDate, secondDate) // 10

```

Some key things to remember when using dates in JavaScript:

1. JavaScript thinks of time in milliseconds, ticking up from January 1, 1970.  You will likely have to convert from milliseconds in an operation that uses dates at some point (there are 86400000 milliseconds in a day).
```
Date.now() //1650220381307
```
2. JavaScript uses Universal Time under the hood.  See the birthday party example above.
3. Use the `new Date` constructor when you want to calculate dates.