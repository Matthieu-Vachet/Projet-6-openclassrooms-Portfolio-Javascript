// Récupérer le token depuis le localStorage
const token = localStorage.getItem("token");

// Sélectionner l'élément avec la classe "button-filtre"
const filter = document.querySelector(".button-filtre");

// Sélectionner l'élément avec la classe "works-title"
const worksTitle = document.querySelector(".works-title");

// Sélectionner l'élément avec l'id "introduction figure"
const intro = document.querySelector("#introduction figure");

// Fonction pour générer le mode édition
export function modeEditor() {
  // Créer un élément div
  const editorBar = document.createElement("div");
  // Ajouter la classe "mode-edition" à l'élément div
  editorBar.className = "mode-edition";
  // Ajouter du contenu HTML à l'élément div
  editorBar.innerHTML = `<a class="btn-edition"> <i class="fa-sharp fa-regular fa-pen-to-square"></i>Mode Edition</a>
      <button class="btn-publish">publier les changements</button>`;

  if (worksTitle) {
    // Ajouter un bouton "modifier" à l'élément avec la classe "works-title"
    worksTitle.innerHTML += `<a class="btn-edit edit-works modify"> <i class="fa-sharp fa-regular fa-pen-to-square"></i>modifier</a>`;
  }

  if (intro) {
    // Ajouter un bouton "modifier" à l'élément avec l'id "introduction figure"
    intro.innerHTML += `<a class="btn-edit edit-image modify"> <i class="fa-sharp fa-regular fa-pen-to-square"></i>modifier</a>`;
  }

  if (filter) {
    // Masquer l'élément avec la classe "button-filtre"
    filter.style.visibility = "hidden";
  }

  // Ajouter l'élément div au début du body du document
  document.body.prepend(editorBar);
}

if (token) {
  // Appeler la fonction modeEditor() si un token est présent dans le localStorage
  modeEditor();

  // Sélectionner l'élément avec l'id "login"
  const logout = document.getElementById("login");
  // Ajouter un écouteur d'événement pour le clic sur le bouton de déconnexion
  logout.addEventListener("click", (event) => {
    logoutUser(event);
  });
}

// Fonction pour rediriger vers la page d'accueil
function redirectToHome() {
  window.location.href = "/index.html";
}

// Fonction pour déconnecter l'utilisateur
export function logoutUser(event) {
  // Empêcher le comportement par défaut du lien
  event.preventDefault();

  // Supprimer le token de l'objet localStorage
  localStorage.removeItem("token");

  // Rediriger vers la page d'accueil (index.html)
  redirectToHome();
}
