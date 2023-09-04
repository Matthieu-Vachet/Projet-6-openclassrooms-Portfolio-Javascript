export const showModalSuppr = (message) => {
    // Création des éléments de la modal
    const aside = document.createElement("aside");
  
    const confirmationModal = document.createElement("div");
    confirmationModal.id = "confirmation-modal";
    confirmationModal.classList.add("modal");
  
    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
  
    const title = document.createElement("h1");
    title.innerText = "Confirmation de suppression";
  
    const messageText = document.createElement("p");
    messageText.innerText = message;
  
    const confirmButton = document.createElement("button");
    confirmButton.id = "confirm-delete";
    confirmButton.classList.add("confirm-button");
    confirmButton.innerText = "Supprimer";
  
    const cancelButton = document.createElement("button");
    cancelButton.id = "cancel-delete";
    cancelButton.classList.add("cancel-button");
    cancelButton.innerText = "Annuler";
  
    // Ajout des éléments à la modal
    modalContent.appendChild(title);
    modalContent.appendChild(messageText);
    modalContent.appendChild(confirmButton);
    modalContent.appendChild(cancelButton);
  
    confirmationModal.appendChild(modalContent);
    aside.appendChild(confirmationModal);
  
    // Ajout de la modal au document
    document.body.appendChild(aside);
  
    // Gestion des événements des boutons
    confirmButton.addEventListener("click", () => {
      // Code à exécuter lorsque le bouton de confirmation est cliqué
      // (par exemple, supprimer la photo)
      // ...
  
      closeModal();
    });
  
    cancelButton.addEventListener("click", () => {
      closeModal();
    });
  
    const closeModal = () => {
      // Suppression de la modal du document
      document.body.removeChild(aside);
    };
  };


  export const getUserConfirmationSuppr = () => {
    return new Promise((resolve) => {
      const confirmButton = document.getElementById("confirm-delete");
      const cancelButton = document.getElementById("cancel-delete");
  
      confirmButton.addEventListener("click", () => {
        resolve(true); // L'utilisateur a confirmé la suppression
      });
  
      cancelButton.addEventListener("click", () => {
        resolve(false); // L'utilisateur a annulé la suppression
      });
    });
  };



  export const showModalConfirm = (message) => {
    // Création des éléments de la modal
    const aside = document.createElement("aside");
  
    const confirmationModal = document.createElement("div");
    confirmationModal.id = "confirmation-modal";
    confirmationModal.classList.add("modal");
  
    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
  
    const title = document.createElement("h1");
    title.innerText = "Confirmation";
  
    const messageText = document.createElement("p");
    messageText.innerText = message;
  
    // Ajout des éléments à la modal
    modalContent.appendChild(title);
    modalContent.appendChild(messageText);
  
    confirmationModal.appendChild(modalContent);
    aside.appendChild(confirmationModal);
  
    // Ajout de la modal au document
    document.body.appendChild(aside);
  };
