let vh = window.innerWidth;
var posiciones = [];
const bolasTotales = 12;
const presentacion = document.getElementById("presentacion");

for (let i = 0; i < bolasTotales; i++) {
    const bola = document.createElement("div");
    bola.classList.add('bola');

    let diametro;
    let posicion = { x: 0, y: 0 };
    // Creo puntos personalizados y guardo sus coordenadas ((del punto arriba a la izquierda). (Origen del div))
    switch (i) {
        case 0:
            diametro = 80;
            posicion.x = pixelsToVW(85);
            posicion.y = -pixelsToVH(diametro / 2);
            bola.classList.add('bola0');

            break;
        case 1:
            diametro = 70;
            posicion.x = pixelsToVW(358);
            posicion.y = pixelsToVH(8);
            bola.classList.add('bola1');

            break;
        case 2:
            diametro = 20;
            posicion.x = pixelsToVW(700);
            posicion.y = pixelsToVH(-40);
            bola.classList.add('bola2');

            break;
        case 3:
            diametro = 20;
            posicion.x = pixelsToVW(600);
            posicion.y = pixelsToVH(110);
            bola.classList.add('bola3');

            break;
        case 4:
            diametro = 10;
            posicion.x = pixelsToVW(355);
            posicion.y = pixelsToVH(290);
            bola.classList.add('bola4');

            break;
        case 5:
            diametro = 130;
            posicion.x = pixelsToVW(200);
            posicion.y = pixelsToVH(330);
            bola.classList.add('bola5');

            break;
        case 6:
            diametro = 15;
            posicion.x = pixelsToVW(100);
            posicion.y = pixelsToVH(460);
            bola.classList.add('bola6');

            break;
        case 7:
            diametro = 90;
            posicion.x = pixelsToVW(520);
            posicion.y = pixelsToVH(280);
            bola.classList.add('bola7');

            break;
        case 8:
            diametro = 35;
            posicion.x = pixelsToVW(920);
            posicion.y = pixelsToVH(40);
            bola.classList.add('bola8');

            break;
        case 9:
            diametro = 140;
            posicion.x = pixelsToVW(1120);
            posicion.y = pixelsToVH(120);
            bola.classList.add('bola9');

            break;
        case 10:
            diametro = 30;
            posicion.x = pixelsToVW(410);
            posicion.y = pixelsToVH(490);
            bola.classList.add('bola10');

            break;
        case 11:
            diametro = 30;
            posicion.x = pixelsToVW(690);
            posicion.y = pixelsToVH(495);
            bola.classList.add('bola11');

            break;
    }

    bola.style.left = `${posicion.x}vw`;
    bola.style.top = `${posicion.y}vh`;

    bola.style.width = `${diametro}px`;
    bola.style.height = `${diametro}px`;

    // Establecemos el centro del objeto y lo guardamos en el array posiciones
    posicion.x += pixelsToVW(diametro / 2);
    posicion.y += pixelsToVH(diametro / 2);
    posiciones.push(posicion);

    document.body.appendChild(bola);
}

