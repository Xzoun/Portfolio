// -------------------------- Inicio Smooth
const start = document.getElementById("start");
gsap.to(start, { opacity: 1, duration: 5 });

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

// -------------------------- Sectores
const sectores = document.querySelectorAll(".sector");

const lineas = document.querySelectorAll('.linea');
const timeline = gsap.timeline();

lineas.forEach((linea) => {
    const longitud = linea.getTotalLength();

    gsap.set(linea, { strokeDasharray: longitud, strokeDashoffset: longitud });
    timeline.to(linea, { duration: 1, strokeDashoffset: 0, ease: "power1.inOut", delay: 1 });
});