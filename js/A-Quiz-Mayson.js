"use strict"

console.log("Olá JOGADOR, bora responder o BADQUIZ!\nCada pergunta vale 10 pontos!\n");
console.log("Qual o dispositivo que faz o bebê parar de chorar?");
const r1 = parseInt(prompt("1 - Chupeta ou 2 - Interruptor"));
let total = 0;

if (r1 === 1 ){
  console.log("\nUau! Certa a resposta\nMarcou 10 pontos");
  total = total + 10;
  console.log("No total você já marcou", total, "pontos, bora para a próxima pergunta\n");
} else {
   console.log("\nQue pena! Você errou, mas ainda tá no jogo,\nbora para a próxima pergunta!\n");
}

console.log("Qual é o objeto que Silvio Santos tinha como marca preso na camisa?");
const r2 = parseInt(prompt("1 - Broche ou 2 - Microfone"));

if (r2 === 2){
  console.log("\nUau! Certa a resposta\nMarcou 10 pontos");
  total = total + 10;
  console.log("No total você já marcou", total, "pontos, bora para a próxima pergunta\n");
} else {
   console.log("\nQue pena! Você errou, mas ainda tá no jogo,\nbora para a próxima pergunta!\n");
}

console.log("Qual é a torre mais famosa de Paris?");
const r3 = parseInt(prompt("1 - Pisa ou 2 - Eiffel"));

if (r3 === 2){
  console.log("\nUau! Certa a resposta\nMarcou 10 pontos\n");
  total = total + 10;
} else {
   console.log("Que pena! Você errou\n");
}

console.log("Fim de jogo, você chegou ao final do quiz!\nSua pontuação total foi de", total, "ponto(s)");