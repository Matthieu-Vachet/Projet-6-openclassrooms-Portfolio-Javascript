/**
 * @function worksWrapper
 * Récupère les données des projets depuis l'API.
 * @returns {Promise} Une promesse qui se résout avec les données récupérées.
 */
export const worksWrapper = async () => {
  try {
    const reponse = await fetch("http://localhost:5678/api/works");
    const data = await reponse.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

/**
 * @function categorieWrapper
 * Récupère les données des catégories depuis l'API.
 * @returns {Promise} Une promesse qui se résout avec les données récupérées.
 */
const categorieWrapper = async () => {
  try {
    const reponse = await fetch("http://localhost:5678/api/categories");
    const data = await reponse.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const works = await worksWrapper();
export const categories = await categorieWrapper();

/**
 * @function tokenWrapper
 * Envoie une requête POST à l'API pour authentifier un utilisateur.
 * @param {Object} user - L'objet utilisateur contenant l'email et le mot de passe.
 * @returns {Promise} Une promesse qui se résout avec la réponse du serveur.
 */
export const tokenWrapper = async (user) => {
  try {
    const reponse = await fetch("http://localhost:5678/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(user),
    });

    return reponse;
  } catch (error) {
    console.error(error);
  }
};

/**
 * @function postApi
 * Envoie une requête POST à l'API pour créer un nouveau projets.
 * @param {FormData} files - Les fichiers à Upload.
 * @param {Object} userOnline - L'objet utilisateur contenant le jeton.
 * @returns {Promise} Une promesse qui se résout avec la réponse du serveur.
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
    console.error(error);
  }
};

/**
 * @function deleteApi
 * Envoie une requête DELETE à l'API pour supprimer un projets.
 * @param {string} idOfWorks - L'ID du projets à supprimer.
 * @param {Object} userOnline - L'objet utilisateur contenant le jeton.
 * @returns {Promise} Une promesse qui se résout avec la réponse du serveur.
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
    console.error(error);
  }
};
