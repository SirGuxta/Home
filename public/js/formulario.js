
const alvo2 = document.getElementById("formulario");

const acionador2 = document.getElementById("acionador");


function minhaFunc() {
    alvo2.style.opacity = "1";
    alvo2.style.position = "relative";
    alvo2.style.marginLeft = "400px";

    console.log("funfando!");
}

acionador2.addEventListener("click", minhaFunc);
