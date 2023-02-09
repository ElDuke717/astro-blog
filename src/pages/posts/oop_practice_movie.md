---
setup: |
  import Layout from '../../layouts/BlogPost.astro'

title: Movie Constructor - OOP problem
publishDate: 09 Feb 2023
name: Nick Huemmer
twitter: 'https://twitter.com/nickhuemmer'
value: 128
description: Create a movie constructor function!
tags: JavaScript, object oriented programming, OOP, codesmith, objects, constructor functions, methods, new, prototype
---

## The Problem

>Create a Movie constructor function with properties title, director, and actors. The constructor should also have a property watched which is set to false by default. The function should have a method watch() that sets the watched property to true and a method unwatch() that sets the watched property to false. Create a separate method getSummary() that returns a string in the format "The movie [title] was directed by [director] and starred [actors]. It has been [watched/not watched]."

## My solution

```javascript

//i: title, string
//i: director, string
//i: actors, array
//o: none, except of a new instance of Movie

// declare Movie, takes three params, title(string), director(string), actors(array)
function Movie(title, director, actors){
	// set title prop on this to title
  this.title = title;
	// set director prop on this to director
  this.director = director;
	// set actors prop to actors
  this.actors = actors;
	// add prop watched, set to false by default
  this.watched = false;
	// add method watch, takes no params, sets watched to true
  this.watch = function(){ this.watched = true };
	// add method unwatch, no params, sets watch to false
  this.unwatch = function() { this.watched = false };
}

const idiocracy = new Movie('Idiocracy', 'Mike Judge', ['Maya Rudolph', 'Dax Shepard', 'Luke Wilson']);

console.log(idiocracy);

// Movie {
//   title: 'Idiocracy',
//   director: 'Mike Judge',
//   actors: [ 'Maya Rudolph', 'Dax Shepard', 'Luke Wilson' ],
//   watched: false,
//   watch: ƒ (),
//   unwatch: ƒ (),
// }

idiocracy.watch();
console.log(idiocracy.watched); // true

/*
Create a separate method getSummary() that returns a string in the format "The movie [title] was directed by [director] and starred [actors]. It has been [watched/not watched]."
*/

//i: none
//o: string - "The movie [title] was directed by [director] and starred [actors]. It has been [watched/not watched]."


//declare getSummary on the Movie prototype, takes no params
Movie.prototype.getSummary = function() {
	// declare variable cast, which will be a string of all actors together, set to an empty string initially
  let cast = '';
  // declare variable seen, set to seen if this.watched is true, not been seen if this.watched is false
  let seen = this.watched ? 'seen' : 'unwatched';
	// iterate over actors and each actor to a a string through concatentation
  for (let i = 0; i < this.actors.length; i++){
  	cast = cast + ' ' + this.actors[i] + ',';
  }
	// return the interpolated string "The movie [title] was directed by [director] and starred [actors]. It has been [watched/not watched]." with values passed in
  return `The movie ${this.title} was directed by ${this.director} and starred ${cast}. It has been ${seen}.`
}

console.log(idiocracy.getSummary()); //'The movie Idiocracy was directed by Mike Judge and starred  Maya Rudolph, Dax Shepard, Luke Wilson,. It has been seen.'
```


## Another solution

```javascript
function Movie(title, director, actors) {
    this.title = title;
    this.director = director;
    this.actors = actors;
    this.watched = false;
}
Movie.prototype.watch = function() {
    this.watched = true;
};
Movie.prototype.unwatch = function() {
    this.watched = false;
};
Movie.prototype.getSummary = function() {
    let watchState = this.watched ? "watched" : "not watched";
    return `The movie ${this.title} was directed by ${this.director} and starred ${this.actors}. It has been ${watchState}.`;
};

let movie1 = new Movie("The Shawshank Redemption", "Frank Darabont", "Tim Robbins, Morgan Freeman");
console.log(movie1.getSummary()); // "The movie The Shawshank Redemption was directed by Frank Darabont and starred Tim Robbins, Morgan Freeman. It has been not watched."
movie1.watch();
console.log(movie1.getSummary()); // "The movie The Shawshank Redemption was directed

```