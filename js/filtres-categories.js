import { works } from "/js/apiWraper.js";
import { generateGallery } from "/js/import-projets.js";

const buttonsCategories = document.querySelectorAll(".button-filtre button");

// Définir le bouton de la première catégorie comme actif
buttonsCategories[0].setAttribute("class", "active");

for (let i = 0; i < buttonsCategories.length; i++) {
  buttonsCategories[i].addEventListener("click", function () {
    // Supprimer la classe "active" de tous les boutons de catégorie
    for (let i = 0; i < buttonsCategories.length; i++) {
      buttonsCategories[i].removeAttribute("class", "active");
    }

    // Définir le bouton cliqué comme actif
    buttonsCategories[i].setAttribute("class", "active");

    if (i == 0) {
      // Afficher tous les éléments si la catégorie sélectionnée est la première (Tous)
      generateGallery(works);
    } else {
      // Filtrer les éléments en fonction de la catégorie sélectionnée
      const ElementsFiltered = works.filter(element => element.categoryId == i);
      generateGallery(ElementsFiltered);
    }
  });
}
