---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  
title:  Game of Thrones Character Titles
publishDate: 13 September 2022
name: Nick Huemmer
twitter: "https://twitter.com/nickhuemmer"
value: 128
description: 
tags: strings, map, filter,  javascript, ternary operator, regex, push, Edabit, toLowerCase, toUppercase
---


# [Game of Thrones: Character Titles](https://edabit.com/challenge/QudLBG2RvfePRMzDn)

This challenge involved regular expressions and string manipulation.  You have to capitalize all words that are not "and", "in", "the" or "of".

The trickiest part was dealing with the hypens.

>Write a function that takes a string and returns a string with the correct case for character titles in the Game of Thrones series.
>
> -  The words and, the, of and in should be lowercase.
> -  All other words should have the first character as uppercase and the rest lowercase.
>
>Examples
>
>correctTitle("jOn SnoW, kINg IN thE noRth.")
➞ "Jon Snow, King in the North."
>
>correctTitle("sansa stark, lady of winterfell.")
➞ "Sansa Stark, Lady of Winterfell."
>
>correctTitle("TYRION LANNISTER, HAND OF THE QUEEN.")
➞ "Tyrion Lannister, Hand of the Queen."
>
> ### Notes
>
>  - Punctuation and spaces must remain in their original positions.
>	-  Hyphenated words are considered separate words.
>   - Be careful with words that contain and, the, of or in.
>  - See the Resources tab for more info on the various JavaScript string methods.*

## My solution

I chose to make separate functions to process several parts of the title.  `tester` checks to see if the word is one of the words that should be lowercase.  `hyphenator` splits the word into an array of words and then processes each word with `tester`.  `noHyphenator` just processes title the same was as `hyphenator`, using `tester` but only with spaces passed into `split`.  Lastsly, the function processes the title with `hyphenator` or `noHyphenator` depending on whether or not the title contains contains a hyphen.


```javascript
function correctTitle(str) {
  // make all 'and', 'in', 'the', 'of' lowercase
  const tester = s => /^and$/gi.test(s) || /^the$/gi.test(s) || /^of$/gi.test(s) || /^in$/gi.test(s)
  // make the right words begin with uppercase if title contains hyphens
  const hyphenator = s =>
  s.split('-').map(x => tester(x) ? x.toLowerCase() : x.slice(0,1).toUpperCase() + x.slice(1).toLowerCase()).join('-').split(' ').map(x=> x.slice(0,1).toUpperCase() + x.slice(1)).join(' ')
  // make the right words begin with uppercase if title does not contain hyphens
  const noHyphenator = s => s.split(' ').map(x => tester(x) ? x.toLowerCase() : x.slice(0,1).toUpperCase() + x.slice(1).toLowerCase()).join(' ')
  
 return str.includes('-') ? hyphenator(str) : noHyphenator(str)
}

correctTitle("jOn SnoW, kINg IN thE noRth.")
// "Jon Snow, King in the North."
correctTitle("sansa stark, lady of winterfell.")
// "Sansa Stark, Lady of Winterfell."
correctTitle("TYRION LANNISTER, HAND OF THE QUEEN.")
// "Tyrion Lannister, Hand of the Queen."
correctTitle("sansa stark, lady of winterfell.") // "Sansa Stark, Lady of Winterfell.")
correctTitle("lord eddard stark, hand of the king.") // "Lord Eddard Stark, Hand of the King.""
correctTitle("jaime lannister, lord commander of the kingsguard.") // "Jaime Lannister, Lord Commander of the Kingsguard."
correctTitle("varys, master of whisperers.") // "Varys, Master of Whisperers."
correctTitle("doran martell, prince of dorne, lord of sunspear.") // "Doran Martell, Prince of Dorne, Lord of Sunspear."
correctTitle("TYRION LANNISTER, HAND OF THE QUEEN.") // "Tyrion Lannister, Hand of the Queen."
correctTitle("GRAND MAESTER PYCELLE.")
// "Grand Maester Pycelle."
correctTitle("EURON GREYJOY, KING OF THE IRON ISLANDS, LORD REAPER OF PYKE.") // "Euron Greyjoy, King of the Iron Islands, Lord Reaper of Pyke."
correctTitle("PETYR BAELISH, LORD PROTECTOR OF THE VALE.")  //"Petyr Baelish, Lord Protector of the Vale."
correctTitle("MANCE RAYDER, KING-BEYOND-THE-WALL.") 
// "Mance Rayder, King-Beyond-the-Wall.")
correctTitle("DAeneRYS StOrmboRn oF hOuse TARGARYEn, ThE FirsT OF HER naMe, QUeEn OF The ANdAlS And THe FirsT mEN, PROtECtOr Of tHE SEven KinGDOmS, The MoTHeR of DrAGONS, thE KhALeEsi oF THE GReAt gRAss sEa, The UnburNT, The BReakEr of cHAInS.") // "Daenerys Stormborn of House Targaryen, the First of Her Name, Queen of the Andals and the First Men, Protector of the Seven Kingdoms, the Mother of Dragons, the Khaleesi of the Great Grass Sea, the Unburnt, the Breaker of Chains."
```


## Other solutions

This solution pulls out all the words to not capitalize and makes them exceptions.  Then has two separate functions to `capitalize` and then to put together `correctTitle`.
```javascript
const exceptions = ['and', 'the', 'of', 'in'];

const capitalize = word => word[0].toUpperCase() + word.slice(1);

const correctTitle = str => {
	let words = str.toLowerCase().split(' ');
	return words
		.map(word => 
				 word
				 	.split('-')
				 	.map(subword => 
							 exceptions.includes(subword)? 
							 subword : capitalize(subword))
				 	.join('-'))
		.join(' ');
}
// Alissandro Manicone
```

This is a very terse solution using regex to make the rest of the word lowercase, then uses an anonymous function to handle the "and", " the", etc.
```javascript
const correctTitle = s => s.toLowerCase().replace(/(\w)(\w+)/g,
  (w,f,r) => 'and,the,of,in'.includes(w) ? w : f.toUpperCase() + r)
// xAlien95
```