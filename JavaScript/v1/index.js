const subtituloHTML = document.getElementById("presentacionSubtitulo"),
    descripcionHTML = document.getElementById("presentacionDescripcion"),
    navLinks = document.querySelectorAll(".navbar-nav .nav-link"),
    navbarCollapse = document.querySelector(".navbar-collapse"),
    darkModeBtn = document.getElementById("darkMode"),
    lunaIcono = document.getElementById("lunaIcono");

let frase = "Bienvenido a mi portfolio como desarrollador trainee.",
    intervalo,
    contador = 0;

function escribirSubtitulo() {
    contador++;
    subtituloHTML.innerHTML = frase.slice(0, contador);
    if (contador > frase.length) {
        clearInterval(intervalo);
        frase = "De Cero a Código. Mi Trayectoria en Programación.";
        contador = 0;
        intervalo = setInterval(escribirDescripcion, 100);
    }
}

function escribirDescripcion() {
    contador++;
    descripcionHTML.innerHTML = frase.slice(0, contador);
    if (contador > frase.length) {
        clearInterval(intervalo);
    }
}

window.onload = () => {
    intervalo = setInterval(escribirSubtitulo, 100);
};

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        if (navbarCollapse.classList.contains("show")) {
            navbarCollapse.classList.remove("show");
        }
    });
});

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("Dark");
    darkModeBtn.classList.toggle("Dark");
})









