/*
 * Cette fonction permet de basculer la visibilité du mot de passe dans un champ de saisie.
 */
function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    const togglePassword = document.querySelector(".toggle-password");
  
    // Vérifie le type actuel du champ de saisie du mot de passe
    if (passwordInput.type === "password") {
      // Si le type est "password", le change en "text" pour rendre le mot de passe visible
      passwordInput.type = "text";
      togglePassword.innerHTML = '<i class="fa fa-eye-slash fa-xl"></i>'; // Change l'icône pour montrer que le mot de passe est maintenant visible
          } else {
      // Si le type est "text", le change en "password" pour masquer le mot de passe
      passwordInput.type = "password";
      togglePassword.innerHTML = '<i class="fa fa-eye fa-xl"></i>'; // Change l'icône pour montrer que le mot de passe est maintenant masqué
          }
  }