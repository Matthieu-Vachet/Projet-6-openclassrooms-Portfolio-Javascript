// Fonction pour récupérer les projets
/**
 * @returns {Promise} - Les données récupérées depuis l'API
 */
export const getWorksWrapper = async () => {
  try {
    const reponse = await fetch("http://localhost:5678/api/works");
    const data = await reponse.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

// Récupérer les projets
export const works = await getWorksWrapper();

// Fonction pour récupérer les catégories
/**
 * @returns {Promise} - Les données récupérées depuis l'API
 */
const getCategoriesWrapper = async () => {
  try {
    const reponse = await fetch("http://localhost:5678/api/categories");
    const data = await reponse.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

// Récupérer les catégories
export const categories = await getCategoriesWrapper();

// Fonction pour récupérer le token de l'utilisateur
/**
 * @param {Object} user - Les informations de l'utilisateur
 * @returns {Promise} - La réponse de l'API
 */

export const getTokenWrapper = async (user) => {
  try {
    const reponse = await fetch("http://localhost:5678/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json ",
      },
      body: JSON.stringify(user),
    });

    return reponse;
  } catch (error) {
    console.log(error);
  }
};

// Fonction pour envoyer des données à l'API via une requête POST
/**
 * @param {Object} files - Les fichiers à envoyer
 * @param {Object} userOnline - Les informations de l'utilisateur connecté
 * @returns {Promise} - La réponse de l'API
 */
export const postApi = async (files, userOnline) => {
  try {
    const reponse = await fetch("http://localhost:5678/api/works", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + userOnline.token,
      },
      body: files,
    });

    return reponse;
  } catch (error) {
    console.log(error);
  }
};

// Fonction pour supprimer des données de l'API via une requête DELETE
/**
 * @param {String} idOfWorks - L'identifiant de l'œuvre à supprimer
 * @param {Object} userOnline - Les informations de l'utilisateur connecté
 * @returns {Promise} - La réponse de l'API
 */
export const deleteApi = async (idOfWorks, userOnline) => {
  try {
    const reponse = await fetch(
      "http://localhost:5678/api/works/" + idOfWorks,
      {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + userOnline.token,
        },
      }
    );
    return reponse;
  } catch (error) {
    console.log(error);
  }
};
