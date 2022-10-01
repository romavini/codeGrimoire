let nota1 = parseFloat(prompt("insira nota"));
let nota2 = parseFloat(prompt("insira nota"));
let nota3 = parseFloat(prompt("insira nota"));
let nota4 = parseFloat(prompt("insira nota"));


media = (nota1 + nota2 + nota3 + nota4) / 4
console.log("media", media);

if (media >= 70) {
  console.log("aprovado")
} else {
  console.log(" reprovado")