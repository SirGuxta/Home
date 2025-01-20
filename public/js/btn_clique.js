
const acionador = document.getElementById("acionador");

const alvo = document.getElementById("alvo");


var contador = 100;
var statu = false;

function principal() {
    if (contador > 1 && statu == false) {

        contador = contador - 1;

        console.log(1/contador);

        alvo.style.opacity = 1/contador;

        if (contador == 0) {
            alvo.style.opacity = 1;
            statu = true;
        }
    }
}

function teste() {
    setInterval(principal, 20);
}

acionador.addEventListener("mouseover", teste)
