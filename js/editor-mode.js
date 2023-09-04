const localStorage = sessionStorage.getItem("userOnline");
const logout = document.getElementById("login");
const filter = document.querySelector(".button-filtre");
const portfolioTitle = document.querySelector(".works-title");
const intro = document.querySelector("#introduction figure");


/**
 * Fonction pour générer le mode édition.
 */
const editorMode = () => {

    /**
     * @type {HTMLElement} editorBar - L'élément HTML pour la barre d'édition.
     */
    const editorBar = document.createElement("div");
    editorBar.className = "mode-edition";
    editorBar.innerHTML = `<a class="btn-edition"> <i class="fa-sharp fa-regular fa-pen-to-square"></i>Mode Edition</a>
    <button class="btn-publish">publier les changements</button> `;
    logout.textContent = "Logout";
    portfolioTitle.innerHTML +=`<a class="btn-edit edit-works modify"> <i class="fa-sharp fa-regular fa-pen-to-square"></i>modifier</a>`;
    intro.innerHTML += `<a class="btn-edit edit-image modify"> <i class="fa-sharp fa-regular fa-pen-to-square"></i>modifier</a>`;
    filter.style.visibility = "hidden";
    document.body.prepend(editorBar);
};

if (localStorage) {
    editorMode();

    /**
     * Écouteur d'événements pour le bouton de déconnexion.
     */
    logout.addEventListener("click", () => {
        sessionStorage.clear();
    });
}