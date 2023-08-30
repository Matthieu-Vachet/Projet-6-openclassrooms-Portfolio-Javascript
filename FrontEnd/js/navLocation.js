// Récupère le chemin d'accès actuel de la fenêtre
const currentPath = window.location.pathname;

// Sélectionne tous les éléments de navigation avec la classe "nav-item"
const navItems = document.querySelectorAll('.nav-item');

// Parcourt chaque élément de navigation
navItems.forEach(item => {
  // Vérifie si l'attribut "href" de l'élément correspond au chemin d'accès actuel
  if (item.getAttribute('href') === currentPath) {
    // Ajoute la classe "active" à l'élément de navigation
    item.classList.add('active');
  }
});
