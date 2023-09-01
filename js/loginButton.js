/**
 * Met à jour l'état du bouton de connexion.
 */
export const updateLoginButton = () => {
  const login = document.getElementById("login");
  const isLoggedIn = sessionStorage.getItem("userOnLine") !== null;

  if (isLoggedIn) {
    login.textContent = "Logout";
  } else {
    login.textContent = "Login";
  }

  checkTokenPresence();
};

/**
 * Vérifie la présence du token dans le session storage.
 */
const checkTokenPresence = () => {
  const userOnLine = sessionStorage.getItem("userOnLine");
  if (userOnLine) {
    console.log("Le token est présent : ", userOnLine);
  } else {
    console.log("Le token n'est pas présent.");
  }
};
