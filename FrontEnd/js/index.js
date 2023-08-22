// Importer les fonctions nécessaires depuis les fichiers correspondants
import { genererWorks } from "./works.js";
import { genererCategories, filtrerProjets } from "./categories.js";

// Définir les URL des API pour les projets et les catégories
const apiUrlWorks = "http://localhost:5678/api/works";
const apiUrlCategories = "http://localhost:5678/api/categories";

// Fonction asynchrone pour afficher les projets
async function afficherProjets() {
  // Effectuer une requête GET à l'API des projets
  const reponseWorks = await fetch(apiUrlWorks);
  // Obtenir la réponse sous forme de JSON
  const works = await reponseWorks.json();
  // Appeler la fonction genererWorks pour afficher les projets sur la page
  genererWorks(works);
}

// Fonction asynchrone pour afficher les catégories
async function afficherCategories() {
  // Effectuer une requête GET à l'API des catégories
  const reponseCategories = await fetch(apiUrlCategories);
  // Obtenir la réponse sous forme de JSON
  const categories = await reponseCategories.json();
  // Appeler la fonction genererCategories pour afficher les catégories sur la page
  genererCategories(categories);
}

// Fonction asynchrone pour initialiser le projet
async function initialiserProjet() {
  // Attendre l'affichage des projets
  await afficherProjets();
  // Attendre l'affichage des catégories
  await afficherCategories();
  // Appeler la fonction filtrerProjets pour activer le filtrage des projets par catégorie
  filtrerProjets();
}

// Appeler la fonction initialiserProjet pour démarrer le projet
initialiserProjet();
