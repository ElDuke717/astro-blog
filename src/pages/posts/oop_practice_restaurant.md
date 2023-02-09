---
setup: |
  import Layout from '../../layouts/BlogPost.astro'

title: Restaurant Medium OOP problem with constructor functions Blog Post
publishDate: 09 Feb 2023
name: Nick Huemmer
twitter: 'https://twitter.com/nickhuemmer'
value: 128
description: Create a Restaurant Constructor
tags: JavaScript, object oriented programming, OOP, codesmith, objects, constructor functions, methods, new, prototype
---

This is another "not-too-difficult" OOP problem to help you learn the syntax and work on your technical communication (try to solve it out loud!).  I had fun using it to imagine a McDonald's in Scottsdale, Arizona that decides to testMcNuggets on their menu.

>Create a Restaurant constructor function with properties name, location, and menu. The constructor should also have a property rating which is set to null by default. The function should have a method addDish(dish) that adds a dish to the menu object with a property of the dish name and value of the dish price. Create a separate method removeDish(dish) that removes a dish from the menu object. Create a method updateRating(newRating) that updates the rating property.

## My solution

```javascript

//i: name - string
//i: location - string
//i: menu - object
//o: instance of the the Restaurant object

// declare Restaurant, takes three params, name(string), location(string), menu(object)
function Restaurant(name, location, menu){
	// set this.name to name
  this.name = name;
	// set this.location to location
  this.location = location;
	// set this.menu to menu (most likely empty to start);
  this.menu = menu;
  // add a rating property, initially set to null
  this.rating = null;
	// add prop this.addDish set to a function that takes one param, dish, an array two elements
  this.addDish = function(dish){
		// the first element is the dish name
    this.menu[dish[0]] = dish[1];
		// the second element is the dish price
  }
}

const mcdonalds = new Restaurant('McDonald\'s', 'ScottsDale, AZ', {fries: 3.99});

// Restaurant {
//   name: "McDonald's",
//   location: 'ScottsDale, AZ',
//   menu: { fries: 3.99 },
//   rating: null,
//   addDish: ƒ (),
// }

console.log(mcdonalds); // Restaurant {name: "McDonald's", location: 'Scotsdale, AZ', menu: {fries: 3.99}};

console.log(mcdonalds.addDish(['hamburger', 5.99])); // undefined

console.log(mcdonalds); // updated menu on mcdonalds

mcdonalds.addDish(['mcnuggets', 2.99]);

//i: dish - a string
//o: none (updates the Restaurant object)

// declare removeDish, takes one param, a string
Restaurant.prototype.removeDish = function(dish){
	// iterate over this (restaurant instance) menu prop (object) and if key matches dish, delete this[key]
  for (const key in this.menu) {
    if (key === dish) {
      delete this.menu[key];
    }
  }
}

console.log('three items on menu', mcdonalds.menu); //'three items on menu' { fries: 3.99, hamburger: 5.99, mcnuggets: 2.99 }

mcdonalds.removeDish('mcnuggets');

console.log('after nugget removal', mcdonalds.menu); //'after nugget removal' { fries: 3.99, hamburger: 5.99 }

//i: number, newRating
//o: nothing, updates the rating prop on the Restaurant instance

// declare updateRating with one param, newRating, a number
Restaurant.prototype.updateRating = function(newRating){
	// set the rating property on this to newRating
  this.rating = newRating;
}

console.log('before new rating', mcdonalds.rating); //'before new rating' null

mcdonalds.updateRating(10);

console.log('after new rating', mcdonalds.rating); // 'after new rating' 10

```

## Another solution - this without all of my pseudocode and other text

```javascript
function Restaurant(name, location) {
    this.name = name;
    this.location = location;
    this.rating = null;
    this.menu = {};
}
Restaurant.prototype.addDish = function(dish, price) {
    this.menu[dish] = price;
};
Restaurant.prototype.removeDish = function(dish) {
    delete this.menu[dish];
};
Restaurant.prototype.updateRating = function(newRating) {
    this.rating = newRating;
};

let restaurant1 = new Restaurant("Italian Bistro", "New York");
restaurant1.addDish("Spaghetti", 15);
restaurant1.addDish("Pizza", 20);
console.log(restaurant1.menu); // { Spaghetti: 15, Pizza: 20 }
restaurant1.removeDish("Spaghetti");
console.log(restaurant1.menu); // { Pizza: 20 }
restaurant1.updateRating(4);
console.log(restaurant1.rating); // 4

```
