---
setup: |
  import Layout from '../../layouts/BlogPost.astro'

title: JavaScript OOP - Car Rental Simulation
publishDate: 07 Feb 2023
name: Nick Huemmer
twitter: 'https://twitter.com/nickhuemmer'
value: 128
description: Create Car, Rental and Customer constructor functions that simulate a car rental situation.
tags: JavaScript,
  OOP,
  Object-Oriented-Programming,
  prototype,
  constructor functions,
---

I took a day to work through this series of problems. They are involved and the object instantiations interact, though there aren't any methods added onto any of the prototypes for any object instantiations.

This is a good set of OOP problems to work through to get a better understanding of how OOP works and how object instances can interact.

## Prompt

```javascript
/*
	Create a constructor function called "Car" with properties such as car model, 
  year, rental price per day, and a method that returns a string describing the car.

  Create another constructor function "Rental" that has a reference to a car and rental 
  dates. It should have methods to calculate the rental cost based on the number of days rented and display rental details.

  Create a constructor function "Customer" with name, rental history and a method to 
  display all rental history.
*/
```

# Here are my solutions:

```javascript
/*
Create a constructor function called "Car" with properties such as car model, year, rental price per day, and a method that returns a string describing the car.
*/

//i: model - string
//i: year - number
//i: rentRate, rental price per day, number
//o: a new Car object is instantiated, nothing is returned

//declare Car, no params
function Car(model, year, rentRate) {
  // add a prop model
  this.model = model;
  // add a prop year
  this.year = year;
  // add a prop rental price per day
  this.rentRate = rentRate;
  // add a method that returns the three props above in a template literal
  this.carDescription = function () {
    return `A ${this.year} ${this.model} costs $${this.rentRate}/day to rent. `;
  };
}

const camry = new Car('Toyota Camry', 2022, 95);
const tacoma = new Car('Toyota Tacoma', 2023, 100);
const corolla = new Car('Toyota Corolla', 2023, 75);

console.log(camry); // Car { model:"Toyota Camry", year: 1997, rentRate: 20};
console.log(camry.carDescription()); // A 2022 Toyota Camry costs $95/day to rent.

/*   
Create another constructor function "Rental" that has a reference to a car and rental dates. It should have methods to calculate the rental cost based on the number of days rented and display rental details.
*/

//i: instance of Car, Car object
//i: rental start, string representing a date
//i: rental end date, string representing a date
//o: nothing returned, creates a new Rental instance

//declare Rental, has one param, an instance of Car
function Rental(car, start, end) {
  // include conditional that tests if date is in the right format
  const dateFormat = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!dateFormat.test(start)) {
    throw new Error('Invalid start date!');
  }
  if (!dateFormat.test(end)) {
    throw new Error('Invalid end date!');
  }
  // declare startDate - which is a date object based on the string entered
  this.startDate = new Date(start);
  // declare endDate - which is a date object based on string entered
  this.endDate = new Date(end);
  // declare duration, the difference between endDate and startDate
  this.duration = (this.endDate - this.startDate) / 86400000;
  console.log(this.duration);
  // declare method rental cost, multiplies the duration times the rate
  this.rentalCost = this.duration * car.rentRate;
  // declare method details, it returns a template literal that says "A ___ costs ___ rate for duration"
  this.details = function () {
    return `A rental of a ${car.year} ${car.model} for ${this.duration} days is $${this.rentalCost}`;
  };
}

const vacation = new Rental(tacoma, '02/06/2023', '02/09/2023');
console.log(vacation);
console.log(vacation.details());
const trip = new Rental(camry, '01/23/2023', '02/03/2023');
console.log(trip);
console.log(trip.details());
const drive = new Rental(corolla, '01/02/2023', '01/04/2023');

/*  
Create a constructor function "Customer" with name, rental history and a method to display all rental history.
*/

//i: firstName - string
//i: lastName - string
//i: age - number
//i: unique identifier - string
//i: history - an array of rental instances

//o: none returned, creates a new instance of customer

//declare Customer, three params, first name, last name,  age and unique identifier, history
function Customer(first, last, age, id, history) {
  // declare variable store, an empty array that will hold objects with rental history on them
  this.store = [];
  // add a lastName prop, assigned to last name
  this.lastName = last;
  // add a firstName prop, assigned to first name
  this.firstName = first;
  // add an age prop, assigned to age
  this.age = age;
  // add a unique identifier prop
  this.uid = id;
  // add history prop, assigned to history

  // add method this.history that returns a template literal of rental history with startDate, duration and cost
  // iterate over this.history
  this.newHistory = history.map((history) => {
    return {
      start: history.startDate,
      duration: history.duration,
      cost: history.rentalCost,
    };
  });
  console.log(this.newHistory);
  //declare report, a method that iterates over the newHistory, and returns a string with history information depending on history length.
  this.report = function () {
    //declare a variable string, assigned the value of a string "This customer's history:"
    let string = `${this.firstName} ${this.lastName} rental history is: `;
    for (let i = 0; i < this.newHistory.length; i++) {
      string += `Rental on ${this.newHistory[i].start} for ${this.newHistory[i].duration} days and cost ${this.newHistory[i].cost}, `;
    }
    return string;
  };
}

const mikeJones = new Customer('Mike', 'Jones', 54, '1234', [
  vacation,
  trip,
  drive,
]);

console.log(mikeJones.report()); // Mike Jones rental history is: Rental on Mon Feb 06 2023 00:00:00 GMT-0500 (Eastern Standard Time) for 3 days and cost 300, Rental on Mon Jan 23 2023 00:00:00 GMT-0500 (Eastern Standard Time) for 11 days and cost 1045, Rental on Mon Jan 02 2023 00:00:00 GMT-0500 (Eastern Standard Time) for 2 days and cost 150,
```
