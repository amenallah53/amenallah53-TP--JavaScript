// Message de test
console.log("Bienvenue dans l'application de gestion de taches !");

// Tableau de stockage des taches
let tasks = [];

// DOM Selecteurs
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const pendingCount = document.getElementById("pendingCount");
const doneCount = document.getElementById("doneCount");
const clearAllBtn = document.getElementById("clearAllBtn");
const searchInput = document.getElementById("searchInput");

// Charger depuis le localStorage au demarrage de l'application web
window.onload = () => {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
    renderTasks();
  }
};

// Ajouter une tache
function ajouterTache() {
  const text = taskInput.value.trim();
  if (text === "") return;

  // object task (id, text, termine)
  const newTask = {
    id: Date.now(), //timestamp id
    texte: text, // contenu
    terminee: false // etat
  };

  tasks.push(newTask); // ajouter a la liste des taches
  taskInput.value = "";
  saveAndRender(); // apres chaque changement (ajout/ supp ...) on appelle
}

// Supprimer une tâche
function supprimerTache(id) {
  tasks = tasks.filter(task => task.id !== id);
  saveAndRender();
}

// Terminer une tâche
function terminerTache(id) {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.terminee = !task.terminee;
  }
  saveAndRender();
}

// Reafficher toutes les taches
function renderTasks(filter = "") {
  taskList.innerHTML = "";

  // filter the task list depending on the search parameter
  const filteredTasks = tasks.filter(t => 
    t.texte.toLowerCase().includes(filter.toLowerCase())
  );

  // loop
  filteredTasks.forEach(task => {
    const li = document.createElement("li");
    li.className = task.terminee ? "completed" : "";

    const span = document.createElement("span");
    span.textContent = task.texte;

    const actionsDiv = document.createElement("div");

    const doneBtn = document.createElement("button");
    doneBtn.textContent = task.terminee ? "Terminée" : "Terminer";
    if (task.terminee) {
      doneBtn.style.backgroundColor = "gray";
      doneBtn.style.cursor = "default";
      doneBtn.disabled = true
    }
    doneBtn.className = "done-btn";
    doneBtn.onclick = () => terminerTache(task.id);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Supprimer";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => supprimerTache(task.id);

    actionsDiv.appendChild(doneBtn);
    actionsDiv.appendChild(deleteBtn);

    // add span and div (doneBtn & delBtn) 
    /* 
    <li>
      <span></span>
      <div>
        <button></button>
        <button></button>
      </div>
    </li>
    */
    li.appendChild(span);
    li.appendChild(actionsDiv);
    // add to li tag to ul tag (each <li> representing a task)
    taskList.appendChild(li);
  });

  updateCounters();
}

// Sauvegarder et reafficher
function saveAndRender() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks(searchInput.value);
}

// Mettre à jour les compteurs
function updateCounters() {
  const pending = tasks.filter(t => !t.terminee).length;
  const done = tasks.filter(t => t.terminee).length;

  pendingCount.textContent = `En cours: ${pending}`;
  doneCount.textContent = `Terminées: ${done}`;
}

// Supprimer toutes les tâches
function clearAll() {
  if (confirm("Voulez-vous vraiment supprimer toutes les tâches ?")) {
    tasks = [];
    saveAndRender();
  }
}

// Gestion des evenements
addBtn.addEventListener("click", ajouterTache);
taskInput.addEventListener("keypress", e => {
  if (e.key === "Enter") ajouterTache();
});
clearAllBtn.addEventListener("click", clearAll);
searchInput.addEventListener("keyup", () => {
  renderTasks(searchInput.value);
});
