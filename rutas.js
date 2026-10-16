
//JS de la página Rutas

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////***** JS SANDRA  Y RUBEN PROJECT FANTACTIC ******//////////////////////////////////////////////////////////////////////

// JS de la página Rutas

const level = document.querySelector("#level");
const sendas = document.querySelectorAll(".senda");
const corazones = document.querySelectorAll(".corazon");
const contador = document.querySelector(".favoritos");

// Cuenta los favoritos del nivel elegido
function mostrarFavoritosSegunNivel() {
    const nivel = level.value;
    let total = 0;

    for (let i = 0; i < sendas.length; i++) {
        const corazon = sendas[i].querySelector(".corazon");
        if (!corazon) continue;

        const esFavorita = corazon.textContent !== "♡";
        const coincide = nivel === "todas" || sendas[i].classList.contains(nivel);

        if (esFavorita && coincide) total++;
    }

    contador.textContent = "Favoritos: " + total;
}

// Marcar / desmarcar corazón
for (let i = 0; i < corazones.length; i++) {
    const unCorazon = corazones[i];
    unCorazon.addEventListener("click", function () {
        unCorazon.textContent = unCorazon.textContent === "♡" ? "❤️" : "♡";
        mostrarFavoritosSegunNivel();
    });
}

// Filtrar sendas por dificultad
level.addEventListener("change", function () {
    const nivel = level.value;

    for (let i = 0; i < sendas.length; i++) {
        const coincide = nivel === "todas" || sendas[i].classList.contains(nivel);
        sendas[i].style.display = coincide ? "" : "none";
    }

    mostrarFavoritosSegunNivel();
});

// Contador correcto al cargar la página
mostrarFavoritosSegunNivel();