// Exercice 2

// classic Fonction
function somme(a, b) {
    return a + b;
}

// Arrow Function with explicit return
const somme1 = (a, b) => {
    return a + b;
};

// Arrow Function with implicit return
const somme2 = (a, b) => a + b;

console.log("result of classic function : ",somme(2, 3));  
console.log("result of arrow function with explicit return : ",somme1(2, 3));
console.log("result of arrow function with implicit return : ",somme2(2, 3));
