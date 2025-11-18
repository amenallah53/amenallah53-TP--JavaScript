"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generic function
function identity(arg) {
    return arg;
}
let output1 = identity("Generic Function");
let output2 = identity(123);
console.log(output1);
console.log(output2);
// Generic function with Type[]
function getFirst(arr) {
    return arr[0];
}
let firstString = getFirst(["apple", "banana", "cherry"]);
console.log(firstString); // Output: "apple"
let firstNumber = getFirst([1, 2, 3]);
console.log(firstNumber); // Output: 1
// Generic class
class Repository {
    // private attribute
    items = [];
    // constructor
    constructor(items) {
        this.items = items;
    }
    // methods
    // add, remove, getAll
    add(x) {
        this.items.push(x);
    }
    remove(x) {
        this.items = this.items.filter(item => item !== x);
    }
    getAll() {
        return this.items;
    }
}
let myGenericRepository = new Repository([1, 2, 3]);
myGenericRepository.add(4);
console.log(myGenericRepository.getAll()); // Output: [1, 2, 3, 4]
myGenericRepository.remove(2);
console.log(myGenericRepository.getAll()); // Output: [1, 3, 4]
let response1 = {
    data: "Success"
};
let response2 = {
    data: { id: 1, name: "Item 1" },
    error: "Not Found"
};
console.log(response1);
console.log(response2);
//# sourceMappingURL=exercice7.js.map