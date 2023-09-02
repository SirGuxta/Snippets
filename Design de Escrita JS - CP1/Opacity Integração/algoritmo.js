
const texto = document.getElementById("textoalvo")


const ary = ["Você", "Já", "Pensou", "Em mudar de vida?", "Então venha para a GYM MASTER!"]
texto.textContent = ary[0]


var arycont = 0


var contador = 0


function principal() {

    if (contador % 2 == 0) {
        texto.style.animation = "emanecer 2s"

        arycont++
        
        if (arycont == 5) {
            arycont = 0
        }

        texto.textContent = ary[arycont]
    }
    if (contador % 2 == 1) {
        texto.style.animation = "desmanecer 2s"
    }

    
    
    contador++
}

setInterval(principal, 2000)
