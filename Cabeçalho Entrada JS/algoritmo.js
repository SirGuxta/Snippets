

const cabecalho = document.getElementById("alvo")


var contador = 0


function principal() {
    if (contador <= 100) {
        cabecalho.style.width = contador + "%"
    }

    contador++
}


setInterval(principal, 1000/60)

