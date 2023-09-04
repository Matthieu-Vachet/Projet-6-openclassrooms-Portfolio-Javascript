import { deleteApi, worksWrapper, works } from "./api.js";
import { generateGallery } from "./index.js";
import { showModalSuppr, getUserConfirmationSuppr } from "./modal-message.js";

// Sélection des éléments du DOM
const closeModal = document.querySelectorAll(".fa-xmark");
const returnModal = document.querySelectorAll(".fa-arrow-left");
const modalMain = document.querySelector(".modal-main");
const modalAdd = document.querySelector(".modal-add");
const miniGallery = document.querySelector(".miniatures-gallery");
const addBtn = document.querySelector(".modal-wrapper button");
export let trash =document.querySelectorAll(".miniatures-gallery .fa-trash-can")
let modalIsOpen = "false";

/** Ouverture de la modale */
if (localStorage) {
  document.querySelectorAll(".modify").forEach((element) => {
    element.addEventListener("click", () => {
      modalMain.style.display = "flex";
      modalAdd.style.display = "none";
      modalIsOpen = true;
    });
  });
}

/**
 * Ajoute une miniature à la galerie.
 * @param {Object} element - L'élément contenant les informations de la miniature.
 */
const addMiniature = (element) => {
  const miniatures = document.createElement("div");
  const image = document.createElement("div");
  image.classList = "image";
  const imageUrl = document.createElement("img");
  imageUrl.setAttribute("src", element.imageUrl);
  const text = document.createElement("p");
  text.innerText = "éditer";
  const icons = document.createElement("div");
  icons.classList = "icons";
  icons.innerHTML =
    '<i class="fa-solid fa-up-down-left-right"></i><i class="fa-solid fa-trash-can"></i>';

  image.append(icons, imageUrl);
  miniatures.append(image, text);
  miniGallery.append(miniatures);
};

/**
 * Génère la galerie miniature en fonction des éléments fournis.
 * @param {Array} elements - Les éléments à afficher dans la galerie.
 */
export const generateMiniGallery = (elements) => {
  miniGallery.innerHTML = "";
  for (let i in elements) {
    addMiniature(elements[i]);
  }
  trash = document.querySelectorAll(".miniatures-gallery .fa-trash-can");
  for (let i = 0; i < trash.length; i++) {
    trashListener(trash[i], i);
  }
};

/**
 * Fonction pour supprimer une photo.
 * @param {HTMLElement} element - L'élément de la corbeille.
 * @param {number} index - L'index de la photo dans la galerie.
 */
export const trashListener = (element, index) => {
  element.addEventListener("click", async () => {
    // Afficher votre modal de confirmation en utilisant la fonction showModalSuppr
    showModalSuppr("Êtes-vous sûr de vouloir supprimer cette photo ?");

    // Attendre la réponse de l'utilisateur
    const confirmDelete = await getUserConfirmationSuppr();

    // Vérifier si l'utilisateur a confirmé la suppression
    if (!confirmDelete) {
      return;
    }

    const userOnline = JSON.parse(sessionStorage.getItem("userOnline"));
    let newWorks = await worksWrapper();
    await deleteApi(newWorks[index].id, userOnline);
    newWorks = await worksWrapper();

    // Regénérer la galerie principale et la galerie miniature avec les nouvelles données
    generateGallery(newWorks);
    generateMiniGallery(newWorks);
  });
};

// Gestion des événements pour fermer les modales
Array.from(closeModal).forEach((element) => {
  element.addEventListener("click", () => {
    modalMain.style.display = "none";
    modalAdd.style.display = "none";
    modalIsOpen = false;
  });
});

Array.from(returnModal).forEach((element) => {
  element.addEventListener("click", () => {
    modalMain.style.display = "flex";
    modalAdd.style.display = "none";
    modalIsOpen = true;
  });
});

addBtn.addEventListener("click", () => {
  modalMain.style.display = "none";
  modalAdd.style.display = "flex";
  modalIsOpen = true;
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modalMain.style.display = "none";
    modalAdd.style.display = "none";
    modalIsOpen = false;
  }
});

modalMain.addEventListener("click", (e) => {
  if (modalIsOpen && e.target === modalMain) {
    modalMain.style.display = "none";
    modalAdd.style.display = "none";
    modalIsOpen = false;
  }
});

modalAdd.addEventListener("click", (e) => {
  if (modalIsOpen && e.target === modalAdd) {
    modalAdd.setAttribute("style", "display : none");
    modalIsOpen = false;
  }
});

// Génère la galerie miniature avec les éléments de départ
generateMiniGallery(works);