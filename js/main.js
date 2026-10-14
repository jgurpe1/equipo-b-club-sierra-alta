// Código de la web

//                  scrip para el apartado de materiales
//============================================================================

(function () {
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

    function contar() {
        let marcados = listaMaterial.querySelectorAll("input:checked").length;
        let totalMateriales = materiales[lista.value].length;

        resultado.textContent = `Estás equipado con ${marcados} de ${totalMateriales}`;
    }

    if (lista && listaMaterial && resultado) {
        lista.addEventListener("change", dificultad);
    }
})();

