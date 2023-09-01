import { categories, works } from "/js/apiWraper.js";
import { generateGallery } from "/js/import-projets.js";

const buttonsCategories = document.querySelectorAll(".button-filtre button");
   
buttonsCategories[0].setAttribute("class", "active");

for (let i = 0; i < buttonsCategories.length; i++) {
  
  buttonsCategories[i].addEventListener("click", function () {

    for (let i = 0; i < buttonsCategories.length; i++) {
      buttonsCategories[i].removeAttribute("class", "active");
    }

    buttonsCategories[i].setAttribute("class", "active");
    if (i == 0) {
      generateGallery(works);
    } else {
      const ElementsFiltered = works.filter(element => element.categoryId == i);
      generateGallery(ElementsFiltered);
    }
    
  })
}
