// Fonction pour générer les boutons de catégorie en fonction des catégories fournies
export function genererCategories(categories) {
  // Sélectionner l'élément HTML avec la classe "button-filtre"
  const sectionFilter = document.querySelector(".button-filtre");
  // Vérifier si l'élément parent existe avant de continuer
  if (sectionFilter) {
    // Parcourir les catégories dans le tableau "categories"
    for (let i = 0; i < categories.length; i++) {
      const filter = categories[i];
      // Créer un nouvel élément <button> pour représenter le filtre de catégorie
      const buttonElement = document.createElement("button");
      // Définir le texte du bouton en utilisant le nom de la catégorie
      buttonElement.innerText = filter.name;
      // Ajouter le bouton à l'élément HTML avec la classe "button-filtre"
      sectionFilter.appendChild(buttonElement);
    }
  } else {
    console.log("L'élément parent avec la classe 'button-filtre' n'existe pas");
  }
}
  
  // Fonction pour filtrer les projets en fonction de la catégorie sélectionnée
  export function filtrerProjets() {
    // Sélectionner tous les éléments <button>
    const buttonsCategories = document.querySelectorAll("button");
    // Ajouter un écouteur d'événement "click" à chaque bouton
    buttonsCategories.forEach(button => {
      button.addEventListener("click", () => {
        // Récupérer le texte du bouton (nom de la catégorie)
        const category = button.innerText.trim();
        // Vérifier si la catégorie sélectionnée est "Tous"
        if (category === "Tous") {
          // Sélectionner tous les éléments avec l'attribut "data-category"
          const allWorkElements = document.querySelectorAll("[data-category]");
          // Afficher tous les projets en les rendant visibles
          allWorkElements.forEach(workElement => {
            workElement.style.display = "block";
          });
        } else {
          // Sélectionner tous les éléments avec l'attribut "data-category" correspondant à la catégorie sélectionnée
          const workElements = document.querySelectorAll(`[data-category="${category}"]`);
          // Afficher les projets correspondant à la catégorie en les rendant visibles
          workElements.forEach(workElement => {
            workElement.style.display = "block";
          });
          // Sélectionner tous les autres éléments avec l'attribut "data-category" différent de la catégorie sélectionnée
          const otherWorkElements = document.querySelectorAll(`[data-category]:not([data-category="${category}"])`);
          // Masquer les autres projets en les rendant invisibles
          otherWorkElements.forEach(workElement => {
            workElement.style.display = "none";
          });
        }
      });
    });
  }
  