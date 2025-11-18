// id of number or string
type typeId = number | string;
const id: typeId = 123; // number

// type A & B Examples
type A = {
    name: string;
    age: number;
};
type B = {
    isAdmin: boolean;
    scores: number[];
};
// intersection of types A & B
type C = A & B; 
const cVar: C = {
    name: "Bob",
    age: 30,
    isAdmin: true,
    scores: [95, 88, 76]
};
console.log("C type variable:", cVar);

// alias types
type Status = "done" | "canceled" | "pending";

// create an unknown variable
const unknownVar: unknown = "Hello TypeScript";
/** Check if its string after being assigned */
if (typeof unknownVar === "string") {
    console.log(unknownVar.length);
} else {
    console.log("Not a string");
}