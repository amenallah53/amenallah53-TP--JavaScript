class Person {
    // Attributes
    name: string;
    age: number;
    // Constructor
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    // Method
    greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Student extends Person {
    // Additional attribute
    school: string;
    // Constructor
    constructor(name: string, age: number, school: string) {
        super(name, age); // Call the parent class constructor
        this.school = school;
    }
    // Overriding method
    greet(): void {
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
abstract class Shape {
    // Abstract method
    abstract area(): number;
} 

// class circle extends Shape
class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius;
    }
    // Implementing abstract method in Circle class
    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

// class rectangle extends Shape
class Rectangle extends Shape {
    width: number;
    height: number;
    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }
    // Implementing abstract method in Rectangle class
    area(): number {
        return this.width * this.height;
    }
}

// const shape = new Shape(); /** Error */
const circle = new Circle(5);
console.log(`Circle area: ${circle.area()}`);
const rectangle = new Rectangle(4, 6);
console.log(`Rectangle area: ${rectangle.area()}`);


// Drivable interface
interface Drivable {
    drive(): void;
}
// Car class implementing Drivable interface
class Car implements Drivable {
    drive(): void {
        console.log("The car is driving.");
    }
}