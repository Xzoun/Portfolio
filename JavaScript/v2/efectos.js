// ---------- Presentacion ---------- //
const tlPresentacion = gsap.timeline();
const hola = document.getElementById('hola');
const miNombreEs = document.getElementById('miNombreEs');
const nombre = document.getElementById('nombre');
const bienvenida = document.getElementById('bienvenidaH2');
const fotoPerfil = document.getElementById("perfil");

// ---------- Iniciar ---------- //
const iniciar = document.getElementById('iniciar');
const fondo = document.getElementById("fondo");
const fondoPresentacion = document.getElementById("presentacion");
const tliniciar = gsap.timeline();


// ---------- Animacion | Presentacion ---------- //


tlPresentacion
    .to(hola, {
        opacity: 0, delay: 2, duration: 2, scale: 10,
        onComplete: () => {
            hola.style.display = "none";
        }
    })
    .fromTo(miNombreEs, { opacity: 0 },
        { delay: 2, opacity: 1, duration: 2 }, "-=4")
    .fromTo(nombre, { opacity: 0 },
        { delay: 2, opacity: 1, scale: 1.2, duration: 2}, "-=3")
    .fromTo(bienvenida, { opacity: 0 },
        {
            delay: 2, opacity: 1, duration: 2,
            onComplete: () => {
                gsap.to(miNombreEs, { opacity: 0, duration: 2 })
                gsap.to(nombre, { opacity: 0, duration: 2, delay: 1.5 })
                gsap.to(".button", { opacity: 1, duration: 2, stagger: 1 })
            }
        })
    .fromTo(fotoPerfil, { opacity: 0, xPercent: -10, yPercent: 80, scale: 0.5 },
        { opacity: 1, scale: 1.8, xPercent: 40, yPercent: 20, duration: 1})


// ---------- Animacion | Iniciar ---------- //


iniciar.addEventListener("click", () => {
    iniciar.style.cursor = "auto";
    document.getElementById("descargarBtn").style.cursor = "auto";
    tliniciar
        .to(".button", { opacity: 0, duration: 1, stagger: { each: 1, from: "end" } })
        .to(bienvenida, { opacity: 0, duration: 1 }, "-=4")
        .to(fotoPerfil, { opacity: 0, duration: 1 }, "-=1.5")

        .to(fondoPresentacion, {
            background: "radial-gradient(circle,rgba(0, 0, 0, 0.2) 70%,rgba(0, 0, 0, 0.1) 100%);", duration: 1,

        }, "-=1")
        .to(fondo, {
            duration: 1, opacity: 1,
            onComplete: () => {
                window.location.href = "./rutas/v2/v2.html";
            }
        }, "-=0.5")
}, { once: true })