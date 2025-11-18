// Exercice 1

// Declaration
var x = 1;
let y = 2;
const z = 3;

// bloc 
{
    var x = 10;
    let y = 20; 
    const z = 30;
    console.log("Dans le bloc :", x, y, z); // 10 20 30
}

// hors bloc
console.log("En dehors du bloc :", x, y, z); // 10 2 3
