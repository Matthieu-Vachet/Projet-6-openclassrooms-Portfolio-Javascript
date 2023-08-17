//
// RECUPERATION DES PROJETS
//
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
    imageElement.alt = article.title;
    const nomElement = document.createElement("figcaption");
    nomElement.innerText = article.title;

    // Ajouter le nom de la catégorie comme attribut de données à worksElement
    worksElement.setAttribute("data-category", article.category.name);

    // On rattache la balise article a la section Gallerie //
    sectionGallery.appendChild(worksElement);
    worksElement.appendChild(imageElement);
    worksElement.appendChild(nomElement);
  }
}
genererWorks(works);

//
// RECUPERATION DES CATEGORIES
//

const reponseCategories = await fetch("http://localhost:5678/api/categories");
const categories = await reponseCategories.json();

function genererCategories(categories) {
  for (let i = 0; i < categories.length; i++) {
    const filter = categories[i];
    // Récupération de l'élément du DOM qui accueillera les traveaux //
    const sectionFilter = document.querySelector(".button-filtre");

    // Création de la balise button //
    const buttonElement = document.createElement("button");
    buttonElement.innerText = filter.name;

    // On rattache la balise l'élément DOM a la balise Boutton //
    sectionFilter.appendChild(buttonElement);
  }
}
genererCategories(categories);

works.forEach((work) => {
  const categoryName = work.category.name;
  console.log(categoryName); // Affiche le nom de la catégorie pour chaque projet
});
