console.log("Conversão de Celsius e Fahrenheit \n1 - Celsius para Fahrenheit \n2 - Fahrenheit para Celsius");

let conversao = parseInt(prompt("Insira a opção"));

function conversaoCparaF(C) {
  return 1.8 * C + 32;
};

function conversaoFparaC(F) {
  return (F - 32) / 1.8;
};

while (conversao != 1 && conversao != 2) {
  conversao = parseInt(prompt("Insira a opção"));
};

if (conversao === 1) {
  let C = parseFloat(prompt("Digite a temperatura em graus Celsius"));
  console.log(conversaoCparaF(C), "graus Fahrenheit");
} else if (conversao === 2) {
  let F = parseFloat(prompt("Digite a temperatura em Fahrenheit"));
  console.log(conversaoFparaC(F), "graus Celsius");
};