---
setup: |
  import Layout from '../../layouts/BlogPost.astro'

title: RegEx Character Classes XII ⁠
publishDate: 20 May 2022
name: Nick Huemmer
description: A tab and space challenge with Regex?
---


Hello, 
I haven't posted in awhile.  I've been busy learning Next.js and more about the FullStack.  I have many more posts coming up, I just need to take the time to write them up.  Such is keeping up with a blog.

Here's a Regex Challenge
[RegEx: Character Classes XII ](https://edabit.com/challenge/w2abzEMHE7SFLQzDq)

Match the tab followed by the space in:
```javascript
const str = `What	
about	
me?	 `

const REGEXP = /\t /g
```

You have to match the tab and the space at the end of the string.  You do that by using the \t to capture the tab, then add a space so that it captures the space, too.  In this challenge, you're not able to use \s (for any white space), as it captures the tabs after "what" and "about".

The challenge won't let you use this pattern:
```javascript
/\s\h/g
```
Even though it will work.