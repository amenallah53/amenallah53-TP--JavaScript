"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const id = 123; // number
const cVar = {
    name: "Bob",
    age: 30,
    isAdmin: true,
    scores: [95, 88, 76]
};
console.log("C type variable:", cVar);
// create an unknown variable
const unknownVar = "Hello TypeScript";
/** Check if its string after being assigned */
if (typeof unknownVar === "string") {
    console.log(unknownVar.length);
}
else {
    console.log("Not a string");
}
//# sourceMappingURL=exercice3.js.map