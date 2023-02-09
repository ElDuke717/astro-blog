---
setup: |
  import Layout from '../../layouts/BlogPost.astro'

title: Student Constructor - Medium OOP problem
publishDate: 08 Feb 2023
name: Nick Huemmer
twitter: 'https://twitter.com/nickhuemmer'
value: 128
description: Create the Student Constructor
tags: JavaScript, object oriented programming, OOP, codesmith, objects, constructor functions, methods, new, prototype
---

This problem has you create a constructor function with three properties and two methods on it.  It is fairly straightforward and demonstrates an implementation of a constructor function with both properties and methods added in the same function.

At the bottom of this post is an implementation of the function with the methods added on the prototype of `Student`.

>Create a Student constructor function with properties name, age, and courses. The constructor should also have a property enrolled which is set to false by default. The function should have a method enroll() that sets the enrolled property to true and a method addCourse(course) that adds a course to the courses array. Create a separate method dropCourse(course) that removes a course from the courses array.

My solution is below.  
```javascript

//i: string - name
//i: number - age
//i: array - courses
//o: new instance of Student 

// declare Student, takes three params, name (str), age(number), courses(array)
function Student(name, age, courses){
	// set this.name to name
  this.name = name;
	// this.age to age
  this.age = age;
	// this.courses to courses array
  this.courses = courses;
	// add a property enrolled, set to false
  this.enrolled = false;
	// add a method enroll
  this.enroll = function(){
    // set enrolled to true
    this.enrolled = true;
  }
	// add a method addCourse, takes one param, course
  this.addCourse = function(course){
  	// add a course to the courses array
  	this.courses.push(course)
  }
}


const reza = new Student('Reza', 13, ['math', 'biology', 'english'])

console.log(reza) // Student {
//   name: 'Reza',
//   age: 13,
//   courses: [ 'math', 'biology', 'english' ],
//   enrolled: false,
//   enroll: ƒ (),
//   addCourse: ƒ (),
// }

console.log(reza.enroll()); // undefined
console.log(reza.enrolled); //true
reza.addCourse('dancing');
console.log(reza.courses); //[ 'math', 'biology', 'english', 'dancing' ]

//i: none
//o: updated instance of student, doesn't return anything

// declare the method dropCourse on the student prototype, takes one param, a string, course
Student.prototype.dropCourse = function(course){
	// declare variable index, set to -1 initially
  let index = -1;
	// iterate over this.courses, find index of element that matches course
  for (let i = 0; i < this.courses.length; i++){
	// if course at i matches course, set value of index to i
    if (this.courses[i] === course) {
      index = i;
      console.log(index);
    }
  };
	// this.courses = this.courses.splice(index, 1)
  this.courses.splice(index,1 );
}

console.log('before', reza.courses); // 'before' [ 'math', 'biology', 'english', 'dancing' ]
reza.dropCourse('math');
console.log('after drop', reza.courses); // 'after drop' [ 'biology', 'english', 'dancing' ]
```

A more concise solution that does the same thing:

```javascript
function Student(name, age) {
    this.name = name;
    this.age = age;
    this.enrolled = false;
    this.courses = [];
}
Student.prototype.enroll = function() {
    this.enrolled = true;
};
Student.prototype.addCourse = function(course) {
    this.courses.push(course);
};
Student.prototype.dropCourse = function(course) {
    let index = this.courses.indexOf(course);
    if (index > -1) {
        this.courses.splice(index, 1);
    }
};

let student1 = new Student("Alice", 20);
student1.enroll();
console.log(student1.enrolled); // true
student1.addCourse("Math");
student1.addCourse("English");
console.log(student1.courses); // ["Math", "English"]
student1.dropCourse("Math");
console.log(student1.courses); // ["English"]

```