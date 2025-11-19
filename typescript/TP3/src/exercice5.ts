// add function
function add(a: number, b: number): number {
    return a + b;
}
const sum = add(5, 10);
console.log(`Sum: ${sum}`);

// greet function
function greet(name: string, age?: number) : void {
    if (age) {
        console.log(`Hello, my name is ${name} and I am ${age} years old.`);
    } else {
        console.log(`Hello, my name is ${name}.`);
    }
}
greet("Alice", 30);
greet("Bob");

// power function
function power(base: number, exp: number = 2): number {
    return Math.pow(base, exp);
}
const squared = power(5);
const cubed = power(3, 3);
console.log(`5 squared is ${squared}`);
console.log(`3 cubed is ${cubed}`);

// overload function (surcharge) 
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
    return a + b;
}

console.log(combine(5, 10)); // 15
console.log(combine("Hello, ", "world!")); // "Hello, world!"