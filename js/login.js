function logar() {
    let email = document.getElementById("email");
    let senha = document.getElementById("senha");

    if (email.value == "admin@admin.com" && senha.value == "admin") {
        window.location.href = "principal.html"
    }
}