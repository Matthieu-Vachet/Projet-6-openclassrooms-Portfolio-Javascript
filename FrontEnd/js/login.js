

// Attend que le document soit complètement chargé
document.addEventListener("DOMContentLoaded", function () {
  // Sélectionne le formulaire de connexion
  const loginForm = document.querySelector(".login-form");
  // Sélectionne l'élément d'erreur de connexion
  const loginError = document.querySelector(".login-error");
  // Sélectionne le bouton de connexion
  const loginButton = document.querySelector(".login-btn");

  // Message d'erreur à afficher
  const textError = "Email ou mot de passe incorrect";

  // Fonction asynchrone pour connecter l'utilisateur
  async function loginUser(email, password) {
    // Crée un objet avec l'email et le mot de passe
    const body = {
      email: email,
      password: password,
    };

    // URL de l'API de connexion
    const apiUrlLogin = "http://localhost:5678/api/users/login";

    // Fonction qui envoie une requête POST à l'API de connexion
    const fetchHandler = async () => {
      try {
        // Envoie la requête POST avec les données JSON
        const response = await fetch(apiUrlLogin, {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        });
        // Convertit la réponse en JSON
        const data = await response.json();
        // Appelle la fonction tokenAuth avec les informations d'authentification
        tokenAuth(data.userId, data.token, response.status);
      } catch (error) {
        console.error(error);
      }
    };
    // Appelle la fonction fetchHandler
    await fetchHandler();
    // Vérifie le stockage local
    await checkLocalStorage();

  
  }

  // Fonction pour traiter la soumission du formulaire
  async function handleSubmit(event) {
    // Empêche le comportement par défaut du formulaire
    event.preventDefault();

    // Récupère les valeurs des champs email et password du formulaire
    const email = loginForm.querySelector("#email").value;
    const password = loginForm.querySelector("#password").value;

    // Vérifie si les champs email et password sont vides
    if (!email || !password) {
      // Affiche un message d'erreur dans l'élément d'erreur de connexion
      loginError.innerHTML =
        "Veuillez entrer un email et un mot de passe valide";
      return;
    }
    // Appelle la fonction loginUser avec l'email et le mot de passe
    await loginUser(email, password);
  }

  // Fonction pour gérer le jeton d'authentification
  function tokenAuth(userId, token, status) {
    // Stocke l'identifiant de l'utilisateur, le jeton et le statut dans le stockage local
    localStorage.setItem("userId", userId);
    localStorage.setItem("token", token);
    localStorage.setItem("status", status);
  }

  // Fonction pour vérifier le stockage local
  async function checkLocalStorage() {
    // Récupère le jeton d'authentification du stockage local
    const token = await localStorage.getItem("token");

    // Vérifie si le jeton est "undefined"
    if (token === "undefined") {
      // Affiche un message d'erreur dans l'élément d'erreur de connexion
      loginError.innerHTML = textError;
    } else {
      // Construit l'URL de redirection avec un message encodé
      const message = "Connexion réussie ! Vous êtes connecté.";
      const url = `/FrontEnd/index.html?message=${encodeURIComponent(message)}`;
      // Redirige vers l'URL de redirection
      document.location = url;
    }
  }

    // Ajoute un écouteur d'événement à l'événement click du bouton de connexion
    loginButton.addEventListener("click", handleSubmit);
  });

