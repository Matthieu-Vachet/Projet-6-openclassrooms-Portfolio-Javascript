import {
  works,
  deleteApi,
  getWorksWrapper,
} from "/js/apiWraper.js";
import { generateGallery } from "/js/import-projets.js";

// Sélectionner tous les boutons de fermeture du modal
const closeModal = document.querySelectorAll(".close-btn");

// Sélectionner le conteneur principal du modal
const modalMain = document.querySelector(".modal-main");

// Sélectionner le modal d'ajout
const modalAdd = document.querySelector(".modal-add");

// Sélectionner la galerie miniature
const miniGallery = document.querySelector(".miniatures-gallery");

// Sélectionner le bouton d'ajout
const addBtn = document.querySelector(".modal-wrapper button");

// Sélectionner tous les icônes de corbeille dans la galerie miniature
export let trash = document.querySelectorAll(
  ".miniature-gallery .fa-trash-can"
);

// Variable pour suivre si le modal est ouvert ou fermé
let modalIsOpen = false;

if (localStorage) {
  // Sélectionner tous les éléments avec la classe "modify"
  document.querySelectorAll(".modify").forEach((element) => {
    /**
     * Ouvrir le modal lorsqu'un élément "modify" est cliqué
     *
     * @param {HTMLElement} element - L'élément qui déclenche l'ouverture du modal
     */
    element.addEventListener("click", () => {
      modalMain.style.display = "flex";
      modalAdd.style.display = "none";
      modalIsOpen = true;
    });
  });
}

const addMiniature = (element) => {
  const miniatures = document.createElement("div");
  const image = document.createElement("div");
  const imageUrl = document.createElement("img");
  const text = document.createElement("p");
  const icons = document.createElement("div");

  image.classList = "image";
  imageUrl.setAttribute("src", element.imageUrl);
  text.innerText = "éditer";
  icons.classList = "icons";
  icons.innerHTML = `<i class="fa-solid fa-up-down-left-right"></i> <i class="fa-solid fa-trash-can"></i>`;

  image.append(icons, imageUrl);
  miniatures.append(image, text);
  miniGallery.append(miniatures);
};

/**
 * Fonction pour générer la galerie miniature
 * @param {Array} elements - Les éléments à afficher dans la galerie
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
 * Fonction pour gérer l'événement de suppression d'une photo
 * @param {HTMLElement} element - L'élément sur lequel l'événement est attaché (icône de corbeille)
 * @param {number} index - L'index de l'élément dans la liste des photos
 */
export const trashListener = (element, index) => {
  element.addEventListener("click", async () => {
    const confirmDelete = confirm(
      "Etes vous sûr de vouloir supprimer cette photo ?"
    );
    if (!confirmDelete) {
      return;
    }
    const token = localStorage.getItem("token");
    const userOnline = { token: token };

    if (userOnline && userOnline.token) {
      let newWorks = await getWorksWrapper();
      console.log(newWorks);
      await deleteApi(newWorks[index].id, userOnline);

      newWorks = await getWorksWrapper(); // Obtenir les projets mis à jour après la suppression
      generateGallery(newWorks); // Générer les éléments HTML correspondant aux projets
      generateMiniGallery(newWorks); // Générer la galerie miniature avec les projets mis à jour
    } else {
      console.log("Token non disponible");
    }
  });
};

Array.from(closeModal).forEach((element) => {
  element.addEventListener("click", () => {
    modalMain.style.display = "none";
    modalAdd.style.display = "none";
    modalIsOpen = false;
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
    modalAdd.setAttribute("style", "display: none");
    modalIsOpen = false;
  }
});

/**
 * Générer la galerie miniature
 * @param {Array} works - Les éléments à afficher dans la galerie
 */
generateMiniGallery(works);
