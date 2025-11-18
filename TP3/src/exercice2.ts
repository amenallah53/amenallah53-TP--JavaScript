console.log("Hello TP3 - Exercice 2");

// varaibale declaration
let name :string;
let age: number;
let isAdmin: boolean;
let scores: number[]; // array of numbers
let etudiant: [string, number]; // tuple [string, number]

// create an enum & assign a value
enum Role { USER, ADMIN, SUPERADMIN }; // enum declaration
let etudiantRole: Role = Role.USER; // assign a value

// assign values to variables
name = "Alice";
age = 25;
scores = [85, 90, 78];  
etudiant = [name, age];
if ((etudiantRole as Role) === Role.ADMIN) {
    isAdmin = true;
} else {
    isAdmin = false;
}

console.log(`Etudiant: ${etudiant}`);
console.log(`Scores: ${scores}`);
console.log(`Role: ${etudiantRole}`);