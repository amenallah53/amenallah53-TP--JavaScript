// Exercice 6

class Etudiant {
    constructor(name, note) {
        if (note < 0 || note > 20) {
            throw new Error("note doit etre entre 0 et 20 !!")
        }
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

// création des instances
let e1 = new Etudiant("Ali", 15);
let e2 = new Etudiant("Amenallah", 20);
let e3 = new Etudiant("Ali", 18);
// affichage des moyennes
console.log(e1.getMention());
console.log(e2.getMention());
console.log(e3.getMention());