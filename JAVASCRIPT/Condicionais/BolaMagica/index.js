// bola magica 8 

let numeroAleatorio = Math.floor(Math.random() * 9) + 1;
const pergunta = " spotify é melhor que youtube music? ";
let resposta = "";

if (numeroAleatorio < 1) {
    resposta = "Sim - com certeza";
}else if (numeroAleatorio < 2) {
    resposta = "É, sem dúvidas";
}else if (numeroAleatorio < 3) {
    resposta = "Sem dúvidas";
}else if (numeroAleatorio < 4) {
   resposta = "Resposta incerta, tente novamente";
}else if (numeroAleatorio < 5) {
    resposta = "Pergunte de novo mais tarde";
}else if (numeroAleatorio < 6) {
    resposta = "Melhor nao contar agora";
}else if (numeroAleatorio < 7) {
    resposta = "minhas fontes dizem que não";
} else if (numeroAleatorio < 8) {
    resposta = "Perpectiva nao muito boa";
} else if (numeroAleatorio < 9) {
    resposta = "Sim, com certeza";
} else {
    resposta = "Muito duvidoso";
}
console.log(pergunta);
console.log(resposta);




