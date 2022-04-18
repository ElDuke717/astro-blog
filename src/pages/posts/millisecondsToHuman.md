---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  import Cool from '../../components/Author.astro'
title: Milliseconds to Human Readable Time
publishDate: 18 April 2022
name: Nick Huemmer
description: Convert milliseconds to human readable time with JavaScript
---

<Cool name={frontmatter.name} href="https://twitter.com/nickhuemmer" client:load />

Building on working with dates, here's a bit of code that I came across that I thought was interesting and useful.

This builds on the [Working with Dates in JavaScript](https://nickhuemmer.com/posts/dates/) post that I wrote previously, but this doesn't use the JavaScript Date object.  It does, however, use milliseconds as it's base unit of time and is a handy tool if you ever have to work with milliseconds. 


```javascript
function millisecondsToHuman(ms) {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor(ms / 1000 / 60 / 60);

    const humanized = [
      pad(hours.toString(), 2),
      pad(minutes.toString(), 2),
      pad(seconds.toString(), 2),
    ].join(':');

    return humanized;
  }

function pad(numberString, size) {
    let padded = numberString;
    while (padded.length < size) padded = `0${padded}`;
    return padded;
  }

millisecondsToHuman(21600000) // '06:00:00' six hours
millisecondsToHuman(86400000) // '24:00:00' hours or one day
millisecondsToHuman(172800000) // '48:00:00' forty eight hours


```

What's going on here?  The first function, `millisecondsToHuman` is responsible for parsing out the seconds, minutes and hours of a given amount of milliseconds we pass into the function.  The constants  `seconds`, `minutes` and `hours` are all variables set by dividing the provided milliseconds (`ms`) into different units by using the appropriate arithmetic to determine each number.  [`Math.floor`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) is used to round each number down to the nearest integer.  The const `humanized` then is set to an array that consists of the numbers `seconds`, `minutes` and `hours`  constants converted to strings and padded with a zero where needed by the second function, `pad`.  

`pad`  is applied to each number in the `humanized` array.  It takes two arguments, a string `numberString` and a number `size`.  JavaScript's [`toString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) method is applied to each number passed into `pad` and then `pad` will take `numberStrings` and convert them to a two digit timer format, e.g. if `6` is passed in, it will return `06` or "pad" it with a zero. Two digit numbers like `10` are unaltered.  `pad` can only handle numbers two digits long or less, and that's all it will see because it's being used exclusively by `millisecondsToHuman` for the `humanized` array.

I found this function in the book [Fullstack React The Complete Guide to ReactJS and Friends](https://www.newline.co/fullstack-react/).  You should check it out if you're interested in learning more about how to build a website with React.