console.log("Olá Aluno! Vamos calcular sua média.\n");
const nota1 = parseFloat(prompt("Qual a nota do primeiro bimestre?"));
const nota2 = parseFloat(prompt("Qual a nota do segundo bimestre?"));
const nota3 = parseFloat(prompt("Qual a nota do terceiro bimestre?"));
const nota4 = parseFloat(prompt("Qual a nota do quarto bimestre?"));

let media = (nota1+nota2+nota3+nota4)/4;

if (media >= 70 && media <= 100){
  console.log("\nSua média foi de", media, "\nVocê foi aprovado.\n");
}else if (media < 70 && media >= 0){
  console.log("\nSua média foi de", media, "\nVocê foi reprovado.\n");
}else {
  console.log("A média foi de", media, "\nDados inconsistentes.\nMédia não pode ser menor que 0 e maior que 100.\nVerifique as notas e tente novamente.")
}