let btnModo = document.getElementById ("btnModo")
let funcionTema = true

let styles = getComputedStyle(document.documentElement)
let colorBlanco = styles.getPropertyValue("--color-blanco")
let colorPrincipal = styles.getPropertyValue("--color-principal")
let verdeOscuro = styles.getPropertyValue("--verde-oscuro")

let tituloPrincipal = document.querySelector("h1")
let labels = document.querySelectorAll("label")
let textosGenerales = document.querySelectorAll("p")

let year = document.getElementById("year").textContent = new Date().getFullYear();

function modoOscuro() {
    funcionTema = !funcionTema;
    if (funcionTema === false) {
        document.body.style.backgroundColor = verdeOscuro;
        tituloPrincipal.style.color = colorBlanco;
        labels.forEach(label => {label.style.color = colorBlanco});
        textosGenerales.forEach(textosGenerales => {textosGenerales.style.color = colorBlanco});
        btnModo.textContent = "Tema Claro"
    }
    else {
        document.body.style.backgroundColor = ""
        tituloPrincipal.style.color = "";
        labels.forEach(label => {label.style.color = ""});
        textosGenerales.forEach(textosGenerales => {textosGenerales.style.color = ""});
        btnModo.textContent = "Tema Oscuro"
    }
}
btnModo.addEventListener("click", modoOscuro)

//JS de Iyana
let total = document.getElementById("total");
let ruta = document.getElementById("ruta");
let personas = document.getElementById("personas");
let errorNombre = document.getElementById("e-nombre");
let errorMail = document.getElementById("e-email");
let errorPersonas = document.getElementById("e-personas");
let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let exito = document.getElementById("exito");
let nombreRuta = document.getElementById(ruta.value).textContent;

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
    mensajeError()
});

//                  script para el apartado de materiales
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

//JS de Rubén
let corazones = document.querySelectorAll(".corazon");
let favoritos = 0; 
let contador = document.querySelector(".favoritos");

for(let i = 0; i < corazones.length; i++) {
   let unCorazon = corazones[i];
    unCorazon.addEventListener("click", function() {
        if(unCorazon.textContent === "♡") {
         unCorazon.textContent = "❤️"
         favoritos++
      } else {
         unCorazon.textContent = "♡"  
         favoritos--
      }
      contador.textContent = "Favoritos: " + favoritos;
    });
};

// hacemos una escucha con boton change para que el corazon se marque y sume un favorito 
// o se desmarque y reste un favorito dependiendo del click 
// sobre el corazón 

let level = document.querySelector("#level");
let sendas = document.querySelectorAll(".senda");
let verde = "facil";
let rojo = "dificil";
let amarillo = "media";

level.addEventListener("change", function() {
    let nivelDificultad = level.value; 
// creramos bucle for que nos recorra las sendas y nos las guarde
//  en la variable sendasDificultad
    for(let i = 0; i < sendas.length; i++) {
       let sendasDificultad = sendas[i].classList.contains("facil") ? verde : 
                             sendas[i].classList.contains("media") ? amarillo : rojo;
// y con un bucle switch  decimos que enseñe o oculte los elementos que coincidan
       switch(nivelDificultad) {
          case "facil":
             if(sendasDificultad === verde) {
                sendas[i].style.removeProperty("display");
               } else {
                sendas[i].style.display = "none";
             }
             break;
          case "media":
             if(sendasDificultad === amarillo) {
                sendas[i].style.display = ""; 
             } else {
                sendas[i].style.display = "none";
             }
             break;
          case "dificil":
             if(sendasDificultad === rojo) {
                sendas[i].style.display = ""; 
             } else {
                sendas[i].style.display = "none";
             }
             break;
          default:
             sendas[i].style.display = "";
       }
    } 
   });
