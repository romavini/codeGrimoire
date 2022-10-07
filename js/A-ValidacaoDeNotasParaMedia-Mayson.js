// TERCEIRA RESOLUÇÃO:

let nota = 0;
let totalNotas = 0;

for (let periodo = 1; periodo <= 4; periodo++) {
  nota = parseFloat(prompt("- Informe a nota do " + periodo + "º período ="));
  while (nota < 0 || nota > 100 || isNaN(nota)) {
    alert("\n** Nota não pode ser menor que 0 e/ou maior 100 **");
    nota = parseFloat(prompt("- Informe a nota do " + periodo + "º período ="));
  }
  totalNotas += nota;
}

const media = totalNotas / 4;

alert("- A média das notas informadas é => " + media);

if (media < 70) {
  alert("- Média insuficiente para aprovação (REPROVADO)");
} else {
  alert("- Média suficiente para aprovação (APROVADO)");
};

// PRIMEIRA RESOLUÇÃO:

// let nota1 = parseFloat(prompt("Informe a nota do 1º  Bimestre ="));

// while (nota1 < 0 || nota1 > 100) {
//   alert("\nNota não pode ser menor que 0 e/ou maior 100");
//   alert("----------------------------------------------\n");
//   nota1 = parseFloat(prompt("Informe a nota do 1º  Bimestre ="));
// };

// let nota2 = parseFloat(prompt("Informe a nota do 2º  Bimestre ="));

// while (nota2 < 0 || nota2 > 100) {
//   alert("\nNota não pode ser menor que 0 e/ou maior 100");
//   alert("----------------------------------------------\n");
//   nota2 = parseFloat(prompt("Informe a nota do 2º  Bimestre ="));
// };

// let nota3 = parseFloat(prompt("Informe a nota do 3º  Bimestre ="));

// while (nota3 < 0 || nota3 > 100) {
//   alert("\nNota não pode ser menor que 0 e/ou maior 100");
//   alert("----------------------------------------------\n");
//   nota3 = parseFloat(prompt("Informe a nota do 3º  Bimestre ="));
// };

// let nota4 = parseFloat(prompt("Informe a nota do 4º  Bimestre ="));

// while (nota4 < 0 || nota4 > 100) {
//   alert("\nNota não pode ser menor que 0 e/ou maior 100");
//   alert("----------------------------------------------\n");
//   nota4 = parseFloat(prompt("Informe a nota do 4º  Bimestre ="));
// };

// const media = parseFloat((nota1 + nota2 + nota3 + nota4) / 4);

// alert("-------------------------------------");
// alert("A média das notas informadas é => " + media);
// alert("-------------------------------------");
// if (media < 70) {
//   alert("Média insuficiente para aprovação (REPROVADO)");
// } else{
//   alert("Média suficiente para aprovação (APROVADO)");};

// SEGUNDA RESOLUÇÃO:

// let nota1 = parseFloat(prompt("Informe a nota do 1º  Bimestre ="));
// let nota2 = parseFloat(prompt("Informe a nota do 2º  Bimestre ="));
// let nota3 = parseFloat(prompt("Informe a nota do 3º  Bimestre ="));
// let nota4 = parseFloat(prompt("Informe a nota do 4º  Bimestre ="));

// while (nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 || nota3 > 100 || nota4 < 0 || nota4 > 100) {
//   if (nota1 < 0 || nota1 > 100) {
//     alert("\nNota não pode ser menor que 0 e/ou maior 100")
//     nota1 = parseFloat(prompt("Informe a nota do 1º  Bimestre ="));
//   } else if (nota2 < 0 || nota2 > 100) {
//     alert("\nNota não pode ser menor que 0 e/ou maior 100")
//     nota2 = parseFloat(prompt("Informe a nota do 2º  Bimestre ="));
//   } else if (nota3 < 0 || nota3 > 100) {
//     alert("\nNota não pode ser menor que 0 e/ou maior 100")
//     nota3 = parseFloat(prompt("Informe a nota do 3º  Bimestre ="));
//   } else {
//     alert("\nNota não pode ser menor que 0 e/ou maior 100")
//     nota4 = parseFloat(prompt("Informe a nota do 4º  Bimestre ="));
//   };
// };
// const media = parseFloat((nota1 + nota2 + nota3 + nota4) / 4);
// alert("A média das notas informadas é => " + media);
// if (media < 70) {
//   alert("Média insuficiente para aprovação (REPROVADO)");
// } else {
//   alert("Média suficiente para aprovação (APROVADO)");
// };
