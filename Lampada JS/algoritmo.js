
 //Declarando/puxando os objetos que vamos lidar do HTML:
const botao_ligar = document.getElementById("botao_ligar");

const botao_desligar = document.getElementById("botao_desligar");

const imagem = document.getElementById("imagem");


 //Funções que vão tratar/processar o clique dos botões e realizar determinadas acões:

 //Criando função de "escuta", ou seja, quando o botão for clicado ele irá alterar a imagem do objeto imagem:
botao_ligar.addEventListener("click", function() {imagem.src = "./src/imagens/lampada_acessa.jpg"})


 //Aqui a mesma coisa só que trocando para outro arquivo .jpg, no caso, o da lampada apagada:
botao_desligar.addEventListener("click", function() {imagem.src = "./src/imagens/lampada_apagada.jpg"})
