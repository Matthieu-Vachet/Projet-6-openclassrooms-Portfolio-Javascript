import {categories} from '/js/apiWraper.js';

const sectionFilter = document.querySelector(".button-filtre");

const generateFilter = (elements) => {
    if (sectionFilter){
    document.querySelector(".button-filtre").innerHTML = "";
    const buttonAll = document.createElement("button");
    buttonAll.innerHTML = "Tous";
    sectionFilter.appendChild(buttonAll);

    for (let i in elements) {
        const button = document.createElement("button");
        button.innerHTML = elements[i].name;
        sectionFilter.appendChild(button);
    }
    } else {
        console.log("L'élément parent avec la classe 'button-filtre' n'existe pas");
    }
}

generateFilter(categories);