
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// -------------------------- Inicio Smooth
const start = document.getElementById("start");
gsap.to(start, { opacity: 1, duration: 5 });

window.addEventListener('beforeunload', function () {
    gsap.to(window, { scrollTo: 0, duration: 0 });
});
window.onload = function () {
    gsap.to(window, { scrollTo: 0 });

};
// -------------------------- Controlador
const controlador = document.getElementById("controlador");
const botones = document.querySelectorAll(".logo");
const span = document.querySelectorAll(".span");
const animacionesSector = document.querySelectorAll(".animacionSector");

gsap.to(controlador, { scrollTrigger: { trigger: controlador, start: "top top", scrub: 1 }, opacity: 1, duration: 0.5 })

// Seguir trabajando en la corrección del error al hacer click (Hacia arriba)en un boton del controlador
// Este código sólo lo corrige al ir para abajo...
botones.forEach((boton) => {
    boton.addEventListener("click", () => {
        animacionesSector.forEach((animacion) => {
            animacion.style.opacity = 1;

        })
    })
})

// -------------------------- Sectores
const home = document.getElementById("home");
const sectores = document.querySelectorAll(".sector");
for (let i = 0; i < sectores.length; i++) {
    const sectoresTL = gsap.timeline({
        scrollTrigger: {
            trigger: sectores[i],
            start: "top top",
            end: "bottom center",
            scrub: 1,
            pin: animacionesSector[i]
        }
    })
    sectoresTL.fromTo(animacionesSector[i], { opacity: 0 }, { duration: 2, opacity: 1 })
}

// -------------------------- Proyectos
const proyectos = document.querySelectorAll(".cardProject");

const hddDesc = document.getElementById("hddDescripcion");
const saDesc = document.getElementById("saDescripcion");

const saPlay = document.getElementById("saPlay");
const hddPlay = document.getElementById("hddPlay");
const hddAudio = document.getElementById("hddAudio");
const saAudio = document.getElementById("saAudio");

saPlay.addEventListener("click", () => {
    saAudio.play();
});

hddPlay.addEventListener("click", () => {
    hddAudio.play();
});

function handleMouseOver(e) {
    const tarjeta = e.currentTarget;
    if (!tarjeta.hasMouseOver) {
        tarjeta.hasMouseOver = true;
        if (tarjeta == proyectos[0]) {
            gsap.fromTo(hddDesc, { xPercent: 200 }, { xPercent: 0, display: "block", duration: 0.5 })
        } else {
            gsap.fromTo(saDesc, { xPercent: 200 }, { xPercent: 0, display: "block", duration: 0.5 })
        }
        gsap.to(tarjeta, { scale: 1.2, duration: 0.5 });
    }
}

function handleMouseOut(e) {
    const tarjeta = e.currentTarget;
    const relatedTarget = e.relatedTarget;

    if (tarjeta.hasMouseOver && !tarjeta.contains(relatedTarget)) {
        tarjeta.hasMouseOver = false;
        if (tarjeta == proyectos[0]) {
            gsap.to(hddDesc, { xPercent: 200, display: "none", duration: 0.5 });
        } else {
            gsap.to(saDesc, { xPercent: 200, display: "none", duration: 0.5 });
        }
        gsap.to(tarjeta, { scale: 1, duration: 0.5 });
    }
}

proyectos.forEach((proyecto) => {
    proyecto.addEventListener("mouseover", handleMouseOver);
    proyecto.addEventListener("mouseout", handleMouseOut);
});

// -------------------------- Skills

const timelinePrincipal = gsap.timeline({ repeat: -1, repeatDelay: 1 });
const inicioCarrousellSkills = gsap.timeline();
const carrousellSkills = gsap.timeline();
const finalCarrousellSkills = gsap.timeline();

gsap.set(".skill", { opacity: 0, xPercent: -100 });

inicioCarrousellSkills.to(".skill", {
    opacity: 1,
    xPercent: 100,
    duration: 5,
    ease: "linear",
    stagger: 3,
    scale: 1
});

carrousellSkills.to(".skill", {
    xPercent: 300,
    duration: 5,
    ease: "linear",
    stagger: 3,
    scale: 1.6
});

finalCarrousellSkills.to(".skill", {
    opacity: 0,
    xPercent: 500,
    duration: 5,
    ease: "linear",
    stagger: 3,
    scale: 1
});

// Agregar las líneas de tiempo a la línea de tiempo principal
timelinePrincipal
    .add(inicioCarrousellSkills)
    .add(carrousellSkills, "-=23") // Asegura un retraso de 5 segundos entre la primera y la segunda
    .add(finalCarrousellSkills, "-=23"); // Asegura un retraso de 5 segundos entre la segunda y la tercera