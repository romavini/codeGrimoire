"use strict"

console.log("Conversão de Celsius e Fahrenheit");
console.log("=================================");
const valorTemp = parseFloat(prompt("Informe o valor para conversão ="));
console.log("=================================");
console.log("1 - Celsius para Fahrenheit");
console.log("2 - Fahrenheit para Celsius");
const temp = parseInt(prompt("    Insira a opção ="));

const op1 = valorTemp * 1.8 + 32;
const op2 = (valorTemp - 32) / 1.8;

if (temp === 1) {
  console.log("=================================");
  console.log(op1.toFixed(2), "Fahrenheit");
}
else if (temp === 2) {
  console.log("=================================");
  console.log(op2.toFixed(2), "Celsius");
}
else {
  console.log("=================================");
  console.log("Escolha uma conversão (1 ou 2) para operação válida");
};