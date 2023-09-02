function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    const togglePassword = document.querySelector(".toggle-password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.innerHTML = '<i class="fa fa-eye-slash fa-xl"></i>';
    } else {
        passwordInput.type = "password";
        togglePassword.innerHTML = '<i class="fa fa-eye fa-xl"></i>';
    }
}