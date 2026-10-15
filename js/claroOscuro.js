let year = document.getElementById("year").textContent = new Date().getFullYear();
//esta primera línea es el JS de la fecha del footer, cçopiala y pégala.

let btnModo = document.getElementById("btnModo")
let funcionTema = true

let styles = getComputedStyle(document.documentElement)
let colorBlanco = styles.getPropertyValue("--color-blanco")
let colorPrincipal = styles.getPropertyValue("--color-principal")
let verdeOscuro = styles.getPropertyValue("--verde-oscuro")

let tituloPrincipal = document.querySelector("h1")
let tituloH4 = document.querySelectorAll("h4")
let labels = document.querySelectorAll("label")
let textosGenerales = document.querySelectorAll("p")
let textoSenda = document.querySelectorAll(".textoSenda") //esto es porque si no se pone en blanco en el modo oscuro

function modoOscuro() {
    funcionTema = !funcionTema;
    
    if (funcionTema === false) {
        document.body.style.backgroundColor = verdeOscuro;
        tituloPrincipal.style.color = colorBlanco;

        labels.forEach(label => {label.style.color = colorBlanco });
        textosGenerales.forEach(textoGeneral => {textoGeneral.style.color = colorBlanco });
        textoSenda.forEach(textosSenda => {textosSenda.style.color = verdeOscuro });
        tituloH4.forEach(h4 => {h4.style.color = colorBlanco });

        btnModo.textContent = "Tema claro";
    }

    else {
        document.body.style.backgroundColor = "";
        tituloPrincipal.style.color = "";

        labels.forEach(label => { label.style.color = "" });
        textosGenerales.forEach(textoGeneral => { textoGeneral.style.color = "" });
        textoSenda.forEach(textosSenda => {textosSenda.style.color = "" });
        tituloH4.forEach(h4 => {h4.style.color = "" });

        btnModo.textContent = "Tema oscuro";
    }
}
btnModo.addEventListener("click", modoOscuro)