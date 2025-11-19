"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello TP3 - Exercice 2");
// varaibale declaration
let name;
let age;
let isAdmin;
let scores; // array of numbers
let etudiant; // tuple [string, number]
// create an enum & assign a value
var Role;
(function (Role) {
    Role[Role["USER"] = 0] = "USER";
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["SUPERADMIN"] = 2] = "SUPERADMIN";
})(Role || (Role = {}));
; // enum declaration
let etudiantRole = Role.USER; // assign a value
// assign values to variables
name = "Alice";
age = 25;
scores = [85, 90, 78];
etudiant = [name, age];
if (etudiantRole === Role.ADMIN) {
    isAdmin = true;
}
else {
    isAdmin = false;
}
console.log(`Etudiant: ${etudiant}`);
console.log(`Scores: ${scores}`);
console.log(`Role: ${etudiantRole}`);
//# sourceMappingURL=exercice2.js.map