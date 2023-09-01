import { works } from "/js/apiWraper.js";

const sectionGallery = document.querySelector(".gallery");

/**
 * Génère la galerie en utilisant les éléments fournis.
 * @param {Array} elements - Les éléments à utiliser pour générer la galerie.
 */
export const generateGallery = (elements) => {
  // Effacer le contenu de l'élément sectionGallery
  document.querySelector(".gallery").innerHTML = "";

  for (let i in elements) {
    if (sectionGallery) {
      const worksElement = document.createElement("figure");
      const imageElement = document.createElement("img");
      const nomElement = document.createElement("figcaption");

      // Définir l'attribut "src" de l'image avec l'URL de l'élément
      imageElement.setAttribute("src", elements[i].imageUrl);
      // Définir l'attribut "alt" de l'image avec le titre de l'élément
      imageElement.setAttribute("alt", elements[i].title);

      // Définir le contenu de la balise figcaption avec le titre de l'élément
      nomElement.innerHTML = elements[i].title;

      // Définir l'attribut "data-category" de la balise figure avec le nom de la catégorie de l'élément
      worksElement.setAttribute("data-category", elements[i].category.name);

      // Ajouter l'image et le nom de l'élément à la balise figure
      worksElement.appendChild(imageElement);
      worksElement.appendChild(nomElement);

      // Ajouter la balise figure à l'élément sectionGallery
      sectionGallery.appendChild(worksElement);
    } else {
      console.log("L'élément parent avec la classe 'gallery' n'existe pas");
    }
  }
};

// Appeler la fonction generateGallery avec le paramètre works
generateGallery(works);
