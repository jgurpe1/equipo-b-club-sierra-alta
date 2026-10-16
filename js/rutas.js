//JS de la página Rutas


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
/*

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

// JS de la página Rutas


const corazones = document.querySelectorAll(".corazon");
const contador = document.querySelector(".favoritos");


// 1. Función que cuenta los favoritos del nivel elegido
function mostrarFavoritosSegunNivel() {
    let nivel = level.value;
    let total = 0;

    for (let i = 0; i < sendas.length; i++) {
        let corazon = sendas[i].querySelector(".corazon");
        let esFavorita = corazon.textContent !== "♡";
        let coincide = nivel === "todas" || sendas[i].classList.contains(nivel);

        if (esFavorita && coincide) total++;
    }

    contador.textContent = "Favoritos: " + total;
}

// 2. UN solo bucle para los corazones
for (let i = 0; i < corazones.length; i++) {
    let unCorazon = corazones[i];          // let DENTRO del bucle
    unCorazon.addEventListener("click", function () {
        unCorazon.textContent = unCorazon.textContent === "♡" ? "❤️" : "♡";
        mostrarFavoritosSegunNivel();
    });
}

// 3. UN solo listener para el select
level.addEventListener("change", function () {
    let nivelDificultad = level.value;

    for (let i = 0; i < sendas.length; i++) {
        let sendasDificultad = sendas[i].classList.contains("facil") ? verde :
                               sendas[i].classList.contains("media") ? amarillo : rojo;

        switch (nivelDificultad) {
            case "facil":
                sendas[i].style.display = sendasDificultad === verde ? "" : "none";
                break;
            case "media":
                sendas[i].style.display = sendasDificultad === amarillo ? "" : "none";
                break;
            case "dificil":
                sendas[i].style.display = sendasDificultad === rojo ? "" : "none";
                break;
            default:
                sendas[i].style.display = "";
        }
    }

    mostrarFavoritosSegunNivel();   // después del for, dentro del listener
});

*/
