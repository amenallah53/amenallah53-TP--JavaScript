// Exercice 4

// declarations de deux tableaux
const t1 = [1, 2, 3];
const t2 = [4, 5, 6];

// fusion avec ... (spread operator)
const fusion_table = [...t1, ...t2];

// object
let obj = {
    name: "dsfjds",
    age: 20
};

console.log("before modification : ",obj)

// deep copy (spread operator)
const copy_obj = { ...obj };

console.log("copy : ",copy_obj)


// modification d'un attribut dans un object
obj = {
    ...obj,
    name: "NouveauNom"
};

console.log("after modification : ",obj)
