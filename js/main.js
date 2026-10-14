let btnModo = document.getElementById ("btnModo")
let funcionTema = true
let styles = getComputedStyle(document.documentElement)
let colorBlanco = styles.getPropertyValue("--color-blanco")
let colorPrincipal = styles.getPropertyValue("--color-principal")
let verdeOscuro = styles.getPropertyValue("--verde-oscuro")

let year = document.getElementById("year").textContent = new Date().getFullYear();

function modoOscuro() {
    funcionTema = !funcionTema;
    if (funcionTema === false) {
        document.body.style.backgroundColor = verdeOscuro;
        document.body.style.color = colorBlanco;
        btnModo.textContent = "Tema Claro"
    }
    else {
        document.body.style.backgroundColor = ""
        btnModo.textContent = "Tema Oscuro"
        document.body.style.color = colorPrincipal;
    }
}
btnModo.addEventListener("click", modoOscuro)

//JS de Iyana
let total = document.getElementById("total");
let ruta = document.getElementById("ruta");
let personas = document.getElementById("personas");

let precioTotal = 0;


function actualizarPrecio(rutaEscogida) {

    let elementoRutaEscogida = document.getElementById(rutaEscogida);

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

//                  scrip para el apartado de materiales
//============================================================================

let lista = document.getElementById("list");
let listaMaterial = document.getElementById("listaMaterial");
let resultado = document.getElementById("resultado");

const materiales = {
    facil: [
        "Calzado cómodo",
        "Agua (1L)",
        "Gorra",
        "Protector solar"
    ],
    media: [
        "Botas de montaña",
        "Agua (1.5L)",
        "Chaqueta impermeable",
        "Bastones",
        "Comida de ruta"
    ],
    dificil: [
        "Botas de montaña",
        "Agua (2L)",
        "Chaqueta impermeable",
        "Bastones",
        "Frontal",
        "Mapa y brújula",
        "Comida de ruta"
    ]
};

// Show the checkboxes
function dificultad() {
    listaMaterial.innerHTML = "";
    resultado.textContent = "";

    if (lista.value === "select") return;

    materiales[lista.value].forEach(function (item) {
        let label = document.createElement("label");
        let checkbox = document.createElement("input");

        checkbox.type = "checkbox";
        checkbox.addEventListener("change", contar);

        label.appendChild(checkbox);
        label.append(" " + item);

        listaMaterial.appendChild(label);
        listaMaterial.appendChild(document.createElement("br"));
    });
}

// Show only "X of Y"
function contar() {
    let marcados = listaMaterial.querySelectorAll("input:checked").length;
    let total = materiales[lista.value].length;

    resultado.textContent = `Estas equipado con ${marcados} de ${total }`;
}

lista.addEventListener("change", dificultad);
resultado.addEventListener("click", contar);


