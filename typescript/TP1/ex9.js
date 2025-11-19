// Exercice 9

// asynchrounous programming : fetching data from an API
async function getAPIData() {
    const output = document.getElementById("output");
    // try-catch block
    try {
        // fetch function to API link (GET method in default)
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        // check status : if status = 200 means true
        if (!response.ok) {
            throw new Error("Erreur lors de la récupération");
        }
        // data ready
        const data = await response.json();

        // 5 first elements
        const premiers = data.slice(0, 5);

        output.innerHTML = "<h3>First 5 Results :</h3>";
        premiers.forEach(post => {
            const div = document.createElement("div");
            div.style.marginBottom = "10px";
            div.innerHTML = `<strong>${post.title}</strong><br>${post.body}`;
            output.appendChild(div);
        });

    } catch (err) {
        output.textContent = "Error : " + err.message;
    }
}

