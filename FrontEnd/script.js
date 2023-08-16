const reponse = await fetch("http://localhost:5678/api/works/");
const works = await reponse.json();

function genererWorks(works) {
  for (let i = 0; i < works.length; i++) {

    const article = works[i];
    // Récupération de l'élément du DOM qui accueillera les traveaux //
    const sectionGallery = document.querySelector(".gallery");
    // Création d’une balise dédiée à un travail //
    const worksElement = document.createElement("figure");

    // Création des balises //
    const imageElement = document.createElement("img");
    imageElement.src = article.imageUrl;
    const nomElement = document.createElement("figcaption");
    nomElement.innerText = article.title;

    // On rattache la balise article a la section Gallerie //
    sectionGallery.appendChild(worksElement);
    worksElement.appendChild(imageElement);
    worksElement.appendChild(nomElement);
  }
}

genererWorks(works);
