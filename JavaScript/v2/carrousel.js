const botonIzq = document.getElementById("izquierda");
const botonDer = document.getElementById("derecha");
const cardCurso = document.querySelectorAll(".cardCurso");


botonDer.addEventListener("click", () => {
    const container = document.getElementById("scrollCursos");
    const desplazamiento = container.offsetWidth;
    const direccion = 1;
    const nuevoDesplazamiento = container.scrollLeft + direccion * desplazamiento;

    gsap.to(container, {scrollLeft: nuevoDesplazamiento, duration: 0.5, ease: 'power2.inOut'});

})

botonIzq.addEventListener("click", () => {
    const container = document.getElementById("scrollCursos");
    const desplazamiento = container.offsetWidth;
    const direccion = -1;
    const nuevoDesplazamiento = container.scrollLeft + direccion * desplazamiento;

    gsap.to(container, {scrollLeft: nuevoDesplazamiento, duration: 0.5, ease: 'power2.inOut'});

})
