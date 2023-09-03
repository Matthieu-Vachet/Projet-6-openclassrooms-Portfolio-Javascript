// import { getTokenFromApi } from "./api.js"

import { getTokenFromApi } from "./api.js"

const email = document.getElementById("email")
const password = document.getElementById("password")
const submitBtn = document.querySelector(".login-btn")


const loginError = document.querySelector(".login-error")

let emailInput = ""
let passwordInput = ""



email.addEventListener("input", (e) => {
    emailInput = e.target.value
})

password.addEventListener("input", (e) => {
    passwordInput = e.target.value
})

submitBtn.addEventListener("click",  async (e) => {
    e.preventDefault()
    let user = { "email": emailInput, "password": passwordInput };

    const responseForLogin = await getTokenFromApi(user)
    if (!responseForLogin.ok || !emailInput || !passwordInput) {
        loginError.innerHTML = "Veuillez entrer un email et un mot de passe valide";

    } else {

    let userOnline = await responseForLogin.json()
  
    sessionStorage.setItem("userOnline" , JSON.stringify(userOnline))
    window.location.href="/index.html";

    }
})
