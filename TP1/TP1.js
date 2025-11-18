// ====================
// Partie 1
// ====================

// Exercice 1

var a; 
let b; 
const c = 10; // const doit être initialisée


// Exercice 2

const somme = (a, b) => {
    return a + b;
}

// Version simplifiée
const somme2 = (a, b) => a + b;


// Exercice 3
/*
delete user.name;
delete user.age;
*/

// Exercice 4

const t1 = [1, 2, 3];
const t2 = [4, 5, 6];
const fusion_table = [...t1, ...t2];

const obj = {
    name: "dsfjds",
    age: 20
};
const copy_obj = { ...obj };

const obj2 = {
    ...obj,
    name: "NouveauNom"
};



// ====================
// Partie 2
// ====================

// Exercice 5

const livre = {
    titre: "Harry Potter and the Philosopher's Stone",
    auteur: "J.K Rowling",
    annee: 1997,
    getInfo() {
        return `This book is named "${this.titre}" written by ${this.auteur} and published in ${this.annee}`;
    }
};

// Exemple d'utilisation :
console.log(livre.getInfo());


// Exercice 6

class Etudiant {
    constructor(name, note) {
        this.name = name;
        this.note = note;
    }

    getMention() {
        if (this.note >= 16) {
            return "Très Bien";
        } else if (this.note >= 14) {
            return "Bien";
        } else if (this.note >= 10) {
            return "Passable";
        } else {
            return "Échec";
        }
    }
}

// main
let e1 = new Etudiant("Ali", 15);
console.log(e1.getMention());


// Exercice 7

const notes = [12, 5, 17, 9, 20];

// calcul de la moyenne avec reduce
const moyenne = notes.reduce((acc, note) => acc + note, 0) / notes.length;
console.log("Moyenne :", moyenne);

// tri en ordre décroissant
notes.sort((a, b) => b - a);
console.log("Notes triées :", notes);

// filtre des notes >= 10
const notesValides = notes.filter(note => note >= 10);
console.log("Notes >= 10 :", notesValides);



// ====================
// Partie 3
// ====================

// Exercice 8

//Exemple : Créer une fonction qui retourne une promesse

function attendre(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

attendre(1000).then(() => console.log("1 seconde écoulée"));


// Exercice 9

async function getAPIData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
            throw new Error("Erreur lors de la récupération");
        }
        const data = await response.json();
        // afficher les 5 premiers
        console.log(data.slice(0,5));
    } catch (err) {
        console.error("Erreur :", err.message);
    }
}

getAPIData()
