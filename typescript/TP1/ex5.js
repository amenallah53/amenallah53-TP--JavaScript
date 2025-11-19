// Exercice 5

// initialisation d'un objet livre
const livre = {
    //attribut
    titre: "Harry Potter and the Philosopher's Stone",
    auteur: "J.K Rowling",
    annee: 1997,
    //methode
    getInfo() {
        return `This book is named "${this.titre}" written by ${this.auteur} and published in ${this.annee}`;
    }
};

console.log(livre.getInfo());