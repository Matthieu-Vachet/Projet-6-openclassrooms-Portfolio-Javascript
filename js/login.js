import { getTokenWrapper } from "/js/apiWraper.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.querySelector(".login-btn");
const loginError = document.querySelector(".login-error");
const login = document.getElementById("login");

let emailInput = "";
let passwordInput = "";
let isLoggedIn = sessionStorage.getItem("userOnLine") !== null;

email.addEventListener("input", (e) => {
  emailInput = e.target.value;
});

password.addEventListener("input", (e) => {
  passwordInput = e.target.value;
});

const checkTokenPresence = () => {
  const userOnLine = sessionStorage.getItem("userOnLine");
  if (userOnLine) {
    console.log("Le token est présent : ", userOnLine);
  } else {
    console.log("Le token n'est pas présent.");
  }
};

const loginHandler = async (e) => {
  e.preventDefault();
  let user = {
    email: emailInput,
    password: passwordInput,
  };

  const response = await getTokenWrapper(user);
  if (!response.ok || !emailInput || !passwordInput) {
    loginError.innerHTML = "Veuillez entrer un email et un mot de passe valide";
  } else {
    let userOnLine = await response.json();

    sessionStorage.setItem("userOnLine", JSON.stringify(userOnLine));
    isLoggedIn = true;
    updateLoginButton();
  }

  if (isLoggedIn) {
    login.textContent = "Logout";
    window.location.href = "/index.html";
    checkTokenPresence();
  } else {
    login.textContent = "Login";
    checkTokenPresence();
  }
};

loginBtn.addEventListener("click", loginHandler);

login.addEventListener("click", () => {
  if (isLoggedIn) {
    sessionStorage.removeItem("userOnLine");
    isLoggedIn = false;
    updateLoginButton();
    checkTokenPresence();
  }
});

const updateLoginButton = () => {
  if (isLoggedIn) {
    login.textContent = "Logout";
  } else {
    login.textContent = "Login";
  }

  checkTokenPresence();
};

updateLoginButton();
