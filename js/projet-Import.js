import { works } from "/js/apiWraper.js";

const sectionGallery = document.querySelector(".gallery");

export const generateGallery = (elements) => {
  document.querySelector(".gallery").innerHTML = "";
  for (let i in elements) {
    if (sectionGallery) {
      const worksElement = document.createElement("figure");
      const imageElement = document.createElement("img");
      const nomElement = document.createElement("figcaption");

      imageElement.setAttribute("src", elements[i].imageUrl);
      imageElement.setAttribute("alt", elements[i].title);

      nomElement.innerHTML = elements[i].title;

      worksElement.setAttribute("data-category", elements[i].category.name);

      worksElement.appendChild(imageElement);
      worksElement.appendChild(nomElement);
      sectionGallery.appendChild(worksElement);
    } else {
      console.log("L'élément parent avec la classe 'gallery' n'existe pas");
    }
  }
};

generateGallery(works);
