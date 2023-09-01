/**
 * Récupère la valeur du token utilisateur dans le session storage.
 */
const localStorage = sessionStorage.getItem("userOnLine");

/**
 * Sélectionne l'élément du DOM avec la classe "button-filtre".
 */
const filter = document.querySelector(".button-filtre");

/**
 * Sélectionne l'élément du DOM avec la classe "works-title".
 */
const worksTitle = document.querySelector(".works-title");

/**
 * Sélectionne l'élément du DOM avec l ID "introduction figure".
 */
const intro = document.querySelector("#introduction figure");

/**
 * Active le mode édition en ajoutant des éléments au DOM.
 */
const modeEditor = () => {
  const editorBar = document.createElement("div");
  editorBar.className = "mode-edition";
  editorBar.innerHTML =  `<a class="btn-edition"> <i class="fa-sharp fa-regular fa-pen-to-square"></i>Mode Edition</a>
        <button class="btn-publish">publier les changements</button> `;
  if (worksTitle) {
    worksTitle.innerHTML +=  `<a class="btn-edit edit-works modify"> <i class="fa-sharp fa-regular fa-pen-to-square"></i>modifier</a>`;
  }

  if (intro) {
    intro.innerHTML += `<a class="btn-edit edit-image modify"> <i class="fa-sharp fa-regular fa-pen-to-square"></i>modifier</a>`;
  }

  if (filter) {
    filter.style.visibility = "hidden";
  }
  
  document.body.prepend(editorBar);
};

if (localStorage) {
  modeEditor();

  /**
   * Sélectionne l'élément du DOM avec l'ID "login".
   */
  const logout = document.getElementById("login");

  /**
   * Ajoute un écouteur d'événement sur le bouton de déconnexion.
   * @param {Event} event - L'événement "click" sur le bouton de déconnexion.
   */
  logout.addEventListener("click", (event) => {
    logoutUser(event);
  });
}

/**
 * Redirige vers la page d'accueil.
 */
function redirectToHome() {
  window.location.href = "/index.html";
}

/**
 * Déconnecte l'utilisateur en supprimant le token de la session storage et redirige vers la page d'accueil.
 * @param {Event} event - L'événement "click" sur le bouton de déconnexion.
 */
export function logoutUser(event) {
  event.preventDefault();
  sessionStorage.removeItem("userOnLine");
  redirectToHome();
}