import { categories } from '/js/apiWraper.js';

const sectionFilter = document.querySelector(".button-filtre");

/**
 * Génère les boutons de filtre en utilisant les éléments fournis.
 * @param {Array} elements - Les éléments à utiliser pour générer les boutons de filtre.
 */
const generateFilter = (elements) => {
    if (sectionFilter) {
        // Effacer le contenu de l'élément sectionFilter
        document.querySelector(".button-filtre").innerHTML = "";
        const buttonAll = document.createElement("button");
        // Définir le contenu du bouton All
        buttonAll.innerHTML = "Tous";
        sectionFilter.appendChild(buttonAll);

        for (let i in elements) {
            const button = document.createElement("button");
            // Définir le contenu du bouton avec le nom de l'élément
            button.innerHTML = elements[i].name;
            sectionFilter.appendChild(button);
        }
    } else {
        console.log("L'élément parent avec la classe 'button-filtre' n'existe pas");
    }
}

// Appeler la fonction generateFilter avec le paramètre categories
generateFilter(categories);