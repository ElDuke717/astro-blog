---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  import Cool from '../../components/Author.astro'
title: My First Post!
publishDate: 13 April 2022
name: Nick Huemmer
twitter: "https://twitter.com/nickhuemmer"
value: 128
description: Let's start off with some fun JavaScript!
---

<Cool name={frontmatter.name} href={frontmatter.twitter} client:load />

This is my first post, testing out this Astro platform to use as a blog template.

Do variables work {frontmatter.value * 2}?

```javascript
// Here's a fun Regex example that finds smileys in an array.

const faceArray = [";D", ":-(", ":-)", ";~)"]

const countSmileys = (arr) => 
	    arr
      .map(x=> /[;|:][-|~]?[\)|D]/gm.test(x))
      .filter(x=> x === true).length


countSmileys(faceArray) //3

```
