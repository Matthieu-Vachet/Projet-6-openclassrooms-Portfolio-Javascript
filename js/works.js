// Fonction pour générer les éléments HTML correspondant à chaque projet
export function genererWorks(works) {
  // Parcourir les projets dans le tableau "works"
  for (let i = 0; i < works.length; i++) {
    const article = works[i];
    // Sélectionner l'élément HTML avec la classe "gallery"
    const sectionGallery = document.querySelector(".gallery");
    // Vérifier si l'élément parent existe avant d'ajouter l'enfant
    if (sectionGallery) {
      // Créer un élément <figure> pour représenter le projet
      const worksElement = document.createElement("figure");
      // Créer un élément <img> pour afficher l'image du projet
      const imageElement = document.createElement("img");
      // Définir l'URL de l'image en utilisant la propriété "imageUrl" du projet
      imageElement.src = article.imageUrl;
      // Définir le texte alternatif de l'image en utilisant le titre du projet
      imageElement.alt = article.title;
      // Créer un élément <figcaption> pour afficher le titre du projet
      const nomElement = document.createElement("figcaption");
      // Définir le texte du titre en utilisant le titre du projet
      nomElement.innerText = article.title;
      // Ajouter un attribut "data-category" à l'élément <figure> pour stocker le nom de la catégorie du projet
      worksElement.setAttribute("data-category", article.category.name);
      // Ajouter l'élément <figure> à l'élément HTML avec la classe "gallery"
      sectionGallery.appendChild(worksElement);
      // Ajouter l'élément <img> à l'élément <figure>
      worksElement.appendChild(imageElement);
      // Ajouter l'élément <figcaption> à l'élément <figure>
      worksElement.appendChild(nomElement);

    } else {
      console.log("L'élément parent avec la classe 'gallery' n'existe pas");
    }
  }
}



export const deleteWorksApi = async (idOfWorks) => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      const userOnLine = { token: token };
      const response = await fetch("http://localhost:5678/api/works/" + idOfWorks, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + userOnLine.token,
        },
      });
      return response;
    }
  } catch (error) {
    console.error(error);
  }
};



