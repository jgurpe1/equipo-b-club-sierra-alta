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