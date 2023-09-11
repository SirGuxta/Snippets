
const cores = ["red", "green", "blue"]

const elemento = document.getElementById("alvo")


var contador = 0


function principal () {
    if (contador == 3) {
        contador = 0
    }

    elemento.style.background = cores[contador]
}


elemento.addEventListener("click", function() {contador++})

setInterval(principal, 10)
