
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
// ------------- Se me ocurre verificar la posicion del scroll 
// ------------- si es mayor o igual a la posicion del div al que quiero ir
// ------------- que redireccione a un id en una etiqueta de más arriba
botones.forEach((boton) => {
    boton.addEventListener("click", () => {

        if (boton.classList.contains("uno")) {
            gsap.to(window, { scrollTo: "#skillPos" })
        } else if (boton.classList.contains("dos")) {
            const sobreMiElement = document.getElementById("sobreMi");
            const rect = sobreMiElement.getBoundingClientRect();

            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                gsap.to(window, { scrollTo: "#sobreMiDown" });
                gsap.to(".parrafoSM", { scale: 1, stagger: 1 });
            } else {
                gsap.to(window, { scrollTo: "#sobreMiUp" });
                gsap.fromTo(".parrafoSM", { scale: 0 }, { scale: 1, stagger: 1 });
            }
        } else if (boton.classList.contains("tres")) {
            const sobreMiElement = document.getElementById("estudios");
            const rect = sobreMiElement.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                gsap.to(window, { scrollTo: "#estudiosDown" });
            } else {
                gsap.to(window, { scrollTo: "#estudiosUp" });
            }
        } else if (boton.classList.contains("cuatro")) {
            gsap.to(window, { scrollTo: "#contactoPos" })
        }
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

    sectoresTL.fromTo(animacionesSector[i], { opacity: 0, visibility: "hidden" }, {
        visibility: "visible", duration: 2, opacity: 1
    })
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

function handleMouseOverProject(e) {
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

function handleMouseOutProject(e) {
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
    proyecto.addEventListener("mouseover", handleMouseOverProject);
    proyecto.addEventListener("mouseout", handleMouseOutProject);
});

// -------------------------- Skills
const timelinePrincipal = gsap.timeline({ repeat: -1, repeatDelay: -2 });
const inicioCarrousellSkills = gsap.timeline();
const carrousellSkills = gsap.timeline();
const finalCarrousellSkills = gsap.timeline();
const reallyFinalCarrousellSkills = gsap.timeline();

const skillsDiv = document.getElementById("skillsContainer");
const skillsFixed = document.getElementById("skillsFixed")

gsap.set(".skill", { opacity: 0, left: "-25vw" });

inicioCarrousellSkills.to(".skill", {
    opacity: 0,
    left: "0vw",
    duration: 3,
    ease: "linear",
    stagger: 3,
    scale: 1
});

carrousellSkills.to(".skill", {
    opacity: 1,
    left: "50vw",
    duration: 5,
    ease: "linear",
    stagger: 3,
    scale: 1.6
});

finalCarrousellSkills.to(".skill", {
    opacity: 0,
    left: "75vw",
    duration: 3,
    ease: "linear",
    stagger: 3,
    scale: 1
});

timelinePrincipal
    .add(inicioCarrousellSkills)
    .add(carrousellSkills, "-=23")
    .add(finalCarrousellSkills, "-=23");

function handleMouseOverSkills(e) {
    const div = e.currentTarget;
    if (!div.hasMouseOver) {
        div.hasMouseOver = true;
        gsap.fromTo(skillsFixed, { xPercent: -120 }, { xPercent: 5, visibility: "visible", duration: 0.5 })
    }
}

function handleMouseOutSkills(e) {
    const div = e.currentTarget;
    const hijos = e.relatedTarget;

    if (div.hasMouseOver && !div.contains(hijos)) {
        div.hasMouseOver = false;
        gsap.to(skillsFixed, { xPercent: -120, duration: 0.5, });
    }
}

skillsDiv.addEventListener("mouseover", handleMouseOverSkills);
skillsDiv.addEventListener("mouseout", handleMouseOutSkills);

// -------------------------- Sobre mi
const sobreMiDiv = document.getElementById("sobreMiDescripcion");

const sobreMiTL = gsap.timeline({
    scrollTrigger: { trigger: sobreMiDiv, start: "top top", end: "bottom top", scrub: 1 }
});

sobreMiTL.fromTo(".parrafoSM", { scale: 0 }, { scale: 1, stagger: 1 })