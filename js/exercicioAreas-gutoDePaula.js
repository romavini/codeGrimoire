const PI = 3.14159;

//introdução

console.log("Insira os valores para saber as áreas de um \u001b[31mtriângulo retângulo\u001b[0m, \u001b[33mcírculo\u001b[0m, \u001b[34mtrapézio\u001b[0m, \u001b[35mquadrado\u001b[0m e \u001b[36mretângulo\u001b[0m.");
console.log();

//entrada dos valores

let valorA =parseFloat(prompt("Valor A:"));
let valorB =parseFloat(prompt("Valor B:"));
let valorC =parseFloat(prompt("Valor C:"));
console.log();

//calculo das respectivas áreas

let areaTri = (valorA * valorC)/2;
let areaCir = PI * valorC**2;
let areaTra = (valorA + valorB) * valorC/2;
let areaQua = valorB * valorB;
let areaRet = valorA * valorB;

//exibição dos cálculos para o usuário

console.log ("A área do \u001b[31mtriângulo\u001b[0m é "+areaTri.toFixed(3)+".");
console.log ("A área do \u001b[33mcírculo\u001b[0m é "+areaCir.toFixed(3)+".");
console.log ("A área do \u001b[34mtrapézio\u001b[0m é "+areaTra.toFixed(3)+".");
console.log ("A área do \u001b[35mquadrado\u001b[0m é "+areaQua.toFixed(3)+".");
console.log ("A área do \u001b[36mretângulo\u001b[0m é "+areaRet.toFixed(3)+".");
