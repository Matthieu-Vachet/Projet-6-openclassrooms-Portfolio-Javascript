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

const checkTokenPresence = () => {
  const userOnLine = sessionStorage.getItem("userOnLine");
  if (userOnLine) {
    console.log("Le token est présent : ", userOnLine);
  } else {
    console.log("Le token n'est pas présent.");
  }
};
