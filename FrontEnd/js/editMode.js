
    const token = localStorage.getItem("token");
    const filter = document.querySelector(".button-filtre");
    const worksTitle = document.querySelector(".works-title");
    const intro = document.querySelector("#introduction figure");
  
    //fonction pour générer le mode édition
    export function modeEditor() {
      const editorBar = document.createElement("div");
      editorBar.className = "mode-edition";
      editorBar.innerHTML = `<a class="btn-edition"> <i class="fa-sharp fa-regular fa-pen-to-square"></i>Mode Edition</a>
          <button class="btn-publish">publier les changements</button>`;
  
      if (worksTitle) {
        worksTitle.innerHTML += `<a class="btn-edit edit-works"> <i class="fa-sharp fa-regular fa-pen-to-square"></i>modifier</a>`;
      }
  
      if (intro) {
        intro.innerHTML += `<a class="btn-edit edit-image"> <i class="fa-sharp fa-regular fa-pen-to-square"></i>modifier</a>`;
      }
  
      if (filter) {
        filter.style.visibility = "hidden";
      }
  
      document.body.prepend(editorBar);
    }
  
    if (token) {
      modeEditor();
  
      const logout = document.getElementById("login");
      logout.addEventListener("click", (event) => {
        logoutUser(event);
      });
    }
  
    // Fonction pour rediriger vers la page d'accueil
    function redirectToHome() {
      window.location.href = "/FrontEnd/index.html";
    }
  
    // Fonction pour déconnecter l'utilisateur
    export function logoutUser(event) {
      event.preventDefault(); // Empêcher le comportement par défaut du lien
  
      // Supprimer le token de l'objet localStorage
      localStorage.removeItem("token");
      // Rediriger vers la page d'accueil (index.html)
      redirectToHome();
    }
  
  