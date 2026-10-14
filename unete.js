
// adding code for the quantity of plazas available when the user select the route
let plazas = document.getElementById("plazas");

const PLAZAS = {
        "senda-rio": 12,
        "collado": 10,
        "pico-alto": 8,
        "hayedo": 14, 
        "cresta-aguilas": 8,
        "valle": 10 
        
    };
    
    function plazasDisponibles (){
        let disponibles = PLAZAS[ruta.value];

        plazas.textContent = `Plazas disponibles: ${disponibles}`;
        personas.max = Math.min(6, disponibles);

    }
    
    ruta.addEventListener("change", plazasDisponibles);
    plazasDisponibles();
    
