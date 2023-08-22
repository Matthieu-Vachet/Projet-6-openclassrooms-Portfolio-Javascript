document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".login-form");
  const loginError = document.querySelector(".login-error");
  const loginButton = document.querySelector(".login-btn");

  const textError = "Email ou mot de passe incorrect";

  async function loginUser(email, password) {
    const body = {
      email: email,
      password: password,
    };

    const apiUrlLogin = "http://localhost:5678/api/users/login";
    const fetchHandler = async () => {
      try {
        const response = await fetch(apiUrlLogin, {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        tokenAuth(data.userId, data.token, response.status);
      } catch (error) {
        console.error(error);
      }
    };
    await fetchHandler();
    await checkLocalStorage();
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const email = loginForm.querySelector("#email").value;
    const password = loginForm.querySelector("#password").value;

    if (!email || !password) {
      loginError.innerHTML =
        "Veuillez entrer un email et un mot de passe valide";
      return;
    }
    await loginUser(email, password);
  }

  function tokenAuth(userId, token, status) {
    localStorage.setItem("userId", userId);
    localStorage.setItem("token", token);
    localStorage.setItem("status", status);
  }

  async function checkLocalStorage() {
    const token = await localStorage.getItem("token");

    if (token === "undefined") {
      loginError.innerHTML = textError;
    } else {
        const message = "Connexion réussie ! Vous êtes connecté.";
        const url = `/FrontEnd/index.html?message=${encodeURIComponent(message)}`;
        document.location = url;
    }
  }

  loginButton.addEventListener("click", handleSubmit);
});
