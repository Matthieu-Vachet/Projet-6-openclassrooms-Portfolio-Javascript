import { postApi, categories, worksWrapper } from "./api.js";
import { generateGallery } from "./index.js";
import { generateMiniGallery } from "./modal.js";
import { showModalConfirm } from "./modal-message.js";

const fileZone = document.querySelector(".add-file-zone");
const fileInput = document.getElementById("add-file");
const titleInput = document.getElementById("file-title");
const categorieInput = document.getElementById("file-categorie");
const form = document.forms.namedItem("add-form");

let previewIspresent = false;
let imageElement = "";
let imageTitle = "";
let imageCategorie = "";
let file = "";

for (let i in categories) {
  const option = document.createElement("option");
  option.innerText = categories[i].name;
  option.value = categories[i].id;
  categorieInput.append(option);
}

// Previsualisation de l'image

const displayImage = (url) => {
  if (previewIspresent) {
    document.querySelector(".add-file-zone img").remove();
  }

  imageElement = document.createElement("img");
  imageElement.src = url;

  fileZone.querySelector("i").style.display = "none";
  fileZone.prepend(imageElement);
  previewIspresent = true;
};

// Récupération des champs

fileInput.addEventListener("change", (e) => {
  const fileExtensionRegex = /\.(jpe?g|png)$/i;

  if (
    e.target.files.lengh === 0 ||
    !fileExtensionRegex.test(e.target.files[0].name)
  ) {
    return;
  }

  file = e.target.files[0];
  const imageUrl = URL.createObjectURL(file);

  displayImage(imageUrl);
});

titleInput.addEventListener("input", (e) => {
  imageTitle = e.target.value;
});

categorieInput.addEventListener("input", (e) => {
  imageCategorie = e.target.value;
});

// ajout de travaux

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (!imageTitle | !imageCategorie | !imageElement) {
    const error = document.querySelector(".errorChamp");
    error.innerText = "Veuillez remplir tous les champs";
    error.classList.add("errorchamp");
    return;
  }

  if (file.size > 4194304) {
    const error = document.querySelector(".errorChamp");
    error.innerText = "Fichier trop volumineux";
    error.classList.add("errorChamp");
    return;
  } else {

    const userOnline = JSON.parse(sessionStorage.getItem("userOnline"));
    const formData = new FormData(form);

    await postApi(formData, userOnline);
    showModalConfirm("Votre travail a bien été ajouté");
    form.reset();

    imageElement = "";
    imageTitle = "";
    imageCategorie = "";

    displayImage("");

    const newWorks = await worksWrapper();

    generateGallery(newWorks);
    generateMiniGallery(newWorks);

    console.log(newWorks);

    // for (let i = 0; i < trash.length; i++) {
    //   trashListener(trash[i], i);
    // }
  }
  return false;
});