for (let i = 0; i < posiciones.length - 1; i++) {
    //Creo las uniones entre los puntos usando el array que contiene los centros 
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const color = " rgb(100, 100, 100)";

    // Coordinación de las bifurcaciones para que se dibujen solo lineas específicas.
    switch (i) {
        case 1:
            const linea1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
            linea1.classList.add('linea');
            linea1.setAttribute("x1", `${posiciones[i].x}vw`);
            linea1.setAttribute("y1", `${posiciones[i].y}vh`);
            linea1.setAttribute("x2", `${posiciones[i + 1].x}vw`);
            linea1.setAttribute("y2", `${posiciones[i + 1].y}vh`);
            linea1.setAttribute("stroke", `${color}`);
            linea1.setAttribute("stroke-width", "1");
            svg.appendChild(linea1);
            document.body.appendChild(svg);

            const linea2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
            linea2.classList.add('bifurcacion');
            linea2.setAttribute("x1", `${posiciones[i].x}vw`);
            linea2.setAttribute("y1", `${posiciones[i].y}vh`);
            linea2.setAttribute("x2", `${posiciones[i + 2].x}vw`);
            linea2.setAttribute("y2", `${posiciones[i + 2].y}vh`);
            linea2.setAttribute("stroke", `${color}`);
            linea2.setAttribute("stroke-width", "1");

            svg.appendChild(linea2);
            document.body.appendChild(svg);
            break;
        case 2:
            svg.remove();
            break;
        case 4:
            const linea3 = document.createElementNS("http://www.w3.org/2000/svg", "line");
            linea3.classList.add('linea');
            linea3.setAttribute("x1", `${posiciones[i].x}vw`);
            linea3.setAttribute("y1", `${posiciones[i].y}vh`);
            linea3.setAttribute("x2", `${posiciones[i + 1].x}vw`);
            linea3.setAttribute("y2", `${posiciones[i + 1].y}vh`);
            linea3.setAttribute("stroke", `${color}`);
            linea3.setAttribute("stroke-width", "1");
            svg.appendChild(linea3);
            document.body.appendChild(svg);

            const linea4 = document.createElementNS("http://www.w3.org/2000/svg", "line");
            linea4.classList.add('bifurcacion2');
            linea4.setAttribute("x1", `${posiciones[i].x}vw`);
            linea4.setAttribute("y1", `${posiciones[i].y}vh`);
            linea4.setAttribute("x2", `${posiciones[i + 3].x}vw`);
            linea4.setAttribute("y2", `${posiciones[i + 3].y}vh`);
            linea4.setAttribute("stroke", `${color}`);
            linea4.setAttribute("stroke-width", "1");
            svg.appendChild(linea4);
            document.body.appendChild(svg);
            break;
        case 5:
            const linea5 = document.createElementNS("http://www.w3.org/2000/svg", "line");
            linea5.classList.add('linea');
            linea5.setAttribute("x1", `${posiciones[i].x}vw`);
            linea5.setAttribute("y1", `${posiciones[i].y}vh`);
            linea5.setAttribute("x2", `${posiciones[i + 1].x}vw`);
            linea5.setAttribute("y2", `${posiciones[i + 1].y}vh`);
            linea5.setAttribute("stroke", `${color}`);
            linea5.setAttribute("stroke-width", "1");
            svg.appendChild(linea5);
            document.body.appendChild(svg);

            const linea6 = document.createElementNS("http://www.w3.org/2000/svg", "line");
            linea6.classList.add('bifurcacion3');
            linea6.setAttribute("x1", `${posiciones[i].x}vw`);
            linea6.setAttribute("y1", `${posiciones[i].y}vh`);
            linea6.setAttribute("x2", `${posiciones[i + 5].x}vw`);
            linea6.setAttribute("y2", `${posiciones[i + 5].y}vh`);
            linea6.setAttribute("stroke", `${color}`);
            linea6.setAttribute("stroke-width", "1");
            svg.appendChild(linea6);
            document.body.appendChild(svg);
            break;
        case 6:
            svg.remove()
            break;
        case 7:
            const linea7 = document.createElementNS("http://www.w3.org/2000/svg", "line");
            linea7.classList.add('bifurcacion2Linea');
            linea7.setAttribute("x1", `${posiciones[i].x}vw`);
            linea7.setAttribute("y1", `${posiciones[i].y}vh`);
            linea7.setAttribute("x2", `${posiciones[i + 1].x}vw`);
            linea7.setAttribute("y2", `${posiciones[i + 1].y}vh`);
            linea7.setAttribute("stroke", `${color}`);
            linea7.setAttribute("stroke-width", "1");
            svg.appendChild(linea7);
            document.body.appendChild(svg);
            break;
        case 9:
            svg.remove()
            break;
        case 10:
            const linea8 = document.createElementNS("http://www.w3.org/2000/svg", "line");
            linea8.classList.add('bifurcacion3Linea');
            linea8.setAttribute("x1", `${posiciones[i].x}vw`);
            linea8.setAttribute("y1", `${posiciones[i].y}vh`);
            linea8.setAttribute("x2", `${posiciones[i + 1].x}vw`);
            linea8.setAttribute("y2", `${posiciones[i + 1].y}vh`);
            linea8.setAttribute("stroke", `${color}`);
            linea8.setAttribute("stroke-width", "1");
            svg.appendChild(linea8);
            document.body.appendChild(svg);
            break;
        case 11:
            svg.remove()
            break;
        default:
            const linea = document.createElementNS("http://www.w3.org/2000/svg", "line");
            linea.classList.add('linea');
            linea.setAttribute("x1", `${posiciones[i].x}vw`);
            linea.setAttribute("y1", `${posiciones[i].y}vh`);
            linea.setAttribute("x2", `${posiciones[i + 1].x}vw`);
            linea.setAttribute("y2", `${posiciones[i + 1].y}vh`);
            linea.setAttribute("stroke", `${color}`);
            linea.setAttribute("stroke-width", "1");
            svg.appendChild(linea);
            document.body.appendChild(svg);
            break;
    }
}

