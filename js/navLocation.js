const currentPath = window.location.pathname;

const navItems = document.querySelectorAll(".nav-item");
/* 
 * Parcourt chaque élément de la collection `navItems` et vérifie si l'attribut `href` de l'élément correspond au chemin actuel.
 * Si l'élément correspond au chemin actuel, ajoute la classe CSS `active` à l'élément.
 *
 * @param {HTMLElement} item - L'élément de navigation actuellement en cours de traitement.
 */
navItems.forEach((item) => {
    if (item.getAttribute("href") === currentPath) {
      item.classList.add("active");
    }
  });