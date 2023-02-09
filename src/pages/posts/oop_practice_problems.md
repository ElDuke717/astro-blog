---
setup: |
  import Layout from '../../layouts/BlogPost.astro'

title: JavaScript OOP Practice Problems
publishDate: 08 Feb 2023
name: Nick Huemmer
twitter: 'https://twitter.com/nickhuemmer'
value: 128
description: Some problems you can use to practice Javascript Object-Oriented Programming
tags: JavaScript, object oriented programming, OOP, codesmith, objects, constructor functions, methods, new, prototype
---

Hello fellow aspiring JavaScript master!

Here are some JavaScript Object Oriented Programming practice problems that I put together to train myself for the [Codesmith](https://www.codesmith.io/) Technical Interview.  They are not the most difficult as I think it's more beneficial to work through less challenging problems to get used to the syntax and structure of a programming paradigm before attempting more challenging problems.  These problems also you an opportunity to work on your technical communication.

I've only posted the prompts here for your benefit.  I've posted my solutions elsewhere since I think:	
1.  my solution may be more than you want or need to read
2.  you can come up with a better solution than mine, so you won't need to look at my solution!

At any rate, I have the solution linked in case you want to see how I handled the problem.

If you come up with a better solution, send it to me!  We learn more together.

Since the `Class` syntax is ["syntactic sugar"](https://stackoverflow.com/questions/50835572/what-is-syntactic-sugar-in-javascript) for JavaScript constructor functions, I've stuck with probems that stictly use the constructor syntax.

Note that these problems often call for methods to be added, but don't necessarily specify if they should be added to the constructor function itself or if they should be added to the prototype.  I recommend that you try both - add the method directly to the constructor function, and then add maybe the last one or two on the `prototype`.  Solving the problems this way will help you get your mind around 

## Problem 1 - Student 

>Create a Student constructor function with properties name, age, and courses. The constructor should also have a property enrolled which is set to false by default. 
>
>The function should have a method enroll() that sets the enrolled property to true and a method addCourse(course) that adds a course to the courses array. 
>
>Create a separate method dropCourse(course) that removes a course from the courses array.

[My solution ](https://nickhuemmer.com/posts/oop_practice_student/)

## Problem 2 - Restaurant

>Create a Restaurant constructor function with properties name, location, and menu. The constructor should also have a property rating which is set to null by default. 
>
>The function should have a method addDish(dish) that adds a dish to the menu object with a property of the dish name and value of the dish price. 
>
>Create a separate method removeDish(dish) that removes a dish from the menu object. Create a method updateRating(newRating) that updates the rating property.

[My solution]()


## Problem 3 - Movie

>Create a Movie constructor function with properties title, director, and actors. The constructor should also have a property watched which is set to false by default. The function should have a method watch() that sets the watched property to true and a method unwatch() that sets the watched property to false. 
>
>Create a separate method getSummary() that returns a string in the format "The movie [title] was directed by [director] and starred [actors]. It has been [watched/not watched]."

[My solution]()

## Problem 4 - Car Rental

This problem is a bit unique - instead of adding methods to the `Car` prototype, it involves creating several different constructor functions that will create object instances that will interact with each other.

>Create a constructor function called "Car" with properties such as car model, year, rental price per day, and a method that returns a string describing the car.
>
>Create another constructor function "Rental" that has a reference to a car and rental dates. It should have methods to calculate the rental cost based on the number of days rented and display rental details.
>
>Create a constructor function "Customer" with name, rental history and a method to display all rental history.

[My solution](https://nickhuemmer.com/posts/oop3-car_rental/)


## Problem 5 - Stack

This problem is similar to another one that is floating aroud.  It's written a bit differently, but follows a similar pattern.  

>    Declare a function Stack, which takes in an array as an argument and returns an instance of a Stack object when invoked with the new keyword. 
>    
> The Stack object should have the following methods:
>
 > - push(element): Adds an element to the top of the stack
 > - pop(): Removes and returns the top element of the stack
 > - peek(): Returns the top element of the stack without removing it
 > - isEmpty(): Returns true if the stack is empty, false otherwise
 > - size(): Returns the number of elements in the stack.

[My solution]()