/* -------------------------- Fondo -------------------------- */

const timelineBolas = gsap.timeline();

/* -------- Inicio Automático */
const bienvenida = document.getElementById('bienvenidaH2');
const fotoPerfil = document.getElementById("perfil");
const fondo = document.getElementById("fondo");
const fondoPresentacion = document.getElementById("presentacion");

timelineBolas
    .to(".bola0", { duration: 0.5, opacity: 1, delay: 1 })
    .to(".bola1", { duration: 0.5, opacity: 1 })
    .to(".bola2", { duration: 0.5, opacity: 1 })
    .to(".bola3", { duration: 0.5, opacity: 1 }, "-=0.2")
    .to(".bola4", { duration: 0.5, opacity: 1 }, "+=0.5")
    .to(".bola5", { duration: 0.5, opacity: 1 }, "+=0.5")
    .to(".bola6", { duration: 0.5, opacity: 1 }, "+=0.5")
    .to(".bola7", { duration: 0.5, opacity: 1 }, "-=1.5")
    .to(".bola8", { duration: 0.5, opacity: 1 }, "-=1")
    .to(".bola9", { duration: 0.5, opacity: 1 }, "+=0.5")
    .to(".bola10", { duration: 0.5, opacity: 1 }, "-=1")
    .to(".bola11", { duration: 0.5, opacity: 1 }, "-=1")
    .to(".button", { duration: 0.5, opacity: 0, stagger: { each: 1, from: "end" } })
    .to(bienvenida, { duration: 0.5, opacity: 0, }, "-=0.25")
    .to(fotoPerfil, { duration: 0.5, opacity: 0, }, "-=0.5")

    .to(fondoPresentacion, {
        background: "radial-gradient(circle,rgba(0, 0, 0, 0.2) 70%,rgba(0, 0, 0, 0.1) 100%);", duration: 0.5,

    }, "-=1")
    .to(fondo, {
        duration: 0.5, opacity: 1,
        onComplete: () => {
            window.location.href = "./rutas/v2/v2.html";
        }
    })

const lineas = document.querySelectorAll('.linea');
const timeline = gsap.timeline();

lineas.forEach((linea) => {
    const longitud = linea.getTotalLength();

    gsap.set(linea, { strokeDasharray: longitud, strokeDashoffset: longitud });
    timeline.to(linea, { duration: 0.5, strokeDashoffset: 0, ease: "power1.inOut", delay: 0.5 });
});

const bifurcacion = document.querySelector('.bifurcacion');
const longitud1 = bifurcacion.getTotalLength();
gsap.set(bifurcacion, { strokeDasharray: longitud1, strokeDashoffset: longitud1 });
gsap.to(bifurcacion, { duration: 1, strokeDashoffset: 0, ease: "power1.inOut", delay: 1.5 });

