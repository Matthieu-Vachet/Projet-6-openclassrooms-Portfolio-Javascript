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
    // Création d’une balise dédiée à un projet //
    const worksElement = document.createElement("figure");

    // Création des balises //
    const imageElement = document.createElement("img");
    imageElement.src = article.imageUrl;
    imageElement.alt = article.title;
    const nomElement = document.createElement("figcaption");
    nomElement.innerText = article.title;

    // Ajout du nom de la catégorie comme attribut de données à worksElement
    worksElement.setAttribute("data-category", article.category.name);

    // On rattache la balise article a la section Gallery //
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
    // Récupération de l'élément du DOM qui accueillera les bouttons filtre //
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


//
// FILTRE DES PROJETS VIA DATA-CATEGORY
//
// Sélection de tous les boutons de catégorie
const buttonsCategories = document.querySelectorAll("button");

// Ajout d'un gestionnaire d'événements à chaque bouton
buttonsCategories.forEach(button => {
  button.addEventListener("click", () => {
    // Récupération du nom de la catégorie du bouton (en supprimant les espaces supplémentaires)
    const category = button.innerText.trim();

    // Si le bouton "Tous" est cliqué
    if (category === "Tous") {
      // Sélection de tous les éléments de travail avec un attribut data-category
      const allWorkElements = document.querySelectorAll("[data-category]");

      // Affichage de tous les éléments de travail
      allWorkElements.forEach(workElement => {
        workElement.style.display = "block";
      });
    } else {
      // Sélection des éléments de travail correspondant à la catégorie du bouton
      const workElements = document.querySelectorAll(`[data-category="${category}"]`);

      // Affichage des éléments de travail correspondants
      workElements.forEach(workElement => {
        workElement.style.display = "block";
      });

      // Sélection des autres éléments de travail qui ont une catégorie différente
      const otherWorkElements = document.querySelectorAll(`[data-category]:not([data-category="${category}"])`);

      // Masquage des autres éléments de travail
      otherWorkElements.forEach(workElement => {
        workElement.style.display = "none";
      });
    }
  });
});

