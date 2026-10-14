//JS de la página Rutas
///////////////////////////////////////////////////////////////////////////////
//////////// ****JD CARMEN **** ///////////////////////////////////////////////
let btnModo = document.getElementById ("btnModo")
let funcionTema = true

let styles = getComputedStyle(document.documentElement)
let colorBlanco = styles.getPropertyValue("--color-blanco")
let colorPrincipal = styles.getPropertyValue("--color-principal")
let verdeOscuro = styles.getPropertyValue("--verde-oscuro")
let colorNegro = styles.getPropertyValue("--color-negro")

let tituloPrincipal = document.querySelector("h1")
let tituloSecundario = document.querySelector("h2")
let labels = document.querySelectorAll("label")
let textosGenerales = document.querySelectorAll("p")
let colorFavoritos = document.querySelector(".favoritos");

let year = document.getElementById("year").textContent = new Date().getFullYear();

function modoOscuro() {
    funcionTema = !funcionTema;
    if (funcionTema === false) {
        document.body.style.backgroundColor = verdeOscuro;
        tituloPrincipal.style.color = colorBlanco;
        tituloSecundario.style.color = colorBlanco;
        colorFavoritos.style.color = colorBlanco;
        labels.forEach(label => {label.style.color = colorBlanco});
        textosGenerales.forEach(textosGenerales => {textosGenerales.style.color = colorNegro});
        btnModo.textContent = "Tema Claro";

    }
    else {
        document.body.style.backgroundColor = ""
        tituloPrincipal.style.color = "";
        labels.forEach(label => {label.style.color = ""});
        textosGenerales.forEach(textosGenerales => {textosGenerales.style.color = ""});
        btnModo.textContent = "Tema Oscuro"
        tituloPrincipal.style.color= "";
        tituloSecundario.style.color = "";
          colorFavoritos.style.color = "";
    }
}
btnModo.addEventListener("click", modoOscuro)



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////***** JS RUBEN ******//////////////////////////////////////////////////////////////////////

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
