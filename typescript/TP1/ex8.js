// Exercice 8

// Promise implementation
function attendre(ms) {
    // return a promise
    return new Promise(resolve => setTimeout(resolve,/* parameter */ ms));
}

async function runEx8() {
    const output = document.getElementById("output");
    output.textContent = "Wait 1 second...";
    // call the asynchrous function "attendre"
    await attendre(1000);
    output.textContent = "1 second passed !";
}
