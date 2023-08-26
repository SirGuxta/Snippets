

const botao = document.getElementById("botao")

const catalogo = document.getElementById("catalogo")

var vef = false

var pcontrole = 1

var contador = 1



const ite = document.getElementById("ite")


const item = document.getElementById("item")


const item_ = document.getElementById("item_")


ite.style.background = "transparent"
item.style.background = "transparent"
item_.style.background = "transparent"


botao.addEventListener("click", function() {

    if (pcontrole == 1 && contador == 50) {
        pcontrole = 2
        contador = 0

        console.log("Primeiro 'se' acionado")
    }
    if (pcontrole == 2 && contador == 50) {
        pcontrole = 1
        contador = 0
    }

    if (contador < 50) {
        vef = true
    }
}
)


function principal() {
    if (vef && pcontrole == 1) {
        document.getElementById("aux").textContent = contador + " " + vef
        ite.style.background = "#E37E5D"

        item.style.background = "#E37E5D"
        item.style.transform = "translate(0px, " + contador*0.6 + "px)"
        
        item_.style.background = "#E37E5D"
        item_.style.transform = "translate(0px," + contador*1.2 + "px)"
        
        contador = contador + 1

        catalogo.style.color = "black"

        if (contador == 50) {
            vef = false
        }
    }
    if (vef && pcontrole == 2) {
        document.getElementById("aux").textContent = contador + " " + vef
        item.style.transform = "translate(0px, " + (50*0.6 - contador*0.6) + "px)"

        item_.style.transform = "translate(0px, " + (50*1.2 - contador*1.2) + "px)"
        contador = contador + 1

        console.log("segundo laço de controole ativado")

        if (contador == 50) {
            catalogo.style.color = "transparent"

            ite.style.background = "transparent"
            item.style.background = "transparent"
            item_.style.background = "transparent"

            vef = false
        }

    }
}

setInterval(principal, 10)

