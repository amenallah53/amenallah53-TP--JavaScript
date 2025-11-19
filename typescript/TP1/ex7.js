// Exercice 7

const notes = [12, 5, 17, 9, 20];

// calcul de la moyenne avec reduce
// reduce((accumulateur,element) => instruction, valeur_init)
const moyenne = notes.reduce((acc, note) => acc + note, 0) / notes.length;
console.log("Moyenne :", moyenne);

// tri en ordre décroissant
notes.sort((a, b) => b - a);
console.log("Notes triées :", notes);

// filtre des notes >= 10
const notesValides = notes.filter(note => note >= 10);
console.log("Notes >= 10 :", notesValides);