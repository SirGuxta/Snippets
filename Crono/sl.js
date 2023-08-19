
 //Declarando Váriaveis:
var seg = 0;
var segSTR = ""

var min = 0;
var minSTR = "00"


 //Função onde é executado o algoritmo/lógica:
function aumentar () {
    seg = seg + 1

    segSTR = seg.toString()

     //Acrescenta +1 a ao contador dos minutos caso o segundos atinjam 60
    if (seg == 60) {
        min = min + 1
        seg = 0

        segSTR = seg.toString()

        minSTR = min.toString()
    }

     //Acrescenta "0" à esquerda caso necessário (é mais estético)
    if (segSTR.length < 2) {
        segSTR = "0" + segSTR
    }

    if (minSTR.length < 2 ) {
        minSTR = "0" + minSTR
    }

    console.log(seg)

     //"Passa" os novos dados para o objeto de destino no HTML
    document.getElementById("seg").textContent = segSTR
    document.getElementById("min").textContent = minSTR
}


 //Repete a função do primeiro parâmetro a cada 1000ms = 1s
setInterval(aumentar, 1000)

