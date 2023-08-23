

const foto = document.getElementById("imagem")


const ancora = document.getElementById("ancora")

var contador = 1


console.log("Código iniciado!")


function trocarIMG() {
    if (contador % 2 == 1) {
        foto.src = "./src/imagens/cachorro2.jpg";
    }
    else {
        foto.src = "./src/imagens/cachorro1.jpg";
    }

    contador = contador + 1;

}

ancora.addEventListener("click", trocarIMG)

