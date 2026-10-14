let total = document.getElementById("total");
let ruta = document.getElementById("ruta");
let personas = document.getElementById("personas");
let errorNombre = document.getElementById("e-nombre");
let errorMail = document.getElementById("e-email");
let errorPersonas = document.getElementById("e-personas");
let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let exito = document.getElementById("exito");

let precioTotal = 0;

let elementoRutaEscogida;

function actualizarPrecio(rutaEscogida) {

    elementoRutaEscogida = document.getElementById(rutaEscogida);

    let precioActividad = parseInt(elementoRutaEscogida.querySelector(".precio").textContent);

    precioTotal = personas.value * precioActividad;

    total.textContent = `Total: ${precioTotal} €`;
};

ruta.addEventListener("change", function () {
    console.log(ruta.value);
    actualizarPrecio(ruta.value);
});

personas.addEventListener("change", function () {
    actualizarPrecio(ruta.value)
});

actualizarPrecio(ruta.value);



function mensajeError() {

    errorNombre.textContent = ``;
    errorMail.textContent = ``;
    exito.textContent = ``;

    if (nombre.value === "" && email.value === "") {
        errorNombre.textContent = `Escribe tu nombre.`;
        errorMail.textContent = `Escribe un correo válido.`;
    }

    if (nombre.value === "") {
        errorNombre.textContent = `Escribe tu nombre.`;
    }

    if (email.value === "") {
        errorMail.textContent = `Escribe un correo válido.`;
    } else if (!validarEmail(email.value)) {
        errorMail.textContent = "Escribe un correo válido";
    } else {
        exito.textContent = `Plaza reservada para ${personas.value} persona(s) en ${elementoRutaEscogida.textContent}`;
        exito.style.display = "block";
    }
};

function validarEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
};

btnApuntarme.addEventListener("click", function (e) {
    event.preventDefault();
    mensajeError()
});