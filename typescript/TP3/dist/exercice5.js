"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// add function
function add(a, b) {
    return a + b;
}
const sum = add(5, 10);
console.log(`Sum: ${sum}`);
// greet function
function greet(name, age) {
    if (age) {
        console.log(`Hello, my name is ${name} and I am ${age} years old.`);
    }
    else {
        console.log(`Hello, my name is ${name}.`);
    }
}
greet("Alice", 30);
greet("Bob");
// power function
function power(base, exp = 2) {
    return Math.pow(base, exp);
}
const squared = power(5);
const cubed = power(3, 3);
console.log(`5 squared is ${squared}`);
console.log(`3 cubed is ${cubed}`);
function combine(a, b) {
    return a + b;
}
console.log(combine(5, 10)); // 15
console.log(combine("Hello, ", "world!")); // "Hello, world!"
//# sourceMappingURL=exercice5.js.map