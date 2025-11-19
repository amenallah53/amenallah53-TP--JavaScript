"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    // Attributes
    name;
    age;
    // Constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Method
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
class Student extends Person {
    // Additional attribute
    school;
    // Constructor
    constructor(name, age, school) {
        super(name, age); // Call the parent class constructor
        this.school = school;
    }
    // Overriding method
    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old and I study at ${this.school}.`);
    }
}
// create Person object
const person1 = new Person("Alice", 30);
person1.greet();
// create Student object
const student1 = new Student("Bob", 20, "Faculty of Science");
student1.greet();
// abstract class
class Shape {
}
// class circle extends Shape
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    // Implementing abstract method in Circle class
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
// class rectangle extends Shape
class Rectangle extends Shape {
    width;
    height;
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    // Implementing abstract method in Rectangle class
    area() {
        return this.width * this.height;
    }
}
// const shape = new Shape(); /** Error */
const circle = new Circle(5);
console.log(`Circle area: ${circle.area()}`);
const rectangle = new Rectangle(4, 6);
console.log(`Rectangle area: ${rectangle.area()}`);
// Car class implementing Drivable interface
class Car {
    drive() {
        console.log("The car is driving.");
    }
}
//# sourceMappingURL=exercice6.js.map