const bifuracion2 = document.querySelector('.bifurcacion2');
const longitud2 = bifuracion2.getTotalLength();
gsap.set(bifuracion2, { strokeDasharray: longitud2, strokeDashoffset: longitud2 });
gsap.to(bifuracion2, { duration: 1, strokeDashoffset: 0, ease: "power1.inOut", delay: 3.5 });

const bifurcacion2Linea = document.querySelector('.bifurcacion2Linea');
const longitud3 = bifurcacion2Linea.getTotalLength();
gsap.set(bifurcacion2Linea, { strokeDasharray: longitud3, strokeDashoffset: longitud3 });
gsap.to(bifurcacion2Linea, { duration: 1, strokeDashoffset: 0, ease: "power1.inOut", delay: 4 });

const bifuracion3 = document.querySelector('.bifurcacion3');
const longitud4 = bifuracion3.getTotalLength();
gsap.set(bifuracion3, { strokeDasharray: longitud4, strokeDashoffset: longitud4 });
gsap.to(bifuracion3, { duration: 1, strokeDashoffset: 0, ease: "power1.inOut", delay: 4.5 });

const bifurcacion3Linea = document.querySelector('.bifurcacion3Linea');
const longitud5 = bifurcacion3Linea.getTotalLength();
gsap.set(bifurcacion3Linea, { strokeDasharray: longitud5, strokeDashoffset: longitud5 });
gsap.to(bifurcacion3Linea, { duration: 1, strokeDashoffset: 0, ease: "power1.inOut", delay: 5 });

/* ----------- Conversor */
function pixelsToVW(pixels) {
    const windowWidthInPixels = window.innerWidth;
    const vwValue = (pixels / windowWidthInPixels) * 100;
    return vwValue;
}

function pixelsToVH(pixels) {
    const windowHeightInPixels = window.innerHeight;
    const vhValue = (pixels / windowHeightInPixels) * 100;
    return vhValue;
}

// ---------------------------- Presentacion ---------------------------- //
const tlPresentacion = gsap.timeline();
const hola = document.getElementById('hola');
const miNombreEs = document.getElementById('miNombreEs');
const nombre = document.getElementById('nombre');

// ---------- Iniciar ---------- //
const iniciar = document.getElementById('iniciar');
const tliniciar = gsap.timeline();


// ---------- Animacion | Presentacion //
tlPresentacion
    .to(hola, {
        opacity: 0, delay: 1, duration: 1, scale: 10,
        onComplete: () => {
            hola.style.display = "none";
        }
    })
    .to(".button", { opacity: 1, duration: 0.5, stagger: 0.5 })
    .fromTo(miNombreEs, { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1")
    .fromTo(nombre, { opacity: 0 }, { opacity: 1, scale: 1.2, duration: 1 }, "-=0.5")
    .fromTo(bienvenida, { opacity: 0 },
        {
            opacity: 1, duration: 1,
            onComplete: () => {
                gsap.to(miNombreEs, { opacity: 0, duration: 1 })
                gsap.to(nombre, { opacity: 0, duration: 1, delay: 0.75 })
            }
        })
    .fromTo(fotoPerfil, { opacity: 0, xPercent: -10, yPercent: 80, scale: 0.5 },
        { opacity: 1, scale: 1.8, xPercent: 40, yPercent: 20, duration: 0.5 }, "-=1")


// ---------- Animacion | Iniciar //


iniciar.addEventListener("click", () => {
    iniciar.style.cursor = "auto";
    document.getElementById("descargarBtn").style.cursor = "auto";
    tliniciar
        .to(".button", { opacity: 0, duration: 1, stagger: { each: 1, from: "end" } })
        .to(bienvenida, { opacity: 0, duration: 1 }, "-=4")
        .to(fotoPerfil, { opacity: 0, duration: 1 }, "-=1.5")
        .to(nombre, { opacity: 0, duration: 1 }, "-=1.5")
        .to(miNombreEs, { opacity: 0, duration: 1 }, "-=1.5")

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

