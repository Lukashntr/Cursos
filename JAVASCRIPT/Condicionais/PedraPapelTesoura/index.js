
let numberAleatorio1 = Math.floor(Math.random() * 3);
let jogador = Math.floor(Math.random() * 3);
let resultado;

// 0 pedra, 1 papel, 2 tesoura

let pedra = "pedra";
let papel = "papel";
let tesoura = "tesoura";



if (jogador === 0 && numberAleatorio1 === 0) {
    console.log("Empate! Ambos escolheram pedra.");
} else if (jogador === 1 && numberAleatorio1 === 1) {
    console.log("Empate! Ambos escolheram papel.");
} else if (jogador === 2 && numberAleatorio1 === 2) {
    console.log("Empate! Ambos escolheram tesoura.");
} else if (jogador === 0 && numberAleatorio1 === 2) {
    console.log("O jogador venceu! Pedra quebra tesoura.");
} else if (jogador === 1 && numberAleatorio1 === 0) {
    console.log("O jogador venceu! Papel cobre pedra.");
} else if (jogador === 2 && numberAleatorio1 === 1) {
    console.log("O jogador venceu! Tesoura corta papel.");
} else if (jogador === 0 && numberAleatorio1 === 1) {
    console.log("O computador venceu! Papel cobre pedra.");
} else {
    console.log("O computador venceu! Tesoura corta papel.");
}