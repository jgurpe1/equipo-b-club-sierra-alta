fetch("rutas.html")
    .then(respuesta => respuesta.text())
    .then(texto => {
        let pagina = new DOMParser().parseFromString(texto, "text/html");

        let hoy = new Date();
        let proximaSalida = Date.parse(pagina.querySelector(".fecha").textContent);

        let diasQueFaltan = (proximaSalida - hoy) / 86400000;
        // 86400000 es el numeor de MS por dia. No tocar.

        diasQueFaltan = Math.ceil(diasQueFaltan);
        // redondeado para arriba.

        let diasProximaSalida = document.getElementById("dias-proxima-salida");
        diasProximaSalida.textContent = diasQueFaltan;

        let nombreProximaSalidaIndex = document.getElementById("nombre-proxima-salida");
        let nombreProximaSalidaRutas = pagina.querySelector(".senda h4").textContent;

        nombreProximaSalidaIndex.textContent = nombreProximaSalidaRutas;
    });